var asPitch = require('pitch-parser')
var asInterval = require('interval-parser')
var op = require('pitch-op')

var isArray = Array.isArray

// pitch or interval as a-pitch (array)
function asArray (i) { return isArray(i) ? i : (asPitch.parse(i) || asInterval.parse(i)) }
var SEP = /\s*\|\s*|\s*,\s*|\s+/

/**
 * Create a gamut from a source. A gamut is an array of notes (more exactly, pitches)
 * or intervals in [a-pitch format]().
 *
 * Probably you don't need this function
 */
function gamut (source) {
  if (isArray(source)) return source
  else if (typeof source === 'string') return source.split(SEP)
  else return [ source ]
}

function arr (a) { return isArray(a[0]) ? a : a.map(asArray) }
/**
 * map
 */
function map (fn) { return function (src) { return arr(gamut(src)).map(fn) } }
gamut.map = map

/**
 * Return the gamut as intervals
 *
 * @example
 * asIntervals('C D E') // => [ '1P', '2M', '3M' ]
 */
gamut.asIntervals = map(asInterval.build)

/**
 * Return the gamut as notes
 *
 * @example
 * asNotes('D E') // => [ 'D', 'E' ]
 */
gamut.asNotes = map(asPitch.stringify)


/**
 * normalize
 */
function normalize (i, ndx, array) { return op.subtract(array[0], i) }
gamut.normalize = map(normalize)

/**
 * semitones
 */
function semitones (i) { return i[0] + i[1] + 12 * i[2] }
gamut.semitones = map(semitones)

// utility: pitch sorter
function comparator (a, b) { return semitones(a) - semitones(b) }
/**
 * sort
 */
function sort (src) {
  return [].concat(gamut(src)).sort(comparator)
}
gamut.sort = sort

// utility: set octave to 0
function octavize (i) { return i[2] === null ? [i[0], i[1], 0] : i }
/**
 * intervals
 */
function intervals (src) {
  return gamut(src).map(octavize).map(normalize).sort(comparator)
}
gamut.intervals = intervals

// utility
function identity (e) { return e }
/**
 * mapValues
 */
function mapValues (fn, hash) {
  fn = fn || identity
  return Object.keys(hash).reduce(function (ret, key) {
    ret[key] = fn(gamut(hash[key]))
    return ret
  }, {})
}
gamut.mapValues = mapValues

module.exports = gamut
