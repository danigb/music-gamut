# music-gamut

[![Build Status](https://travis-ci.org/danigb/music-gamut.svg?branch=master)](https://travis-ci.org/danigb/music-gamut)
[![Test Coverage](https://codeclimate.com/github/danigb/music-gamut/badges/coverage.svg)](https://codeclimate.com/github/danigb/music-gamut/coverage)
[![Code Climate](https://codeclimate.com/github/danigb/music-gamut/badges/gpa.svg)](https://codeclimate.com/github/danigb/music-gamut)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![npm version](https://badge.fury.io/js/music-gamut.svg)](https://badge.fury.io/js/music-gamut)
[![pitch-array](https://img.shields.io/badge/pitch--array-compatible-yellow.svg)](https://github.com/danigb/pitch-array)
![stability](https://img.shields.io/badge/stability-experimental-orange.svg)

`music-gamut` is a javascript library to manipulate arrays of notes or intervals in a coherent, easy and fast way:

```js
var pitchSet = gamut.asNotes(gamut.set)
pitchSet('C2 D3 C4 E5') // => ['C', 'D', 'E']
var transpose = gamut.asNotes(gamut.add)
transpose('2M', 'C D E F G') // => ['D', 'E', 'F#', 'G', 'A']
var addIntervals = gamut.asIntervals(gamut.add)
addIntervals('2M', '1P 2M 3M') // => ['']
```


## Install

For node users: `npm i --save music-gamut`. For browser users, use webpack, browserify or similar tool.

## Usage

In `music-gamut`, a gamut is an array of pitches or intervals in [pitch-array](https://github.com/danigb/pitch-array) format:

```js
gamut('1 2 3 4') // => an array of pitch-array
gamut('C | D E | F') // => an array of pitch-array
```

Since all the function works with [pitch-array] format, there are a couple of functions to convert back to strings:

```js
gamut.asNotes('C | D E | F')) // => ['C', 'D', 'E', 'F']
gamut.asIntervals(gamut('1 2 3 4 5')) // => ['1P', '2M', '3M', '4P', '5P']
```

## Documentation

[Documentation here](https://github.com/danigb/music-gamut/blob/master/README.md)

## License

MIT License
