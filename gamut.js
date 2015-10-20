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
 */
gamut.pitchClasses = function (source) {
  return gamut.notes(op.pitchClasses(gamut.parse(source)))
}

/**
 * @name simplify
 * @function
 */
gamut.simplify = function (source) {
  return gamut.intervals(op.simplify(gamut.parse(source)))
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
  return gamut.notes(op.transpose(t, gamut.parse(source)))
}

/**
 * @name distances
 * @function
 */
gamut.distances = function (tonic, source) {
  var t = parse(tonic)
  if (tonic && !t) return []
  return gamut.intervals(op.distances(t, gamut.parse(source)))
}

/**
 * @name uniq
 * @function
 */
gamut.uniq = function (source) {
  return gamut.notes(op.uniq(gamut.parse(source)))
}

/**
 * @name intervalSet
 * @function
 */
gamut.intervalSet = function (source) {
  return gamut.intervals(op.intervalSet(gamut.parse(source)))
}

/**
 * @name pitchSet
 * @function
 */
gamut.pitchSet = function (source) {
  return gamut.notes(op.pitchSet(gamut.parse(source)))
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
  return gamut.notes(op.transpose(parse(tonic), op.fromBinarySet(source)))
}

module.exports = gamut
