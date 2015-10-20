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
 * gamut.asArray('c d e') // => [ 'c', 'd', 'e' ]
 * gamut.asArray('CMaj7 | Dm7 G7') // => [ 'CMaj7', 'Dm7', 'G7' ]
 * gamut.asArray('1, 2, 3') // => ['1', '2', '3']
 * gamut.asArray([1, 'a', 3]) // => [1, 'a', 3]
 * gamut.asArray(object) // => [ object ]
 * gamut.asArray(null) // => [ ]
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
 * Convert from pitch-array notation to a note name (pitch) string. Suitable
 * for single elements or arrays of pitches
 *
 * @name asNotes
 * @function
 * @param {Array|Array<Array>} source - the item or items to stringify
 * @return {Array<String>} the note names
 */
gamut.asNotes = function (source) {
  return gamut(source).map(function (p) {
    return typeof p === 'string' ? p : asPitch(p)
  })
}

/**
 * Convert from pitch-array notation to a interval string. Suitable
 * for single elements or arrays of intervals
 *
 * @name asIntervals
 * @function
 * @param {Array|Array<Array>} source - the item or items to stringify
 * @return {Array<String>} the intervals names
 */
gamut.asIntervals = function (source) {
  return gamut(source).map(function (p) {
    return typeof p === 'string' ? p : asInterval(p)
  })
}

/**
 * @name pitchClasses
 * @function
 */
gamut.pitchClasses = function (source) {
  return gamut.asNotes(op.pitchClasses(gamut.parse(source)))
}

/**
 * @name simplify
 * @function
 */
gamut.simplify = function (source) {
  return gamut.asIntervals(op.simplify(gamut.parse(source)))
}

/**
 * @name heights
 * @function
 */
gamut.heights = function (source) {
  return op.heights(gamut.parse(source))
}

/**
 * @name transpose
 * @function
 */
gamut.transpose = function (tonic, source) {
  var t = parse(tonic)
  return gamut.asNotes(op.transpose(t, gamut.parse(source)))
}

/**
 * @name distances
 * @function
 */
gamut.distances = function (tonic, source) {
  var t = parse(tonic)
  if (tonic && !t) return []
  return gamut.asIntervals(op.distances(t, gamut.parse(source)))
}

/**
 * @name uniq
 * @function
 */
gamut.uniq = function (source) {
  return gamut.asNotes(op.uniq(gamut.parse(source)))
}

/**
 * @name intervalSet
 * @function
 */
gamut.intervalSet = function (source) {
  return gamut.asIntervals(op.intervalSet(gamut.parse(source)))
}

/**
 * @name pitchSet
 * @function
 */
gamut.pitchSet = function (source) {
  return gamut.asNotes(op.pitchSet(gamut.parse(source)))
}

/**
 * @name binarySet
 * @function
 */
gamut.binarySet = function (source) {
  return op.binarySet(gamut.parse(source))
}

/**
 * @name fromBinarySet
 * @function
 */
gamut.fromBinarySet = function (source, tonic) {
  return gamut.asNotes(op.transpose(parse(tonic), op.fromBinarySet(source)))
}

module.exports = gamut
