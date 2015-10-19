'use strict'

var asPitch = require('pitch-parser')
var asInterval = require('interval-parser')
var op = require('pitch-op')

function parsePitch (i) { return isArray(i) ? i : (asPitch(i) || asInterval(i)) }
// separator pattern to convert a list string to an array
var SEP = /\s*\|\s*|\s*,\s*|\s+/
var isArray = Array.isArray

// ////////////// CORE //////////////

/**
 * Create a gamut: an array of note names (pitches) or intervals in
 * [pitch-array](https://github.com/danigb/pitch-array) format
 *
 * @name gamut
 * @function
 * @param {String|Array} source - the gamut
 * @return {Array} the gamut with notes or intervals in pitch-array notation format
 *
 * @example
 * gamut('C D E') // => [ [0, 0, null], [1, 0, null], [2, 0, null] ]
 * gamut('1P 3M 5P') // => [ [0, 0, 0], [2, 0, 0], [4, 0, 0] ]
 */
function gamut (source) {
  return gamut.asArray(source).map(parsePitch)
}

/**
 * Get a gamut mapped by a function
 *
 * Is important to notice that the callback function will receive pitches
 * always in pitch-array notation format.
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
gamut.map = function (fn, src) {
  if (arguments.length > 1) return gamut.map(fn)(src)
  return function (src) { return gamut.asArray(src).map(fn) }
}

var toNotes = gamut.map(function (p) { return typeof p === 'string' ? p : asPitch(p) })
var toIntervals = gamut.map(function (i) { return typeof i === 'string' ? i : asInterval(i) })

/*
 * @private api
 * Decorate a function with a parser and a builder. It allows to use your own
 * string representation if you need it.
 *
 * It makes an important asumption about the function to be decorated: only the
 * last argument should be parserd (because its a gamut)
 */
function typeDecorator (builder, parser, fn) {
  return function () {
    var len = arguments.length
    if (len === 0) return []
    var args = Array.prototype.slice.call(arguments)
    args[len - 1] = parser(args[len - 1])
    return builder(fn.apply(null, args))
  }
}

/**
 * Get gamut as an array of note names, or decorate a function to return notes
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
  return typeof src === 'function' ? typeDecorator(toNotes, gamut, src) : toNotes(gamut(src))
}

/**
 * Get the gamut as an array of interval names or decorate a function to return intervals
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
  return typeof src === 'function' ? typeDecorator(toIntervals, gamut, src) : toIntervals(gamut(src))
}

/**
 * Get an array from a source. The source can be a string with items separated by
 * spaces, commas or bars (`|`), an array or an object.
 *
 * If the source is an array, it's returned as it. If its an object you get an
 * array with the object as the only element.
 *
 * This function does not perform any transformation to the items of the array.
 * This function __always__ return an array, even if its empty
 *
 * @name asArray
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
gamut.asArray = function (source) {
  if (isArray(source)) return source
  else if (typeof source === 'string') return source.split(SEP)
  else if (source === null || typeof source === 'undefined') return []
  else return [ source ]
}

// ////////////// GROUP //////////////

/**
 * Remove duplicates from a gamut
 *
 * @name uniq
 * @function
 * @param {String|Array<Array>} source - the gamut
 * @return {Array<Array>} the gamut without duplicates
 */
gamut.uniq = function (source) {
  source = gamut(source)
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
  var simplify = gamut.map(op.simplify)
  var gamutd = gamut(source)
  var first = gamutd[0] ? op.pitchClass(gamutd[0]) : null
  return gamut.uniq(gamut.sort(simplify(normalize(first, gamutd))))
}

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
  var gamutd = gamut(src).map(op.setDefaultOctave(0))
  return normalize(gamutd[0], gamutd)
}

// ////////////// MUTATE //////////////

/**
 * Get a gamut tranposed by an interval.
 *
 * Like all the mutating functions from `music-gamut`, this works with
 * pitch-array notation (no strings).
 * Probably you will want to decorate this function with `gamut.asNotes` or
 * `gamut.asIntervals` (see example)
 *
 * @name transpose
 * @param {String} interval - the interval to transpose
 * @param {String|Array} source - the gamut
 * @return {Array} the gamut transposed an interval
 *
 * @example
 * gamut.transpose([1, 0, 0], [ [1, 0, 0], [2, 0, 0]]) // => [ [2, 0, 0], [3, 1, 0] ]
 * var transpose = gamut.asNotes(gamut.transpose)
 * transpose('2M', 'C D E') // => [ 'D', 'E', 'F#' ]
 * var addIntervals = gamut.intevals(gamut.transpose)
 * addIntervals('2M', '1P 2M 3M') // => [ '2M', '3M', '4A' ]
 */
gamut.transpose = operation(op.add)

/**
 * Get distances from a pitch to the notes of a gamut
 *
 * Like all the mutating functions from `music-gamut`, this works with
 * pitch-array notation (no strings).
 * Probably you will want to decorate this function with `gamut.asNotes` or
 * `gamut.asIntervals` (see example)
 *
 * @name distances
 * @param {String} pitch - the root pitch
 * @param {String|Array<String|Array>} source - the gamut
 * @return {Array<Array>} the intervals from the root to each note of the gamut
 *
 * @example
 * var distances = gamut.asIntervals(gamut.distance)
 * distances('C', 'C D E') // => [ '1P', '2M', '3M' ]
 */
gamut.distances = operation(op.subtract)

function operation (fn) {
  return function (pitch, source) {
    var i = parsePitch(pitch)
    if (!i) return gamut(source)
    return source.map(function (pitch) {
      return pitch ? fn(i, pitch) : null
    })
  }
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
  return gamut(source).sort(op.comparator())
}

// ////////////// FUNCTIONAL //////////////

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

module.exports = gamut
