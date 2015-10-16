var asPitch = require('pitch-parser')
var asInterval = require('interval-parser')
var op = require('pitch-op')

var isArray = Array.isArray

// pitch or interval as a-pitch (array)
var SEP = /\s*\|\s*|\s*,\s*|\s+/

// pitch item transformations
function map (fn) { return function (src) { return src.map(fn) } }
function parse (i) { return isArray(i) ? i : (asPitch.parse(i) || asInterval.parse(i)) }
function distanceFromTonic (i, ndx, array) { return op.subtract(array[0], i) }
function octavize (i) { return i[2] === null ? [i[0], i[1], 0] : i }
function semitones (i) { return i[0] + i[1] + 12 * i[2] }
function comparator (a, b) { return semitones(a) - semitones(b) }

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

function compose () {
  var fns = []
  for (var i = 0, len = arguments.length; i < len; i++) {
    fns.push(arguments[i])
  }
  fns = fns.reverse()
  return function (src) {
    return fns.reduce(function (g, fn) {
      return fn(g)
    }, gamut(src))
  }
}
gamut.fn = compose

/**
 * Return the gamut as intervals
 *
 * @example
 * intervals('C D E') // => [ '1P', '2M', '3M' ]
 */
gamut.intervals = compose(map(asInterval.build))

/**
 * Return the gamut as notes
 *
 * @example
 * notes('D E') // => [ 'D', 'E' ]
 */
gamut.notes = compose(map(asPitch.stringify))

/**
 * Get harmonics: the distances from the first note/interval
 *
 * @example
 * var harmonics = gamut.asIntervals(gamut.harmonics)
 * harmonics('C E G') // => []
 */
gamut.harmonics = compose(map(distanceFromTonic), map(octavize))

/**
 * sort
 */
function sort (src) {
  return [].concat(gamut(src)).sort(comparator)
}
gamut.sort = sort

module.exports = gamut
