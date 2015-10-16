var vows = require('vows')
var assert = require('assert')
var gamut = require('../')

vows.describe('gamut').addBatch({
  'transpose': {
    'note transposition': function () {
      var tranpose = gamut.notes.transpose
      assert.equal(tranpose('2M', 'C D E').join(' '), 'D E F#')
    }
  },
  'harmonics': {
    'simple harmonics': function () {
      assert.deepEqual(gamut.intervals.harmonics('C D E'), [ '1P', '2M', '3M' ])
      assert.equal(gamut.intervals.harmonics('D E F').join(' '), '1P 2M 3m')
    }
  },
  'sort': {
    'note sorting': function () {
      assert.equal(gamut.notes.sort('B C G').join(' '), 'C G B')
    }
  },
  'arr': {
    'from string': function () {
      assert.deepEqual(gamut.arr('1   2'), ['1', '2'])
      assert.deepEqual(gamut.arr('1 2'), ['1', '2'])
      assert.deepEqual(gamut.arr('1 , 2'), ['1', '2'])
      assert.deepEqual(gamut.arr('1, 2'), ['1', '2'])
      assert.deepEqual(gamut.arr('1 | 2'), ['1', '2'])
    },
    'anything is valid': function () {
      assert.deepEqual(gamut.arr('1 blah 2'), ['1', 'blah', '2'])
    },
    'always a gamut': function () {
      assert.deepEqual(gamut.arr(null), [null])
    }
  },
  'intervals': {
    'intervals': function () {
      assert.deepEqual(gamut.intervals('C D E'), [ '1P', '2M', '3M' ])
      assert.equal(gamut.intervals('1 2').join(' '), '1P 2M')
    }
  },
  'notes': {
    'pitches': function () {
      assert.deepEqual(gamut.notes('D E'), [ 'D', 'E' ])
      assert.equal(gamut.notes('1 2 3 4 5').join(' '), 'C0 D0 E0 F0 G0')
    }
  }
}).export(module)
