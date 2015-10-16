'use strict'

var asPitch = require('pitch-parser')
var asInterval = require('interval-parser')
var operator = require('pitch-op')

var isArray = Array.isArray
function parse (i) { return isArray(i) ? i : (asPitch.parse(i) || asInterval.parse(i)) }
function semitones (i) { return i[0] + i[1] + 12 * i[2] }
function comparator (a, b) { return semitones(a) - semitones(b) }

// pitch or interval as a-pitch (array)
var SEP = /\s*\|\s*|\s*,\s*|\s+/

function gamut () {

}

function toArray (source) {
  if (isArray(source)) return source
  else if (typeof source === 'string') return source.split(SEP)
  else return [ source ]
}
gamut.toArray = toArray

function map (fn) { return function (src) { return gamut.toArray(src).map(fn) } }
gamut.map = map

function compose (operations) {
  var ops = operations.reverse()
  var len = ops.length
  return function (value) {
    for (var i = 0; i < len; i++) {
      value = ops[i].call(null, value)
    }
    return value
  }
}
var op = gamut.op = compose

function composer (parser, builder) {
  return function () {
    var ops = [ builder ]
    for (var i = 0, len = arguments.length; i < len; i++) {
      ops.push(arguments[i])
    }
    ops.push(parser)
    return compose(ops)
  }
}

op.parse = map(parse)
op.intervals = map(function (i) { return asInterval.build(i) })
op.pitches = map(function (i) { return asPitch.stringify(i) })
op.notesFn = composer(op.parse, op.pitches)
op.intervalsFn = composer(op.parse, op.intervals)

op.tonicization = map(function (i, ndx, array) { return operator.subtract(array[0], i) })
op.defaultOct = function (oct) { return map(function (i) { return i[2] === null ? [i[0], i[1], oct] : i }) }
op.transposer = function (tonic) { return map(function (i) { return operator.add(i, tonic) }) }
op.sort = function (gamut) { return [].concat(gamut).sort(comparator) }

gamut.intervals = op.intervalsFn()
gamut.notes = op.notesFn()
gamut.harmonics = op.intervalsFn(op.tonicization, op.defaultOct(0))
gamut.sort = op.notesFn(op.sort)
gamut.transpose = function (tonic, gamut) {
  return op.notesFn(op.transposer(parse(tonic)))(gamut)
}

module.exports = gamut
