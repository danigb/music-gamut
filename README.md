# music-gamut

[![Build Status](https://travis-ci.org/danigb/music-gamut.svg?branch=master)](https://travis-ci.org/danigb/music-gamut)
[![Code Climate](https://codeclimate.com/github/danigb/music-gamut/badges/gpa.svg)](https://codeclimate.com/github/danigb/music-gamut)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![npm version](https://badge.fury.io/js/music-gamut.svg)](https://badge.fury.io/js/music-gamut)
![stability](https://img.shields.io/badge/stability-experimental-orange.svg)

Manipulate notes made easy:

```js
gamut.transpose('2M', 'C D E F G') // => ['D', 'E', 'F#', 'G', 'A']
gamut.set('C2 D3 C4 E5') // => ['C', 'D', 'E']
```

## Install

For node users: `npm i --save music-gamut`. For browser users, use webpack, browserify or similar tool.

## Usage

`music-gamut` is a small and fast library to manipulate group of notes. Any function of this library can accept arrays to express groups, but also strings with elements separated by spaces, commas or bars (`|`). For example:

```js
gamut.intervals('1 2 3 4') // => ['1P', '2M', '3M', '4P']
gamut.notes('C | D E | F') // => ['C', 'D', 'E', 'F']
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
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L51">lineno 51</a>
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
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L138">lineno 138</a>
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
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L152">lineno 152</a>
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
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L124">lineno 124</a>
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
</dl>
</article>
</section>
</div>

*generated with [docme](https://github.com/thlorenz/docme)*
</div>
<!-- END docme generated API please keep comment here to allow auto update -->

## License

MIT License
