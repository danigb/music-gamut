# music-gamut

[![Build Status](https://travis-ci.org/danigb/music-gamut.svg?branch=master)](https://travis-ci.org/danigb/music-gamut)
[![Code Climate](https://codeclimate.com/github/danigb/music-gamut/badges/gpa.svg)](https://codeclimate.com/github/danigb/music-gamut)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![npm version](https://badge.fury.io/js/music-gamut.svg)](https://badge.fury.io/js/music-gamut)

Manipulate notes made easy:

```js
gamut.transpose('2M', 'C D E F G') // => ['D', 'E', 'F#', 'G', 'A']
gamut.set('C2 D3 C4 E5') // => ['C', 'D', 'E']
```

## Install

Not yet released

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
<h4 class="name" id="gamut"><span class="type-signature"></span>gamut<span class="signature">()</span><span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Create a gamut from a source. A gamut is an array of notes (more exactly, pitches)
or intervals in <a href="">a-pitch format</a>.</p>
<p>Probably you don't need this function</p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L47">lineno 47</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="harmonics"><span class="type-signature"></span>harmonics<span class="signature">()</span><span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Get harmonics: the distances from the first note/interval</p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L91">lineno 91</a>
</li>
</ul></dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>var harmonics = gamut.asIntervals(gamut.harmonics)
harmonics('C E G') // => []</code></pre>
</dd>
<dt>
<h4 class="name" id="sort"><span class="type-signature"></span>sort<span class="signature">()</span><span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>sort</p>
</div>
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
</dd>
<dt>
<h4 class="name" id="transpose"><span class="type-signature"></span>transpose<span class="signature">()</span><span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>transpose notes</p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L79">lineno 79</a>
</li>
</ul></dd>
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
