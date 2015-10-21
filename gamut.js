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
 * @example
 * gamut.parse('C D') // => [ [0, 0, null], [1, 0, null]]
 * gamut.parse('1P 2M 3m') // => [ [0, 0, 0], [1, 0, 0], [2, -1, 0] ]
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
 *
 * @example
 * gamut.pitchClasses('C2 D4 E') // => ['C', 'D', 'E']
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
 *
 * @example
 * gamut.simplify('1P 2M 9m') // => ['1P', '2M', '2m']
 */
gamut.simplify = function (source) {
  return gamut.intervals(op.simplify(gamut.parse(source)))
}

/**
 * Get the heights of the notes or intervals. The height of a note is the
 * distance in semitones from `'C0'` to the note. Applied to intervals,
 * is the number of semitones
 *
 * @name heights
 * @function
 * @param {String|Array|Array<Array>} source - the gamut
 * @return {Array<Integer>} the heights
 *
 * @example
 * gamut.heights('C0 D0 C1') // => [0, 2, 12]
 */
gamut.heights = function (source) {
  return op.heights(gamut.parse(source))
}

/**
 * Transpose a list of notes by an interval
 *
 * If the pitch to tranpose is a pitch class (note name without octave),
 * the transposed pitch will be a pitch class.
 *
 * @name transpose
 * @function
 * @param {String|Array} interval - the interval to transpose
 * @param {String|Array|Array<Array>} source - the gamut
 * @return {Array<Array>} the transposed notes
 *
 * @example
 * gamut.transpose('M2', 'C D E') // => ['D', 'E', 'F#']
 * gamut.transpose('M2', 'C2 D3 E2') // => ['D2', 'E3', 'F#2']
 */
gamut.transpose = function (interval, source) {
  var i = parse(interval)
  return gamut.notes(op.transpose(i, gamut.parse(source)))
}

/**
 * Add an interval to a gamut of intervals
 *
 * @name transpose
 * @function
 * @param {String|Array} interval - the interval to add
 * @param {String|Array|Array<Array>} source - the gamut
 * @return {Array<Array>} the gamut added by the interval
 *
 * @example
 * gamut.add('M2', '1P 2M 3M') // => ['2M', '3M', '4A']
 */
gamut.add = function (interval, source) {
  var i = parse(interval)
  return gamut.intervals(op.transpose(i, gamut.parse(source)))
}

/**
 * Get the distances (in intervals) of the notes from a tonic
 *
 * If the tonic is null, the first note of the gamut is asumed to be the tonic
 *
 * __Important__: al pitch classes are converted to octave 0 before calculating
 * the distances.
 *
 * @name distances
 * @function
 * @param {String|Array} tonic - (Optional) the note to calculate the interval
 * from. If its null, the first note of the gamut is the tonic
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
 * @return {Array<String>} the notes
 *
 * @example
 * gamut.uniq('C D blah E2 E3') // => ['C', 'D', 'E2', 'E3']
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
 * @return {Array<String>} the sorted notes
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
 * @name sortBySize
 * @function
 * @param {String|Array|Array<Array>} source - the gamut
 * @return {Array<String>} the sorted intervals
 *
 * @example
 * gamut.sortBySize('5 4 3 2 1') // => ['1P', '2M', '3M', '4P', '5P']
 */
gamut.sortBySize = function (source) {
  return gamut.intervals(op.sort(gamut.parse(source)))
}

/**
 * Get the interval set of the gamut. An interval set is a group of ascending
 * simple intervals with no repetitions.
 *
 * @name intervalSet
 * @function
 * @param {String|Array|Array<Array>} source - the gamut
 * @return {Array<String>} the intervals
 *
 * @example
 * gamut.intervalSet('1P 2M 3m 8P 9M 10M') // => ['1P', '2M', '3m', '3M']
 */
gamut.intervalSet = function (source) {
  return gamut.intervals(op.intervalSet(gamut.parse(source)))
}

/**
 * Get the pitch set of the gamut. A pitch set is a group of note names without
 * octave and no repretition in ascending order (starting from the first note)
 *
 * @name pitchSet
 * @function
 * @param {String|Array|Array<Array>} source - the gamut
 * @return {Array<String>} the pitch classes (note names without octaves)
 *
 * @example
 * gamut.pitchSet('D4 D5 E6 Eb5 C2') // => ['D', 'Eb', 'E', 'C']
 */
gamut.pitchSet = function (source) {
  return gamut.notes(op.pitchSet(gamut.parse(source)))
}

/**
 * Get the binary set number from a collection of notes.
 *
 * A binary set number is a 12 digit binary numbers, each digit represent a
 * note in the chromatic scale. For example '10101100000' means ['C', 'D', 'E', 'F']
 *
 * The binary set representation is very useful to compare different sets
 * (scales, for example)
 *
 * @name binarySet
 * @function
 * @param {String|Array|Array<Array>} source - the gamut
 * @return {String} the binary number
 *
 * @example
 * gamut.binarySet('C D E F G A B C') // => '101011010101'
 */
gamut.binarySet = function (source) {
  return op.binarySet(gamut.parse(source))
}

/**
 * Get a note set from a binary set number and a (optionally) a tonic.
 *
 * This function accepts binary numbers (as strings) or integers. For example,
 * `2773` identify the major scale.
 *
 * @see `binarySet`
 *
 * @name fromBinarySet
 * @function
 * @param {String|Array|Array<Array>} source - the gamut
 * @param {String} tonic - (Optional) the first note of the set ('C' by default)
 * @return {Array<String>} the set pitch classes (note names without octaves)
 *
 * @example
 * gamut.fromBinarySet('101011010101') // => ['C', 'D', 'E', 'F', 'G', 'A', 'B']
 * gamut.fromBinarySet(2773, 'Bb') // => ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A']
 */
gamut.fromBinarySet = function (source, tonic) {
  tonic = tonic || [0, 0, 0]
  return gamut.notes(op.transpose(parse(tonic), op.fromBinarySet(source)))
}

module.exports = gamut
