# music-gamut API

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
<a href="https://github.com/danigb/music-gamut/blob/next/tmp/gamut2.js">tmp/gamut2.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/next/tmp/gamut2.js#L131">lineno 131</a>
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
<a href="https://github.com/danigb/music-gamut/blob/next/tmp/gamut2.js">tmp/gamut2.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/next/tmp/gamut2.js#L115">lineno 115</a>
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
<a href="https://github.com/danigb/music-gamut/blob/next/tmp/gamut2.js">tmp/gamut2.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/next/tmp/gamut2.js#L99">lineno 99</a>
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
<h4 class="name" id="binarySet"><span class="type-signature"></span>binarySet<span class="signature">()</span><span class="type-signature"></span></h4>
</dt>
<dd>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-gamut/blob/next/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/next/gamut.js#L160">lineno 160</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="distances"><span class="type-signature"></span>distances<span class="signature">(pitch, source)</span><span class="type-signature"> &rarr; {Array.&lt;Array>}</span></h4>
</dt>
<dd>
<div class="description">
<p>Get distances from a pitch to the notes of a gamut</p>
<p>Like all the mutating functions from <code>music-gamut</code>, this works with
pitch-array notation (no strings).
Probably you will want to decorate this function with <code>gamut.asNotes</code> or
<code>gamut.asIntervals</code> (see example)</p>
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
<td class="name"><code>pitch</code></td>
<td class="type">
<span class="param-type">String</span>
</td>
<td class="description last"><p>the root pitch</p></td>
</tr>
<tr>
<td class="name"><code>source</code></td>
<td class="type">
<span class="param-type">String</span>
|
<span class="param-type">Array.&lt;(String|Array)></span>
</td>
<td class="description last"><p>the gamut</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-gamut/blob/next/tmp/gamut2.js">tmp/gamut2.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/next/tmp/gamut2.js#L198">lineno 198</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the intervals from the root to each note of the gamut</p>
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
<pre class="prettyprint"><code>var distances = gamut.asIntervals(gamut.distance)
distances('C', 'C D E') // => [ '1P', '2M', '3M' ]</code></pre>
</dd>
<dt>
<h4 class="name" id="distances"><span class="type-signature"></span>distances<span class="signature">()</span><span class="type-signature"></span></h4>
</dt>
<dd>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-gamut/blob/next/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/next/gamut.js#L126">lineno 126</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="fromBinarySet"><span class="type-signature"></span>fromBinarySet<span class="signature">()</span><span class="type-signature"></span></h4>
</dt>
<dd>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-gamut/blob/next/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/next/gamut.js#L168">lineno 168</a>
</li>
</ul></dd>
</dl>
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
<a href="https://github.com/danigb/music-gamut/blob/next/tmp/gamut2.js">tmp/gamut2.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/next/tmp/gamut2.js#L14">lineno 14</a>
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
<p>Get a gamut: create an array from a source. The source can be a string with items separated by
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
<a href="https://github.com/danigb/music-gamut/blob/next/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/next/gamut.js#L10">lineno 10</a>
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
<a href="https://github.com/danigb/music-gamut/blob/next/tmp/gamut.js">tmp/gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/next/tmp/gamut.js#L51">lineno 51</a>
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
<a href="https://github.com/danigb/music-gamut/blob/next/tmp/transform.js">tmp/transform.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/next/tmp/transform.js#L88">lineno 88</a>
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
<a href="https://github.com/danigb/music-gamut/blob/next/tmp/gamut.js">tmp/gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/next/tmp/gamut.js#L138">lineno 138</a>
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
<h4 class="name" id="heights"><span class="type-signature"></span>heights<span class="signature">()</span><span class="type-signature"></span></h4>
</dt>
<dd>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-gamut/blob/next/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/next/gamut.js#L109">lineno 109</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="intervals"><span class="type-signature"></span>intervals<span class="signature">(source)</span><span class="type-signature"> &rarr; {Array.&lt;String>}</span></h4>
</dt>
<dd>
<div class="description">
<p>Get the intervals of the gamut. Everything is not an interval will be null.</p>
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
<a href="https://github.com/danigb/music-gamut/blob/next/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/next/gamut.js#L73">lineno 73</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the gamut intervals</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array.&lt;String></span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>gamut.intervals('1 C#4 3m') // => ['1P', null, '3m']</code></pre>
</dd>
<dt>
<h4 class="name" id="intervalSet"><span class="type-signature"></span>intervalSet<span class="signature">()</span><span class="type-signature"></span></h4>
</dt>
<dd>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-gamut/blob/next/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/next/gamut.js#L144">lineno 144</a>
</li>
</ul></dd>
</dl>
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
<a href="https://github.com/danigb/music-gamut/blob/next/tmp/gamut2.js">tmp/gamut2.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/next/tmp/gamut2.js#L33">lineno 33</a>
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
<h4 class="name" id="notes"><span class="type-signature"></span>notes<span class="signature">(source)</span><span class="type-signature"> &rarr; {Array.&lt;String>}</span></h4>
</dt>
<dd>
<div class="description">
<p>Get the note names of the gamut. Everything is not a note will be null.</p>
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
<a href="https://github.com/danigb/music-gamut/blob/next/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/next/gamut.js#L56">lineno 56</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the gamut note names</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array.&lt;String></span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>gamut.notes('C blah D') // => ['C', null, 'D']</code></pre>
</dd>
<dt>
<h4 class="name" id="parse"><span class="type-signature"></span>parse<span class="signature">(source)</span><span class="type-signature"> &rarr; {Array|Array.&lt;Array>}</span></h4>
</dt>
<dd>
<div class="description">
<p>Parses a string or a collection of strings into pitch-array notation</p>
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
<span class="param-type">Array.&lt;String></span>
</td>
<td class="description last"><p>the item or items to be parsed</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-gamut/blob/next/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/next/gamut.js#L42">lineno 42</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the value or values in pitch array notation.
Items can be null but an array will be always be returned.</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array</span>
|
<span class="param-type">Array.&lt;Array></span>
</dd>
</dl>
</dd>
<dt>
<h4 class="name" id="pitchClasses"><span class="type-signature"></span>pitchClasses<span class="signature">(source)</span><span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Remove the octaves from the notes</p>
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
<a href="https://github.com/danigb/music-gamut/blob/next/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/next/gamut.js#L90">lineno 90</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="pitchClasses"><span class="type-signature"></span>pitchClasses<span class="signature">(source)</span><span class="type-signature"> &rarr; {Array.&lt;Array>}</span></h4>
</dt>
<dd>
<div class="description">
<p>Get a new gamut with all the pitches as pitch classes</p>
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
<a href="https://github.com/danigb/music-gamut/blob/next/tmp/gamut2.js">tmp/gamut2.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/next/tmp/gamut2.js#L161">lineno 161</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the pitch class gamut</p>
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
<pre class="prettyprint"><code>var pc = gamut.asNotes(gamut.pitchClasses)
pc('C2 D4 G5 C7') // => ['C', 'D', 'G', 'C']</code></pre>
</dd>
<dt>
<h4 class="name" id="pitchSet"><span class="type-signature"></span>pitchSet<span class="signature">()</span><span class="type-signature"></span></h4>
</dt>
<dd>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-gamut/blob/next/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/next/gamut.js#L152">lineno 152</a>
</li>
</ul></dd>
</dl>
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
<a href="https://github.com/danigb/music-gamut/blob/next/tmp/transform.js">tmp/transform.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/next/tmp/transform.js#L40">lineno 40</a>
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
<h4 class="name" id="simplify"><span class="type-signature"></span>simplify<span class="signature">()</span><span class="type-signature"></span></h4>
</dt>
<dd>
<div class="description">
<p>Simplify all the intervals of the gamut</p>
</div>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-gamut/blob/next/tmp/transform.js">tmp/transform.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/next/tmp/transform.js#L77">lineno 77</a>
</li>
</ul></dd>
</dl>
</dd>
<dt>
<h4 class="name" id="simplify"><span class="type-signature"></span>simplify<span class="signature">()</span><span class="type-signature"></span></h4>
</dt>
<dd>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-gamut/blob/next/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/next/gamut.js#L101">lineno 101</a>
</li>
</ul></dd>
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
<a href="https://github.com/danigb/music-gamut/blob/next/tmp/gamut.js">tmp/gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/next/tmp/gamut.js#L152">lineno 152</a>
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
<a href="https://github.com/danigb/music-gamut/blob/next/tmp/transform.js">tmp/transform.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/next/tmp/transform.js#L6">lineno 6</a>
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
<a href="https://github.com/danigb/music-gamut/blob/next/tmp/gamut.js">tmp/gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/next/tmp/gamut.js#L124">lineno 124</a>
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
<h4 class="name" id="transpose"><span class="type-signature"></span>transpose<span class="signature">(interval, source)</span><span class="type-signature"> &rarr; {Array}</span></h4>
</dt>
<dd>
<div class="description">
<p>Get a gamut tranposed by an interval.</p>
<p>Like all the mutating functions from <code>music-gamut</code>, this works with
pitch-array notation (no strings).
Probably you will want to decorate this function with <code>gamut.asNotes</code> or
<code>gamut.asIntervals</code> (see example)</p>
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
<td class="name"><code>interval</code></td>
<td class="type">
<span class="param-type">String</span>
</td>
<td class="description last"><p>the interval to transpose</p></td>
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
<a href="https://github.com/danigb/music-gamut/blob/next/tmp/gamut2.js">tmp/gamut2.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/next/tmp/gamut2.js#L175">lineno 175</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the gamut transposed an interval</p>
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
<pre class="prettyprint"><code>gamut.transpose([1, 0, 0], [ [1, 0, 0], [2, 0, 0]]) // => [ [2, 0, 0], [3, 1, 0] ]
var transpose = gamut.asNotes(gamut.transpose)
transpose('2M', 'C D E') // => [ 'D', 'E', 'F#' ]
var addIntervals = gamut.intevals(gamut.transpose)
addIntervals('2M', '1P 2M 3M') // => [ '2M', '3M', '4A' ]</code></pre>
</dd>
<dt>
<h4 class="name" id="transpose"><span class="type-signature"></span>transpose<span class="signature">()</span><span class="type-signature"></span></h4>
</dt>
<dd>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-gamut/blob/next/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/next/gamut.js#L117">lineno 117</a>
</li>
</ul></dd>
</dl>
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
<a href="https://github.com/danigb/music-gamut/blob/next/tmp/transform.js">tmp/transform.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/next/tmp/transform.js#L20">lineno 20</a>
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
<dt>
<h4 class="name" id="uniq"><span class="type-signature"></span>uniq<span class="signature">()</span><span class="type-signature"></span></h4>
</dt>
<dd>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-gamut/blob/next/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/next/gamut.js#L136">lineno 136</a>
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
