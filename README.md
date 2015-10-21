# music-gamut

[![Build Status](https://travis-ci.org/danigb/music-gamut.svg?branch=master)](https://travis-ci.org/danigb/music-gamut)
[![Test Coverage](https://codeclimate.com/github/danigb/music-gamut/badges/coverage.svg)](https://codeclimate.com/github/danigb/music-gamut/coverage)
[![Code Climate](https://codeclimate.com/github/danigb/music-gamut/badges/gpa.svg)](https://codeclimate.com/github/danigb/music-gamut)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![npm version](https://badge.fury.io/js/music-gamut.svg)](https://badge.fury.io/js/music-gamut)
[![pitch-array](https://img.shields.io/badge/pitch--array-compatible-yellow.svg)](https://github.com/danigb/pitch-array)

`music-gamut` is a javascript library to manipulate notes (or intervals):

```js
gamut.pitchSet('C2 D3 C4 E5') // => ['C', 'D', 'E']
gamut.transpose('2M', 'C D E F G') // => ['D', 'E', 'F#', 'G', 'A']
gamut.distances('C2', 'C3 C4') // => ['8P', '15P']
```

It's fast, easy and side-effects free (all pure functions).

## Install

For node users: `npm i --save music-gamut`. For browser users, use webpack, browserify or similar tool.

## Usage

In `music-gamut`, a gamut is list of notes or intervals. The list can be expressed as arrays or as strings separated by spaces, commas or bars:

```js
gamut(['C', 'D', 'E']) // => ['C', 'D', 'E']
gamut('C D E') // => ['C', 'D', 'E']
gamut('C | D | E') // => ['C', 'D', 'E']
gamut('C, D, E') // => ['C', 'D', 'E']
```

You can use the functions `notes` and `intervals` and to filter the type:

```js
gamut.notes('C2 blah D3') // => ['C2', null, 'D3']
gamut.intervals('1 2 3 blah 4 5') // => ['1P', '2M', '3M', null, '4P', '5P']
```

You have a collection of funtions to manipulate the lists. All the functions returns a new copy of the list (no mutations):

- transpose: transpose a list of notes by an interval
- add: add an interval to a list of intervals
- distances: get distances of the gamut from a note
- pitchSet: get the pitch set from the gamut
- intervalSet: get the interval set from the gamut
- uniq: remove duplicates and nulls
- pitchClasses: remove the octaves from the notes

(... and some more. Read the [docs](https://github.com/danigb/music-gamut/blob/master/API.md))

## What is this for?

See [music-scale](https://github.com/danigb/music-scale), [music-chord](https://github.com/danigb/music-chord) or [tonal](https://github.com/danigb/tonal)

## Documentation

[Generated API documentation is here](https://github.com/danigb/music-gamut/blob/master/API.md)

## License

MIT License
