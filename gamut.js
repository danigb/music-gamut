'use strict'

var asPitch = require('pitch-parser')
var asInterval = require('interval-parser')
var op = require('pitch-op')

var toNotes = map(function (p) { return typeof p === 'string' ? p : asPitch(p) })
var toIntervals = map(function (i) { return typeof i === 'string' ? i : asInterval(i) })
function asPitchArray (i) { return isArray(i) ? i : (asPitch(i) || asInterval(i)) }

// separator pattern to convert a list string to an array
var SEP = /\s*\|\s*|\s*,\s*|\s+/
var isArray = Array.isArray

// not documented because I don't know what to do
function gamut (operations, source) {
  return gamut.parse(source)
}

/**
 * Compose functions
 *
 * @name fn
 * @function
 * @param {Array<Function>} operation - an array of functions to compoase
 * @return {Function} the composed function
 */
gamut.fn = function (operations) {
  var ops = operations.reverse()
  var len = ops.length
  return function (value) {
    var arr = gamut.asArray(value)
    for (var i = 0; i < len; i++) {
      arr = ops[i].call(null, arr)
    }
    return arr
  }
}

/**
 * Get an array from a source. The source can be a string separated by
 * spaces, commas or bars (`|`), an array or an object.
 *
 * This function does not perform any transformation to the items of the array.
 * This function __always__ return an array, even if its empty
 *
 * @name asArray
 * @function
 * @param {String|Array|Object} source - the source
 * @return {Array} the source converted to an array
 *
 * @example
 * gamut.asArray('c d e') // => [ 'c', 'd', 'e' ]
 * gamut.asArray('CMaj7 | Dm7 G7') // => [ 'CMaj7', 'Dm7', 'G7' ]
 * gamut.asArray('1, 2, 3') // => ['1', '2', '3']
 * gamut.asArray([1, 'a', 3]) // => [1, 'a', 3]
 * gamut.asArray(object) // => [ object ]
 * gamut.asArray(null) // => [ ]
 */
gamut.asArray = function (source) {
  if (isArray(source)) return source
  else if (typeof source === 'string') return source.split(SEP)
  else if (source === null || typeof source === 'undefined') return []
  else return [ source ]
}

/**
 * Get a gamut mapped to a function
 *
 * Is important to notice that the function will receive pitches in pitch-array notation format.
 *
 * This function can be partially applied (Function -> Array -> Array)
 *
 * @name map
 * @function
 * @param {Function} fn - the function to map the gamut with
 * @param {String|Array} source - the gamut
 * @return {Array} the mapped gamut
 *
 * @example
 * var addOctave = function(p) { return [p[0], p[1], p[2] + 1]}
 * gamut.map(addOctave, [ [0, 0, 0], [1, 0, 0] ]) // => [ [0, 0, 1], [1, 0, 1]]
 * var octaveUp = gamut.map(addOctave)
 * octaveUp([ [0, 0, 0], [1, 0, 0] ]) // => [ [0, 0, 1], [1, 0, 1]]
 */
function map (fn, src) {
  if (arguments.length > 1) return map(fn)(src)
  return function (src) { return gamut.asArray(src).map(fn) }
}
gamut.map = map

/**
 * Convert a list of notes or intervals to pitch-array notation format
 *
 * @name parse
 * @function
 * @param {String|Array} source - the gamut
 * @return {Array} the gamut with notes or intervals in pitch-array notation format
 *
 * @example
 * gamut.parse('C D E') // => [ [0, 0, null], [1, 0, null], [2, 0, null] ]
 * gamut.parse('1P 3M 5P') // => [ [0, 0, 0], [2, 0, 0], [4, 0, 0] ]
 */
function parse (source) { return gamut.asArray(source).map(asPitchArray) }
gamut.parse = parse

function decorate (builder, parser, fn) {
  return function () {
    var len = arguments.length
    if (len === 0) return []
    var args = Array.prototype.slice.call(arguments)
    args[len - 1] = parser(args[len - 1])
    return builder(fn.apply(null, args))
  }
}

/**
 * Get notes from a gamut, or decorate a function to return notes
 *
 * @name asNotes
 * @function
 * @param {Array<Array>|Function} source
 * @return {Array<String>|Function} an array of strings with note names or a function
 * decorated to return an array of pitch strings
 *
 * @example
 * gamut.asNotes('1P 2M 3M') // => ['C0', 'D0', 'E0']
 * var transpose = gamut.asNotes(gamut.add)
 * transpose('2M', 'C D E') // => [ 'D', 'E', 'F#' ]
 */
gamut.asNotes = function (src) {
  return typeof src === 'function' ? decorate(toNotes, parse, src) : toNotes(parse(src))
}

/**
 * Get the gamut as intervals or decorate a function to return intervals
 *
 * @name asIntervals
 * @function
 * @param {Array<Array>|Function} source
 * @return {Array<String>|Function} an array of strings with note names or a function
 * decorated to return an array of pitch strings
 *
 * @example
 * gamut.asIntervals('C D E') // => []
 * var addIntervals = gamut.asIntervals(gamut.add)
 * addIntervals('2M', '1P 5P') // => ['2M', '6M']
 */
gamut.asIntervals = function (src) {
  return typeof src === 'function' ? decorate(toIntervals, parse, src) : toIntervals(parse(src))
}

/**
 * Get the pitch classes of a gamut
 *
 */
function pitchClass (src) {
  var toPitchClasses = map(op.pitchClass)
  if (typeof src !== 'function') return toNotes(toPitchClasses(parse(src)))
}
gamut.pitchClass = pitchClass

/**
 * Add interval to a gamut
 *
 * Like all the functions from gamut, this works with pitch-array notation format arrays.
 * Probably you will want to decorate this function with `gamut.notes` or
 * `gamut.intervals` (see example)
 *
 * @name add
 * @param {String} interval - the interval to add
 * @param {String|Array} source - the gamut
 * @return {Array} the gamut added an interval
 *
 * @example
 * gamut.add([1, 0, 0], [ [1, 0, 0], [2, 0, 0]]) // => [ [2, 0, 0], [3, 1, 0] ]
 * var transpose = gamut.asNotes(gamut.add)
 * transpose('2M', 'C D E') // => [ 'D', 'E', 'F#' ]
 * var addIntervals = gamut.intevals(gamut.add)
 * addIntervals('2M', '1P 2M 3M') // => [ '2M', '3M', '4A' ]
 */
function add (interval, source) {
  var i = asPitchArray(interval)
  if (!i) return parse(source)
  return source.map(function (pitch) {
    return pitch ? op.add(pitch, i) : null
  })
}
gamut.add = add

// all intervals relative to tonic
function normalize (tonic, arr) {
  return arr.map(function (i) { return i ? op.subtract(tonic, i) : null })
}

/**
 * Get the harmonics (the intervals of the notes relative to the first one)
 *
 * @name harmonics
 * @function
 * @param {String|Array<Array>} source - the gamut
 * @return {Array<Array>} the gamut harmonics
 *
 * @example
 * var harmonics = gamut.asIntervals(gamut.harmonics)
 * harmonics('D F# A') // => ['1P', '3M', '5P']
 */
gamut.harmonics = function (src) {
  var parsed = parse(src).map(op.setDefaultOctave(0))
  return normalize(parsed[0], parsed)
}

/**
 * Remove duplicates from a gamut
 *
 * @name uniq
 * @function
 * @param {String|Array<Array>} source - the gamut
 * @return {Array<Array>} the gamut without duplicates
 */
gamut.uniq = function (source) {
  source = parse(source)
  var semitones = source.map(op.semitones)
  return source.reduce(function (uniq, current, currentIndex) {
    var index = semitones.indexOf(op.semitones(current))
    if (index === currentIndex) uniq.push(current)
    return uniq
  }, [])
}

/**
 * Get a pitch or interval set.
 *
 * @name set
 * @function
 * @param {String|Array<Array>} source - the gamut
 * @return {Array<Array>} the pitch set
 */
gamut.set = function (source) {
  var simplify = map(op.simplify)
  var parsed = parse(source)
  var first = parsed[0] ? op.pitchClass(parsed[0]) : null
  return gamut.uniq(gamut.sort(simplify(normalize(first, parsed))))
}

/**
 * Sort a gamut by pitch height (frequency)
 *
 * Notice that this functions __doesn't__ mutate the original gamut.
 *
 * @name sort
 * @function
 * @param {String|Array<Array>} source - the gamut
 * @return {Array<Array>} the sorted gamut
 */
gamut.sort = function (source) {
  return parse(source).sort(op.comparator())
}

module.exports = gamut
