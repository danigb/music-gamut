'use strict'

var op = require('pitch-op')

module.exports = function (gamut) {
  /**
  * Sort a gamut by pitch height (frequency)
  *
  * Notice that this functions __doesn't__ mutate the original gamut.
  *
  * @name sort
  * @function
  * @param {String|Array<Array>} source - the gamut
  * @return {Array<Array>} the sorted gamut
  */
  gamut.sort = function (source) {
    return gamut(source).sort(op.comparator())
  }

  /**
   * Remove duplicates from a gamut
   *
   * @name uniq
   * @function
   * @param {String|Array<Array>} source - the gamut
   * @return {Array<Array>} the gamut without duplicates
   */
  gamut.uniq = function (source) {
    source = gamut(source)
    var semitones = source.map(op.semitones)
    return source.reduce(function (uniq, current, currentIndex) {
      var index = semitones.indexOf(op.semitones(current))
      if (index === currentIndex) uniq.push(current)
      return uniq
    }, [])
  }

  gamut.intervalSet = gamut.fn('sort', 'uniq', 'normalize', 'pitchClasses')

  /**
   * Get a pitch or interval set.
   *
   * @name set
   * @function
   * @param {String|Array<Array>} source - the gamut
   * @return {Array<Array>} the pitch set
   */
  gamut.set = function (source) {
    var src = gamut(source)
    // var distances = gamut.pitchClasses(gamut.normalize(src))
    // return gamut.transpose(src[0], gamut.sort(gamut.uniq(distances)))
    return gamut.transpose(src[0], gamut.intervalSet(src))
  }

  gamut.binarySetNumber = function (source) {
    var number = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    var semitones = gamut.normalize(gamut.pitchClasses(source)).map(op.semitones)
    semitones.forEach(function (s) {
      number[s] = 1
    })
    return number.join('')
  }

  var notes = gamut('C Db D Eb E F F# G Ab A Bb B')
  gamut.fromBinary = function (number) {
    if (/^1[01]{11}$/.test(number)) number = parseInt(number, 2)
    else if (typeof number !== 'number') return []

    var binary = ((number % 2048) + 2048).toString(2)
    var set = []
    for (var i = 0; i < 12; i++) {
      if (binary.charAt(i) === '1') set.push(notes[i])
    }
    return set
  }

  /**
   * Simplify all the intervals of the gamut
   *
   * @name simplify
   * @function
   *
   */
  gamut.simplify = function (source) {
    return gamut(source).map(op.setDefaultOctave(0))
  }

  /**
   * Get the harmonics (the intervals of the notes relative to the first one)
   *
   * @name harmonics
   * @function
   * @param {String|Array<Array>} source - the gamut
   * @return {Array<Array>} the gamut harmonics
   *
   * @example
   * var harmonics = gamut.asIntervals(gamut.harmonics)
   * harmonics('D F# A') // => ['1P', '3M', '5P']
   */
  gamut.harmonics = function (source) {
    return gamut.normalize(gamut.simplify(source))
  }
}
