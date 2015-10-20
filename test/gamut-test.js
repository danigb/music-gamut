var vows = require('vows')
var assert = require('assert')
var gamut = require('../')

vows.describe('gamut').addBatch({
  'gamut': {
    'strings': function () {
      assert.deepEqual(gamut('C D E, F,   G |     A  , B'),
        ['C', 'D', 'E', 'F', 'G', 'A', 'B'])
    },
    'arrays': function () {
      assert.deepEqual(gamut(['A', 1]), ['A', 1])
    },
    'objects': function () {
      assert.deepEqual(gamut({}), [{}])
      assert.deepEqual(gamut(null), [ ])
      assert.deepEqual(gamut(), [ ])
    }
  },
  'parse gamut': function () {
    assert.deepEqual(gamut.parse('C D'), [ [ 0, 0, null ], [ 1, 0, null ] ])
    assert.deepEqual(gamut.parse('C blah D'), [ [ 0, 0, null ], null, [ 1, 0, null ] ])
    assert.deepEqual(gamut.parse('C4 2m'), [ [ 0, 0, 4 ], [ 1, -1, 0 ] ])
  },
  'asNotes': function () {
    assert.deepEqual(gamut.notes([ [0, 0, 0], [1, 0, 0] ]), [ 'C0', 'D0' ])
  },
  'gamut asIntervals': function () {
    assert.deepEqual(gamut.intervals([ [0, 0, 0], [1, 0, 0] ]), [ '1P', '2M' ])
  },
  'pitchClasses': function () {
    assert.equal(gamut.pitchClasses('C3 C4 D7 B3').join(' '), 'C C D B')
  },
  'simplify': function () {
    assert.equal(gamut.simplify('3M 8P 16m').join(' '), '3M 1P 2m')
  },
  'transpose': function () {
    assert.deepEqual(gamut.transpose('2M', 'C D E'), [ 'D', 'E', 'F#' ])
    assert.deepEqual(gamut.transpose('blah', 'C D E'), [])
  },
  'heights': function () {
    assert.deepEqual(gamut.heights('1P 2M 3M 4P'), [ 0, 2, 4, 5 ])
  },
  'distances': function () {
    assert.equal(gamut.distances('D2', 'D3 E3 F4').join(' '), '8P 9M 17m')
    assert.deepEqual(gamut.distances(null, 'D E F'), ['1P', '2M', '3m'])
    assert.deepEqual(gamut.distances('blah', 'C D E'), [])
    assert.deepEqual(gamut.distances('blah', 'blah blah'), [])
  },
  'uniq': function () {
    assert.equal(gamut.uniq('C2 D3 E4 E3 D3 C2 B').join(' '), 'C2 D3 E4 E3 B')
    assert.deepEqual(gamut.uniq('C blah blah D'), ['C', 'D'])
  },
  'intervalSet': function () {
    assert.equal(gamut.intervalSet('D2 F#3 E3').join(' '), '1P 2M 3M')
  },
  'pitchSet': function () {
    assert.equal(gamut.pitchSet('D3 E4 C4 E3 D3 C2 B').join(' '), 'D E B C')
  },
  'binarySet': function () {
    assert.equal(gamut.binarySet('C D E').length, 12)
    assert.equal(gamut.binarySet('C D E'), '101010000000')
  },
  'fromBinarySet': function () {
    assert.equal(gamut.fromBinarySet(2773).join(' '), 'C D E F G A B')
    assert.equal(gamut.fromBinarySet(2773, 'Bb2').join(' '), 'Bb C D Eb F G A')
    assert.equal(gamut.fromBinarySet('100100000000', 'D').join(' '), 'D F')
    assert.deepEqual(gamut.fromBinarySet('NaN', 'Bb2'), [])
  }
}).export(module)
