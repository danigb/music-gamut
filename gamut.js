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
 */
function gamut (source) {
  var g = gamut.arr(source)
  return isArray(g[0]) ? g : g.map(parse)
}

gamut.arr = function (source) {
  if (isArray(source)) return source
  else if (typeof source === 'string') return source.split(SEP)
  else return [ source ]
}

/**
 * Return the gamut as intervals
 *
 * @example
 * intervals('C D E') // => [ '1P', '2M', '3M' ]
 */
gamut.asIntervals = asType(asInterval.build)
gamut.intervals = gamut.asIntervals(gamut)

/**
 * Return the gamut as notes
 *
 * @example
 * notes('D E') // => [ 'D', 'E' ]
 */
gamut.asNotes = asType(asPitch.stringify)
gamut.notes = gamut.asNotes(gamut)

/**
 * transpose notes
 */
function transpose (tonic, src) {
  return gamut(src).map(transposer(parse(tonic)))
}
define(transpose)

/**
 * Get harmonics: the distances from the first note/interval
 *
 * @example
 * var harmonics = gamut.asIntervals(gamut.harmonics)
 * harmonics('C E G') // => []
 */
function harmonics (src) {
  return gamut(src).map(octavize).map(distanceFromTonic)
}
define(harmonics)

/**
 * sort
 */
function sort (src) {
  return [].concat(gamut(src)).sort(comparator)
}
define(sort)

module.exports = gamut
