'use strict'

var op = require('pitch-op')

// pitch to pitch classes
function pitchClasses (gamut) { return gamut.map(op.pitchClass) }

// simplify interval
function simplify (gamut) { return gamut.map(op.simplify) }

// return pitch heights: distance from C0 or interval semitones
function heights (gamut) { return gamut.map(op.semitones) }

function transpose (interval, gamut) {
  if (!interval) return []
  return gamut.map(function (p) {
    return p ? op.add(interval, p) : null
  })
}

// get distances from tonic to the rest of the notes
function distances (tonic, gamut) {
  if (!tonic) {
    if (!gamut[0]) return []
    tonic = gamut[0]
  }
  tonic = op.setDefaultOctave(0, tonic)
  return gamut.map(function (p) {
    return p ? op.subtract(tonic, op.setDefaultOctave(0, p)) : null
  })
}

// remove duplicated notes AND nulls
function uniq (gamut) {
  var semitones = heights(gamut)
  return gamut.reduce(function (uniq, current, currentIndex) {
    if (current) {
      var index = semitones.indexOf(semitones[currentIndex])
      if (index === currentIndex) uniq.push(current)
    }
    return uniq
  }, [])
}

function sort (gamut) {
  return gamut.sort(op.comparator())
}

// get an interval set
function intervalSet (gamut) {
  return sort(uniq(simplify(distances(null, gamut))))
}

// get a pitch set
function pitchSet (gamut) {
  return transpose(op.pitchClass(gamut[0]), intervalSet(gamut))
}

function binarySet (gamut) {
  var number = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  var semitones = heights(intervalSet(gamut))
  semitones.forEach(function (s) {
    number[s] = 1
  })
  return number.join('')
}

// pitch-array of 'C Db D Eb E F F# G Ab A Bb B'
var NOTES = [
  [ 0, 0, null ], [ 1, -1, null ], [ 1, 0, null ], [ 2, -1, null ],
  [ 2, 0, null ], [ 3, 0, null ], [ 3, 1, null ], [ 4, 0, null ],
  [ 5, -1, null ], [ 5, 0, null ], [ 6, -1, null ], [ 6, 0, null ] ]

function fromBinarySet (number) {
  if (/^1[01]{11}$/.test(number)) number = parseInt(number, 2)
  else if (typeof number !== 'number') return []

  var binary = ((number % 2048) + 2048).toString(2)
  var set = []
  for (var i = 0; i < 12; i++) {
    if (binary.charAt(i) === '1') set.push(NOTES[i])
  }
  return set
}

module.exports = {
  pitchClasses: pitchClasses,
  simplify: simplify,
  heights: heights,
  transpose: transpose,
  distances: distances,
  uniq: uniq,
  sort: sort,
  intervalSet: intervalSet,
  pitchSet: pitchSet,
  binarySet: binarySet,
  fromBinarySet: fromBinarySet
}
