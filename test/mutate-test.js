var vows = require('vows')
var assert = require('assert')
var gamut = require('../')

vows.describe('mutate').addBatch({
  'transpose': function () {
    var src = [ [0, 0, 0], [1, 0, 0], [2, 0, 0] ]
    assert.deepEqual(gamut.transpose('2M', src), [ [ 1, 0, 0 ], [ 2, 0, 0 ], [ 3, 1, 0 ] ])
  },
  'distances': {
    'from pitch': function () {
      var distances = gamut.asIntervals(gamut.distances)
      assert.deepEqual(distances('C', 'C D E F#'), [ '1P', '2M', '3M', '4A' ])
    }
  },
  'normalize': function () {
    var normalize = gamut.asIntervals(gamut.normalize)
    assert.deepEqual(normalize('C D E'), [ '1P', '2M', '3M' ])
    assert.deepEqual(normalize('D E F'), [ '1P', '2M', '3m' ])
  }
}).export(module)
