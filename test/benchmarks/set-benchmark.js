// [0.2.1] gamut simple set x 59,228 ops/sec ±0.39% (97 runs sampled)

var Benchmark = require('benchmark')
var gamut = require('../../')

console.log('Simple set benchmark: ', gamut.pitchSet('d4 C2 C7 D2 E5 G6 G7 A2 A#4 Bb5'))
var suite = new Benchmark.Suite()
suite.add('gamut simple set', function () {
  gamut.pitchSet('d4 C2 C7 D2 E5 G6 G7 A2 A#4 Bb5')
})
.on('cycle', function (event) {
  console.log(String(event.target))
})
.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'))
})
.run({ 'async': true })
