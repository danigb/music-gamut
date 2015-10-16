var vows = require('vows')
var assert = require('assert')
var gamut = require('../')

vows.describe('gamut').addBatch({
  'map': function () {
    var len = function (x) { return x.length }
    var lengths = gamut.map(len)
    assert.deepEqual(lengths('a aa aaa'), [1, 2, 3])
  },
  'compose': function () {
    var rev = gamut.map(function (s) { return s.split('').reverse().join('') })
    var cap = gamut.map(function (s) { return s[0].toUpperCase() + s.substr(1) })
    var revCap = gamut.op([cap, rev])
    assert.deepEqual(revCap('abc bcd def'), [ 'Cba', 'Dcb', 'Fed' ])
  },
  'parse': function () {
    assert.deepEqual(gamut.op.parse('C D E'), [ [ 0, 0, null ], [ 1, 0, null ], [ 2, 0, null ] ])
  },
  'transpose': function () {
    assert.equal(gamut.transpose('2M', 'C D E').join(' '), 'D E F#')
  },
  'harmonics': {
    'simple harmonics': function () {
      assert.deepEqual(gamut.harmonics('C D E'), [ '1P', '2M', '3M' ])
      assert.equal(gamut.harmonics('D E F').join(' '), '1P 2M 3m')
    }
  },
  'sort': {
    'note sorting': function () {
      assert.equal(gamut.sort('B C G').join(' '), 'C G B')
    }
  },
  'toArray': {
    'from string': function () {
      assert.deepEqual(gamut.toArray('1   2'), ['1', '2'])
      assert.deepEqual(gamut.toArray('1 2'), ['1', '2'])
      assert.deepEqual(gamut.toArray('1 , 2'), ['1', '2'])
      assert.deepEqual(gamut.toArray('1, 2'), ['1', '2'])
      assert.deepEqual(gamut.toArray('1 | 2'), ['1', '2'])
    },
    'anything is valid': function () {
      assert.deepEqual(gamut.toArray('1 blah 2'), ['1', 'blah', '2'])
    },
    'always a gamut': function () {
      assert.deepEqual(gamut.toArray(null), [null])
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
