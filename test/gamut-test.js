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
  'notes': function () {
    assert.deepEqual(gamut.notes([ [0, 0, 0], [1, 0, 0] ]), [ 'C0', 'D0' ])
    assert.deepEqual(gamut.notes('c2 bbb3 e g'), [ 'C2', 'Bbb3', 'E', 'G' ])
  },
  'intervals': function () {
    assert.deepEqual(gamut.intervals([ [0, 0, 0], [1, 0, 0] ]), [ '1P', '2M' ])
    assert.deepEqual(gamut.intervals('1 2 3 4 5'), [ '1P', '2M', '3M', '4P', '5P' ])
  },
  'pitchClasses': function () {
    assert.equal(gamut.pitchClasses('C3 C4 D7 B3').join(' '), 'C C D B')
  },
  'simplify': function () {
    assert.equal(gamut.simplify('3M 8P 16m').join(' '), '3M 1P 2m')
  },
  'transpose': function () {
    assert.deepEqual(gamut.transpose('2M', 'C D E'), [ 'D', 'E', 'F#' ])
    assert.deepEqual(gamut.transpose('8P', 'C1 blah E2'), ['C2', null, 'E3'])
    assert.deepEqual(gamut.transpose('blah', 'C D E'), [])
  },
  'add': function () {
    assert.deepEqual(gamut.add('2M', '1 2 3 4 5'), [ '2M', '3M', '4A', '5P', '6M' ])
  },
  'heights': function () {
    assert.deepEqual(gamut.heights('1P 2M 3M 4P'), [ 0, 2, 4, 5 ])
  },
  'distances': function () {
    assert.equal(gamut.distances('D2', 'D3 E3 F4').join(' '), '8P 9M 17m')
    assert.deepEqual(gamut.distances('C1', 'C D E'), [ '-8P', '-7m', '-6m' ])
    assert.deepEqual(gamut.distances('C', 'C1 D2 E3'), [ '8P', '16M', '24M' ])
    assert.deepEqual(gamut.distances(null, 'D E F'), ['1P', '2M', '3m'])
    assert.deepEqual(gamut.distances('blah', 'C D E'), [])
    assert.deepEqual(gamut.distances('C2', 'blah blah'), [null, null])
    assert.deepEqual(gamut.distances(null, 'blah C2'), [])
  },
  'uniq': function () {
    assert.equal(gamut.uniq('C2 D3 E4 E3 D3 C2 B').join(' '), 'C2 D3 E4 E3 B')
    assert.deepEqual(gamut.uniq('C blah blah D'), ['C', 'D'])
  },
  'sortByFreq': function () {
    assert.equal(gamut.sortByFreq('D E G C B A').join(' '), 'C D E G A B')
  },
  'sortBySize': function () {
    assert.deepEqual(gamut.sortBySize('2m -3m 1P 3M -2M'), ['-3m', '-2M', '1P', '2m', '3M'])
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
    assert.equal(gamut.binarySet('C D E F G A B'), '101011010101')
  },
  'fromBinarySet': function () {
    assert.equal(gamut.fromBinarySet(2773).join(' '), 'C D E F G A B')
    assert.deepEqual(gamut.fromBinarySet(2773, 'Bb2'), ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'])
    assert.equal(gamut.fromBinarySet('100100000000', 'D').join(' '), 'D F')
    assert.deepEqual(gamut.fromBinarySet('NaN', 'Bb2'), [])
  }
}).export(module)
