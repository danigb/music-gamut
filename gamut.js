var asPitch = require('pitch-parser')
var asInterval = require('interval-parser')
var op = require('pitch-op')

var isArray = Array.isArray

// pitch or interval as a-pitch (array)
var SEP = /\s*\|\s*|\s*,\s*|\s+/

// pitch item transformations
function parse (i) { return isArray(i) ? i : (asPitch.parse(i) || asInterval.parse(i)) }
function distanceFromTonic (i, ndx, array) { return op.subtract(array[0], i) }
function octavize (i) { return i[2] === null ? [i[0], i[1], 0] : i }
function semitones (i) { return i[0] + i[1] + 12 * i[2] }
function comparator (a, b) { return semitones(a) - semitones(b) }
function transposer (tonic) {
  return function (i) {
    return op.add(i, tonic)
  }
}

// utility: use a builder to convert the result of a function
function asType (builder) {
  return function (fn) {
    return function (src) {
      if (arguments.length === 1) return fn(src).map(builder)
      var args = [].slice.call(arguments)
      return fn.apply(null, args).map(builder)
    }
  }
}

// utility: define a gamut transformation
function define (fn) {
  var name = fn.name
  gamut[name] = fn
  gamut.notes[name] = gamut.asNotes(fn)
  gamut.intervals[name] = gamut.asIntervals(fn)
}

/**
 * Create a gamut from a source. A gamut is an array of notes (more exactly, pitches)
 * or intervals in [a-pitch format]().
 *
 * Probably you don't need this function
 *
 * @param {String|Array} source - the gamut
 * @return {Array} an array of arrays (each item is an a-pitch)
 *
 */
function gamut (source) {
  var g = gamut.arr(source)
  return isArray(g[0]) ? g : g.map(parse)
}

/**
 * Create an array of a given source
 *
 * @param {String|Array|Object} source - the source
 * @return {Array} the source converted to an array
 *
 */
gamut.arr = function (source) {
  if (isArray(source)) return source
  else if (typeof source === 'string') return source.split(SEP)
  else return [ source ]
}

/**
 * Decorate a function to return string intervals
 *
 * @param {Function} op - the operation to decorate
 * @return {Function} a function that returns intervals
 *
 * @example
 * var transpose = gamut.asIntervals(gamut.transpose)
 */
gamut.asIntervals = asType(asInterval.build)

/**
 * Return the gamut as intervals
 *
 * @param {String|Array} source - the gamut
 * @return {Array} an array of interval strings
 *
 * @example
 * intervals('C D E') // => [ '1P', '2M', '3M' ]
 */
gamut.intervals = gamut.asIntervals(gamut)

/**
 * Decorate a function to return string pitches (notes)
 *
 * @param {Function} op - the operation to decorate
 * @return {Function} a function that returns notes (pitches)
 *
 * @example
 * var transpose = gamut.asNotes(gamut.transpose)
 */
gamut.asNotes = asType(asPitch.stringify)

/**
 * Return the gamut as notes
 *
 * @param {String|Array} source - the gamut
 * @return {Array} an array of strings with the notes
 *
 * @example
 * notes('D E') // => [ 'D', 'E' ]
 */
gamut.notes = gamut.asNotes(gamut)

/**
 * Transpose notes
 *
 * @param {String} tonic - the base pitch or null to get the harmonics
 * @param {String|Array} source - the gamut
 * @return {Array} the transposed notes or intervals
 *
 * @example
 * gamut.notes.transpose('C', '1P 3M 5M') // => ['C', 'E', 'G']
 * gamut.notes.transpose('M2', 'C D E') // => ['D', 'E', 'F#']
 */
function transpose (tonic, src) {
  return gamut(src).map(transposer(parse(tonic)))
}
define(transpose)

/**
 * Get harmonics: the distances from the first note/interval
 *
 * @param {String|Array} source - the gamut
 * @return {Array} the harmonics
 *
 * @example
 * gamut.interval.harmonics('C E G') // => ['1P', '3M', '5P']
 */
function harmonics (src) {
  return gamut(src).map(octavize).map(distanceFromTonic)
}
define(harmonics)

/**
 * Sort a gamut
 *
 * @param {String|Array} src - source
 * @return {Array} the sorted array
 *
 * @example
 * gamut.notes.sort('B A G') // => ['G', 'A', 'B']
 */
function sort (src) {
  return [].concat(gamut(src)).sort(comparator)
}
define(sort)

module.exports = gamut
