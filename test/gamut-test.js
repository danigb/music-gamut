var vows = require('vows')
var assert = require('assert')
var _ = require('../')

vows.describe('gamut').addBatch({
  'harmonics': {
    'simple harmonics': function () {
      var harmonics = _.fn(_.intervals, _.harmonics)
      assert.deepEqual(harmonics('C D E'), [ '1P', '2M', '3M' ])
      assert.equal(harmonics('D E F').join(' '), '1P 2M 3m')
    }
  },
  'sort': {
    'note sorting': function () {
      var sort = _.fn(_.notes, _.sort)
      assert.equal(sort('B C G').join(' '), 'C G B')
    }
  },
  'arr': {
    'from string': function () {
      assert.deepEqual(_.arr('1   2'), ['1', '2'])
      assert.deepEqual(_.arr('1 2'), ['1', '2'])
      assert.deepEqual(_.arr('1 , 2'), ['1', '2'])
      assert.deepEqual(_.arr('1, 2'), ['1', '2'])
      assert.deepEqual(_.arr('1 | 2'), ['1', '2'])
    },
    'anything is valid': function () {
      assert.deepEqual(_.arr('1 blah 2'), ['1', 'blah', '2'])
    },
    'always a _': function () {
      assert.deepEqual(_.arr(null), [null])
    }
  },
  'intervals': {
    'intervals': function () {
      assert.deepEqual(_.intervals('C D E'), [ '1P', '2M', '3M' ])
      assert.equal(_.intervals('1 2').join(' '), '1P 2M')
    }
  },
  'notes': {
    'pitches': function () {
      assert.deepEqual(_.notes('D E'), [ 'D', 'E' ])
      assert.equal(_.notes('1 2 3 4 5').join(' '), 'C0 D0 E0 F0 G0')
    }
  }
}).export(module)
