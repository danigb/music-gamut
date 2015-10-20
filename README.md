# music-gamut

[![Build Status](https://travis-ci.org/danigb/music-gamut.svg?branch=master)](https://travis-ci.org/danigb/music-gamut)
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

## API

<!-- START docme generated API please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN docme TO UPDATE -->

<div>
<div class="jsdoc-githubify">
<section>
<article>
<div class="container-overview">
<dl class="details">
</dl>
</div>
<dl>
<dt>
<h4 class="name" id="distances"><span class="type-signature"></span>distances<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Get distances from a pitch to the notes of a gamut</p>
<p>Like all the mutating functions from <code>music-gamut</code>, this works with
pitch-array notation (no strings).
Probably you will want to decorate this function with <code>gamut.asNotes</code> or
<code>gamut.asIntervals</code> (see example)</p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L191">lineno 191</a>
</li>
</ul></dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>var distances = gamut.asIntervals(gamut.distance)
distances('C', 'C D E') // => [ '1P', '2M', '3M' ]</code></pre>
</dd>
<dt>
<h4 class="name" id="pitchClasses"><span class="type-signature"></span>pitchClasses<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Get a new gamut with all the pitches as pitch classes</p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L161">lineno 161</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="transpose"><span class="type-signature"></span>transpose<span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Get a gamut tranposed by an interval.</p>
<p>Like all the mutating functions from <code>music-gamut</code>, this works with
pitch-array notation (no strings).
Probably you will want to decorate this function with <code>gamut.asNotes</code> or
<code>gamut.asIntervals</code> (see example)</p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L169">lineno 169</a>
</li>
</ul></dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>gamut.transpose([1, 0, 0], [ [1, 0, 0], [2, 0, 0]]) // => [ [2, 0, 0], [3, 1, 0] ]
var transpose = gamut.asNotes(gamut.transpose)
transpose('2M', 'C D E') // => [ 'D', 'E', 'F#' ]
var addIntervals = gamut.intevals(gamut.transpose)
addIntervals('2M', '1P 2M 3M') // => [ '2M', '3M', '4A' ]</code></pre>
</dd>
</dl>
<dl>
<dt>
<h4 class="name" id="asArray"><span class="type-signature"></span>asArray<span class="signature">(source)</span><span class="type-signature"> &rarr; {Array}</span></h4>
</dt>
<dd>
<div class="description">
<p>Get an array from a source. The source can be a string with items separated by
spaces, commas or bars (<code>|</code>), an array or an object.</p>
<p>If the source is an array, it's returned as it. If its an object you get an
array with the object as the only element.</p>
<p>This function does not perform any transformation to the items of the array.
This function <strong>always</strong> return an array, even if its empty</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>source</code></td>
<td class="type">
<span class="param-type">String</span>
|
<span class="param-type">Array</span>
|
<span class="param-type">Object</span>
</td>
<td class="description last"><p>the source</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L131">lineno 131</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the source converted to an array (never null)</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array</span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>gamut.asArray('c d e') // => [ 'c', 'd', 'e' ]
gamut.asArray('CMaj7 | Dm7 G7') // => [ 'CMaj7', 'Dm7', 'G7' ]
gamut.asArray('1, 2, 3') // => ['1', '2', '3']
gamut.asArray([1, 'a', 3]) // => [1, 'a', 3]
gamut.asArray(object) // => [ object ]
gamut.asArray(null) // => [ ]</code></pre>
</dd>
<dt>
<h4 class="name" id="asIntervals"><span class="type-signature"></span>asIntervals<span class="signature">(source)</span><span class="type-signature"> &rarr; {Array.&lt;String>|function}</span></h4>
</dt>
<dd>
<div class="description">
<p>Get the gamut as an array of interval names or decorate a function to return intervals</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>source</code></td>
<td class="type">
<span class="param-type">Array.&lt;Array></span>
|
<span class="param-type">function</span>
</td>
<td class="description last"></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L115">lineno 115</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>an array of strings with note names or a function
decorated to return an array of pitch strings</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array.&lt;String></span>
|
<span class="param-type">function</span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>gamut.asIntervals('C D E') // => []
var addIntervals = gamut.asIntervals(gamut.add)
addIntervals('2M', '1P 5P') // => ['2M', '6M']</code></pre>
</dd>
<dt>
<h4 class="name" id="asNotes"><span class="type-signature"></span>asNotes<span class="signature">(source)</span><span class="type-signature"> &rarr; {Array.&lt;String>|function}</span></h4>
</dt>
<dd>
<div class="description">
<p>Get gamut as an array of note names, or decorate a function to return notes</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>source</code></td>
<td class="type">
<span class="param-type">Array.&lt;Array></span>
|
<span class="param-type">function</span>
</td>
<td class="description last"></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L99">lineno 99</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>an array of strings with note names or a function
decorated to return an array of pitch strings</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array.&lt;String></span>
|
<span class="param-type">function</span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>gamut.asNotes('1P 2M 3M') // => ['C0', 'D0', 'E0']
var transpose = gamut.asNotes(gamut.add)
transpose('2M', 'C D E') // => [ 'D', 'E', 'F#' ]</code></pre>
</dd>
<dt>
<h4 class="name" id="gamut"><span class="type-signature"></span>gamut<span class="signature">(source)</span><span class="type-signature"> &rarr; {Array}</span></h4>
</dt>
<dd>
<div class="description">
<p>Create a gamut: an array of note names (pitches) or intervals in
<a href="https://github.com/danigb/pitch-array">pitch-array</a> format</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>source</code></td>
<td class="type">
<span class="param-type">String</span>
|
<span class="param-type">Array</span>
</td>
<td class="description last"><p>the gamut</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L14">lineno 14</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the gamut with notes or intervals in pitch-array notation format</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array</span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>gamut('C D E') // => [ [0, 0, null], [1, 0, null], [2, 0, null] ]
gamut('1P 3M 5P') // => [ [0, 0, 0], [2, 0, 0], [4, 0, 0] ]</code></pre>
</dd>
<dt>
<h4 class="name" id="gamut"><span class="type-signature"></span>gamut<span class="signature">(source)</span><span class="type-signature"> &rarr; {Array}</span></h4>
</dt>
<dd>
<div class="description">
<p>Create a gamut from a source. A gamut is an array of notes (more exactly, pitches)
or intervals in <a href="">a-pitch format</a>.</p>
<p>Probably you don't need this function</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>source</code></td>
<td class="type">
<span class="param-type">String</span>
|
<span class="param-type">Array</span>
</td>
<td class="description last"><p>the gamut</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-gamut/blob/master/tmp/gamut.js">tmp/gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/master/tmp/gamut.js#L51">lineno 51</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>an array of arrays (each item is an a-pitch)</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array</span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="harmonics"><span class="type-signature"></span>harmonics<span class="signature">(source)</span><span class="type-signature"> &rarr; {Array.&lt;Array>}</span></h4>
</dt>
<dd>
<div class="description">
<p>Get the harmonics (the intervals of the notes relative to the first one)</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>source</code></td>
<td class="type">
<span class="param-type">String</span>
|
<span class="param-type">Array.&lt;Array></span>
</td>
<td class="description last"><p>the gamut</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-gamut/blob/master/transform.js">transform.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/master/transform.js#L77">lineno 77</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the gamut harmonics</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array.&lt;Array></span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>var harmonics = gamut.asIntervals(gamut.harmonics)
harmonics('D F# A') // => ['1P', '3M', '5P']</code></pre>
</dd>
<dt>
<h4 class="name" id="harmonics"><span class="type-signature"></span>harmonics<span class="signature">(source)</span><span class="type-signature"> &rarr; {Array}</span></h4>
</dt>
<dd>
<div class="description">
<p>Get harmonics: the distances from the first note/interval</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>source</code></td>
<td class="type">
<span class="param-type">String</span>
|
<span class="param-type">Array</span>
</td>
<td class="description last"><p>the gamut</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-gamut/blob/master/tmp/gamut.js">tmp/gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/master/tmp/gamut.js#L138">lineno 138</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the harmonics</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array</span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>gamut.interval.harmonics('C E G') // => ['1P', '3M', '5P']</code></pre>
</dd>
<dt>
<h4 class="name" id="map"><span class="type-signature"></span>map<span class="signature">(fn, source)</span><span class="type-signature"> &rarr; {Array}</span></h4>
</dt>
<dd>
<div class="description">
<p>Get a gamut mapped by a function</p>
<p>Is important to notice that the callback function will receive pitches
always in pitch-array notation format.</p>
<p>This function can be partially applied (Function -&gt; Array -&gt; Array)</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>fn</code></td>
<td class="type">
<span class="param-type">function</span>
</td>
<td class="description last"><p>the function to map the gamut with</p></td>
</tr>
<tr>
<td class="name"><code>source</code></td>
<td class="type">
<span class="param-type">String</span>
|
<span class="param-type">Array</span>
</td>
<td class="description last"><p>the gamut</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L33">lineno 33</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the mapped gamut</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array</span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>var addOctave = function(p) { return [p[0], p[1], p[2] + 1]}
gamut.map(addOctave, [ [0, 0, 0], [1, 0, 0] ]) // => [ [0, 0, 1], [1, 0, 1]]
var octaveUp = gamut.map(addOctave)
octaveUp([ [0, 0, 0], [1, 0, 0] ]) // => [ [0, 0, 1], [1, 0, 1]]</code></pre>
</dd>
<dt>
<h4 class="name" id="set"><span class="type-signature"></span>set<span class="signature">(source)</span><span class="type-signature"> &rarr; {Array.&lt;Array>}</span></h4>
</dt>
<dd>
<div class="description">
<p>Get a pitch or interval set.</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>source</code></td>
<td class="type">
<span class="param-type">String</span>
|
<span class="param-type">Array.&lt;Array></span>
</td>
<td class="description last"><p>the gamut</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-gamut/blob/master/transform.js">transform.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/master/transform.js#L40">lineno 40</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the pitch set</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array.&lt;Array></span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="sort"><span class="type-signature"></span>sort<span class="signature">(source)</span><span class="type-signature"> &rarr; {Array.&lt;Array>}</span></h4>
</dt>
<dd>
<div class="description">
<p>Sort a gamut by pitch height (frequency)</p>
<p>Notice that this functions <strong>doesn't</strong> mutate the original gamut.</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>source</code></td>
<td class="type">
<span class="param-type">String</span>
|
<span class="param-type">Array.&lt;Array></span>
</td>
<td class="description last"><p>the gamut</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-gamut/blob/master/transform.js">transform.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/master/transform.js#L6">lineno 6</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the sorted gamut</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array.&lt;Array></span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="sort"><span class="type-signature"></span>sort<span class="signature">(src)</span><span class="type-signature"> &rarr; {Array}</span></h4>
</dt>
<dd>
<div class="description">
<p>Sort a gamut</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>src</code></td>
<td class="type">
<span class="param-type">String</span>
|
<span class="param-type">Array</span>
</td>
<td class="description last"><p>source</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-gamut/blob/master/tmp/gamut.js">tmp/gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/master/tmp/gamut.js#L152">lineno 152</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the sorted array</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array</span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>gamut.notes.sort('B A G') // => ['G', 'A', 'B']</code></pre>
</dd>
<dt>
<h4 class="name" id="transpose"><span class="type-signature"></span>transpose<span class="signature">(tonic, source)</span><span class="type-signature"> &rarr; {Array}</span></h4>
</dt>
<dd>
<div class="description">
<p>Transpose notes</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>tonic</code></td>
<td class="type">
<span class="param-type">String</span>
</td>
<td class="description last"><p>the base pitch or null to get the harmonics</p></td>
</tr>
<tr>
<td class="name"><code>source</code></td>
<td class="type">
<span class="param-type">String</span>
|
<span class="param-type">Array</span>
</td>
<td class="description last"><p>the gamut</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-gamut/blob/master/tmp/gamut.js">tmp/gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/master/tmp/gamut.js#L124">lineno 124</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the transposed notes or intervals</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array</span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>gamut.notes.transpose('C', '1P 3M 5M') // => ['C', 'E', 'G']
gamut.notes.transpose('M2', 'C D E') // => ['D', 'E', 'F#']</code></pre>
</dd>
<dt>
<h4 class="name" id="uniq"><span class="type-signature"></span>uniq<span class="signature">(source)</span><span class="type-signature"> &rarr; {Array.&lt;Array>}</span></h4>
</dt>
<dd>
<div class="description">
<p>Remove duplicates from a gamut</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>source</code></td>
<td class="type">
<span class="param-type">String</span>
|
<span class="param-type">Array.&lt;Array></span>
</td>
<td class="description last"><p>the gamut</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-gamut/blob/master/transform.js">transform.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/master/transform.js#L20">lineno 20</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the gamut without duplicates</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array.&lt;Array></span>
</dd>
</dl>
</dd>
</dl>
</article>
</section>
</div>

*generated with [docme](https://github.com/thlorenz/docme)*
</div>
<!-- END docme generated API please keep comment here to allow auto update -->

## License

MIT License
