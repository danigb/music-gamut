'use strict'

var asPitch = require('pitch-parser')
var asInterval = require('interval-parser')
var op = require('./operations')

// separator pattern to convert a list string to an array
var SEP = /\s*\|\s*|\s*,\s*|\s+/

/**
 * Get a gamut: create an array from a source. The source can be a string with items separated by
 * spaces, commas or bars (`|`), an array or an object.
 *
 * If the source is an array, it's returned as it. If its an object you get an
 * array with the object as the only element.
 *
 * This function does not perform any transformation to the items of the array.
 * This function __always__ return an array, even if its empty
 *
 * @name gamut
 * @function
 * @param {String|Array|Object} source - the source
 * @return {Array} the source converted to an array (never null)
 *
 * @example
 * gamut('c d e') // => [ 'c', 'd', 'e' ]
 * gamut('CMaj7 | Dm7 G7') // => [ 'CMaj7', 'Dm7', 'G7' ]
 * gamut('1, 2, 3') // => ['1', '2', '3']
 * gamut([1, 'a', 3]) // => [1, 'a', 3]
 * gamut(object) // => [ object ]
 * gamut(null) // => [ ]
 */
function gamut (source) {
  if (Array.isArray(source)) return source
  else if (typeof source === 'string') return source.split(SEP)
  else if (source === null || typeof source === 'undefined') return []
  else return [ source ]
}

function parse (i) { return Array.isArray(i) ? i : (asPitch(i) || asInterval(i)) }

/**
 * Parses a string or a collection of strings into pitch-array notation
 *
 * @name parse
 * @function
 * @param {String|Array<String>} source - the item or items to be parsed
 * @return {Array|Array<Array>} the value or values in pitch array notation.
 * Items can be null but an array will be always be returned.
 *
 */
gamut.parse = function (source) {
  return gamut(source).map(parse)
}

/**
 * Get the note names of the gamut. Everything is not a note will be null.
 *
 * @name notes
 * @function
 * @param {String|Array|Array<Array>} source - the gamut
 * @return {Array<String>} the gamut note names
 *
 * @example
 * gamut.notes('C blah D') // => ['C', null, 'D']
 */
gamut.notes = function (source) {
  return gamut(source).map(function (p) {
    return asPitch(Array.isArray(p) ? p : parse(p))
  })
}

/**
 * Get the intervals of the gamut. Everything is not an interval will be null.
 *
 * @name intervals
 * @function
 * @param {String|Array|Array<Array>} source - the gamut
 * @return {Array<String>} the gamut intervals
 *
 * @example
 * gamut.intervals('1 C#4 3m') // => ['1P', null, '3m']
 */
gamut.intervals = function (source) {
  return gamut(source).map(function (p) {
    return asInterval(Array.isArray(p) ? p : parse(p))
  })
}

/**
 * Remove the octaves from the notes
 *
 * @name pitchClasses
 * @function
 * @param {String|Array|Array<Array>} source - the gamut
 * @return {Array<String>} the pitch classes
 */
gamut.pitchClasses = function (source) {
  return gamut.notes(op.pitchClasses(gamut.parse(source)))
}

/**
 * Convert all compound intervals to simple intervals
 *
 * @name simplify
 * @function
 * @param {String|Array|Array<Array>} source - the gamut
 * @return {Array<String>} the simplified intervals
 */
gamut.simplify = function (source) {
  return gamut.intervals(op.simplify(gamut.parse(source)))
}

/**
 * Get the heights of the notes or intervals. The height of a note is the
 * distance in semitones from `'C2'` to the note. Applied to intervals,
 * is the number of semitones
 *
 * @name heights
 * @function
 * @param {String|Array|Array<Array>} source - the gamut
 * @return {Array<Integer>} the heights
 */
gamut.heights = function (source) {
  return op.heights(gamut.parse(source))
}

/**
 * Transpose a list of notes by an interval
 *
 * @name transpose
 * @function
 * @param {String|Array} interval - the interval to transpose
 * @param {String|Array|Array<Array>} source - the gamut
 * @return {Array<Integer>} the transposed notes
 */
gamut.transpose = function (interval, source) {
  var i = parse(interval)
  return gamut.notes(op.transpose(i, gamut.parse(source)))
}

/**
 * Get the distances (in intervals) of the notes from a tonic
 *
 * __Important__: al pitch classes are converted to octave 0 before calculating
 * the distances.
 *
 * @name distances
 * @function
 * @param {String|Array} tonic - the note to calculate the interval from
 * @param {String|Array|Array<Array>} source - the notes
 * @return {Array<String>} the intervals
 *
 * @example
 * gamut.distance('D2', 'D2 E2 F2') // => ['1P', '2M', '3m']
 * // pitch classes are octave 0
 * gamut.distance('C', 'C2') // => ['15P']
 * gamut.distance('C2', 'C') // => ['-15P']
 */
gamut.distances = function (tonic, source) {
  var t = parse(tonic)
  if (tonic && !t) return []
  return gamut.intervals(op.distances(t, gamut.parse(source)))
}

/**
 * Remove duplicates __and__ nulls
 *
 * @name uniq
 * @function
 * @param {String|Array|Array<Array>} source - the gamut
 * @return {Array<String>} the notes or intervals
 */
gamut.uniq = function (source) {
  return gamut.notes(op.uniq(gamut.parse(source)))
}

/**
 * Sort notes in ascending frequency (pitch) order
 *
 * @name sortByFreq
 * @function
 * @param {String|Array|Array<Array>} source - the gamut
 * @return {Array<String>} the sorted notes or intervals
 *
 * @example
 * gamut.sortByFreq('D E F G C') // => ['C', 'D', E', F', 'G']
 */
gamut.sortByFreq = function (source) {
  return gamut.notes(op.sort(gamut.parse(source)))
}

/**
 * Sort intervals by size
 *
 */
gamut.sortBySize = function (source) {
  return gamut.intervals(op.sort(gamut.parse(source)))
}

/**
 * Get the interval set of the gamut
 *
 * @name intervalSet
 * @function
 * @param {String|Array|Array<Array>} source - the gamut
 * @return {Array<String>} the intervals
 */
gamut.intervalSet = function (source) {
  return gamut.intervals(op.intervalSet(gamut.parse(source)))
}

/**
 * Get the pitch set of the gamut
 *
 * @name pitchSet
 * @function
 * @param {String|Array|Array<Array>} source - the gamut
 * @return {Array<String>} the pitch classes (note names without octaves)
 */
gamut.pitchSet = function (source) {
  return gamut.notes(op.pitchSet(gamut.parse(source)))
}

/**
 * Get the gamut pitch set as binary number representation
 *
 * @name binarySet
 * @function
 * @param {String|Array|Array<Array>} source - the gamut
 * @return {String} the binary number
 */
gamut.binarySet = function (source) {
  return op.binarySet(gamut.parse(source))
}

/**
 * Get a pitch set from a binary set number and a tonic
 *
 * @name fromBinarySet
 * @function
 * @param {String|Array|Array<Array>} source - the gamut
 * @param {String} tonic - (Optional) the first note of the set ('C' by default)
 * @return {Array<String>} the set pitch classes (note names without octaves)
 */
gamut.fromBinarySet = function (source, tonic) {
  tonic = tonic || [0, 0, 0]
  return gamut.notes(op.transpose(parse(tonic), op.fromBinarySet(source)))
}

module.exports = gamut
