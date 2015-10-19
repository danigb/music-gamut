var vows = require('vows')
var assert = require('assert')
var gamut = require('../gamut')

vows.describe('core').addBatch({
  'gamut': {

  },
  'asArray': function () {
    assert.deepEqual(gamut.asArray('C D E, F,   G |     A  , B'), ['C', 'D', 'E', 'F', 'G', 'A', 'B'])
    assert.deepEqual(gamut.asArray(['A', 1]), ['A', 1])
    assert.deepEqual(gamut.asArray(null), [ ])
    assert.deepEqual(gamut.asArray(), [ ])
  },
  'asNotes': function () {
    var transpose = gamut.asNotes(gamut.transpose)
    assert.deepEqual(transpose('2M', 'C D E'), [ 'D', 'E', 'F#' ])
  },
  'asIntervals': {
    'decorate function': function () {
      var add = gamut.asIntervals(gamut.transpose)
      assert.deepEqual(add('2M', 'C D E'), [ '2M', '3M', '4A' ])
    },
    'get intervals': function () {
      assert.deepEqual(gamut.asIntervals('C D E'), [ '1P', '2M', '3M' ])
    }
  },
  'map': function () {
    var addOctave = function (p) { return [p[0], p[1], p[2] + 1] }
    var src = [ [0, 0, 0], [1, 0, 0] ]
    assert.deepEqual(gamut.map(addOctave, src), [ [ 0, 0, 1 ], [ 1, 0, 1 ] ])
    var octaveUp = gamut.map(addOctave)
    assert.deepEqual(octaveUp(src), [ [ 0, 0, 1 ], [ 1, 0, 1 ] ])
  }
}).export(module)
