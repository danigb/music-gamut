var vows = require('vows')
var assert = require('assert')
var gamut = require('../')

vows.describe('grouping').addBatch({
  'uniq': {
    'remove duplicates': function () {
      assert.deepEqual(gamut.asNotes(gamut.uniq('C D C e g d c c4')), ['C', 'D', 'E', 'G', 'C4'])
    }
  },
  'set': {
    'get pitch classes': function () {
      assert.deepEqual(gamut.asNotes(gamut.set('1 2 3')), ['C', 'D', 'E'])
      assert.deepEqual(gamut.asNotes(gamut.set('8 9 10')), ['C', 'D', 'E'])
      assert.deepEqual(gamut.asNotes(gamut.set('C2 D3 E4')), ['C', 'D', 'E'])
    },
    'remove duplicates': function () {
      assert.deepEqual(gamut.asNotes(gamut.set('1 1 2 2 3 3')), ['C', 'D', 'E'])
    },
    'order by frequency but keep tonic': function () {
      assert.deepEqual(gamut.asNotes(gamut.set('1 3 2')), ['C', 'D', 'E'])
      assert.deepEqual(gamut.asNotes(gamut.set('D G F A')), ['D', 'F', 'G', 'A'])
    },
    'empty set': function () {
      assert.deepEqual(gamut.set(null), [])
    }
  },
  'binarySetNumber': function () {
    assert.equal(gamut.binarySetNumber('D E F'), '101100000000')
    assert.equal(gamut.binarySetNumber('C D E F G A B'),
      gamut.binarySetNumber('D E F# G A B C#'))
  },
  'harmonics': {
    'interval harmonics': function () {
      assert.deepEqual(gamut.asIntervals(gamut.harmonics('1 2 3 9')),
        [ '1P', '2M', '3M', '9M' ])
    },
    'note harmonics': function () {
      assert.deepEqual(gamut.asIntervals(gamut.harmonics('C2 G3 B2')),
        [ '1P', '12P', '7M' ])
      assert.deepEqual(gamut.asIntervals(gamut.harmonics('C E G B D1')),
        [ '1P', '3M', '5P', '7M', '9M' ])
    }
  }
}).export(module)
