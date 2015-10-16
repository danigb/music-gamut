var vows = require('vows')
var assert = require('assert')
var gamut = require('../gamut')

vows.describe('gamut').addBatch({
  'gamut': {
    'from string': function () {
      assert.deepEqual(gamut('1   2'), ['1', '2'])
      assert.deepEqual(gamut('1 2'), ['1', '2'])
      assert.deepEqual(gamut('1 , 2'), ['1', '2'])
      assert.deepEqual(gamut('1, 2'), ['1', '2'])
      assert.deepEqual(gamut('1 | 2'), ['1', '2'])
    },
    'anything is valid': function () {
      assert.deepEqual(gamut('1 blah 2'), ['1', 'blah', '2'])
    },
    'always a gamut': function () {
      assert.deepEqual(gamut(null), [null])
    }
  },
  'asIntervals': {
    'intervals': function () {
      assert.deepEqual(gamut.asIntervals('C D E'), [ '1P', '2M', '3M' ])
      assert.equal(gamut.asIntervals('1 2').join(' '), '1P 2M')
    }
  },
  'asNotes': {
    'pitches': function () {
      assert.deepEqual(gamut.asNotes('D E'), [ 'D', 'E' ])
      assert.equal(gamut.asNotes('1 2 3 4 5').join(' '), 'C0 D0 E0 F0 G0')
    }
  }
}).export(module)
