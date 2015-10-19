var Benchmark = require('benchmark')
var gamut = require('../../')
var teoria = require('teoria')

function generateNotes (size) {
  var result = []
  for (var i = 0; i < size; i++) {
    var letter = String.fromCharCode(65 + (i + 2) % 6)
    var oct = 4 + Math.floor(i / 6)
    result.push(letter + oct)
  }
  return result
}
var notes = generateNotes(20)

var gamutTranspose = gamut.notes(gamut.add)
var teoriaTranspose = function (interval, notes) {
  return notes.map(function (note) {
    return teoria.note(note).interval(interval).toString()
  })
}

console.log('gamut', gamutTranspose('3M', notes).join(' '))
console.log('gamut', teoriaTranspose('M3', notes).join(' '))

var suite = new Benchmark.Suite()
suite.add('gamut transposition', function () {
  gamutTranspose('3M', notes)
})
.add('teoria transposition', function () {
  teoriaTranspose('M3', notes)
})
.on('cycle', function (event) {
  console.log(String(event.target))
})
.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'))
})
.run({ 'async': true })
