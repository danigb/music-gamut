# `music-gamut` API

_All functions are pure (no side effects, no mutations)._


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
<h4 class="name" id="binarySet"><span class="type-signature"></span>binarySet<span class="signature">(source)</span><span class="type-signature"> &rarr; {String}</span></h4>
</dt>
<dd>
<div class="description">
<p>Get the binary set number from a collection of notes.</p>
<p>A binary set number is a 12 digit binary numbers, each digit represent a
note in the chromatic scale. For example '10101100000' means ['C', 'D', 'E', 'F']</p>
<p>The binary set representation is very useful to compare different sets
(scales, for example)</p>
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
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L282">lineno 282</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the binary number</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">String</span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>gamut.binarySet('C D E F G A B C') // => '101011010101'</code></pre>
</dd>
<dt>
<h4 class="name" id="distances"><span class="type-signature"></span>distances<span class="signature">(tonic, source)</span><span class="type-signature"> &rarr; {Array.&lt;String>}</span></h4>
</dt>
<dd>
<div class="description">
<p>Get the distances (in intervals) of the notes from a tonic</p>
<p>If the tonic is null, the first note of the gamut is asumed to be the tonic</p>
<p><strong>Important</strong>: al pitch classes are converted to octave 0 before calculating
the distances.</p>
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
|
<span class="param-type">Array</span>
</td>
<td class="description last"><p>(Optional) the note to calculate the interval
from. If its null, the first note of the gamut is the tonic</p></td>
</tr>
<tr>
<td class="name"><code>source</code></td>
<td class="type">
<span class="param-type">String</span>
|
<span class="param-type">Array</span>
|
<span class="param-type">Array.&lt;Array></span>
</td>
<td class="description last"><p>the notes</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L178">lineno 178</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the intervals</p>
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
<pre class="prettyprint"><code>gamut.distance('D2', 'D2 E2 F2') // => ['1P', '2M', '3m']
// pitch classes are octave 0
gamut.distance('C', 'C2') // => ['15P']
gamut.distance('C2', 'C') // => ['-15P']</code></pre>
</dd>
<dt>
<h4 class="name" id="fromBinarySet"><span class="type-signature"></span>fromBinarySet<span class="signature">(source, tonic)</span><span class="type-signature"> &rarr; {Array.&lt;String>}</span></h4>
</dt>
<dd>
<div class="description">
<p>Get a note set from a binary set number and a (optionally) a tonic.</p>
<p>This function accepts binary numbers (as strings) or integers. For example,
<code>2773</code> identify the major scale.</p>
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
<tr>
<td class="name"><code>tonic</code></td>
<td class="type">
<span class="param-type">String</span>
</td>
<td class="description last"><p>(Optional) the first note of the set ('C' by default)</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L303">lineno 303</a>
</li>
</ul></dd>
<dt class="tag-see">See:</dt>
<dd class="tag-see">
<ul>
<li>`binarySet`</li>
</ul>
</dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the set pitch classes (note names without octaves)</p>
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
<pre class="prettyprint"><code>gamut.fromBinarySet('101011010101') // => ['C', 'D', 'E', 'F', 'G', 'A', 'B']
gamut.fromBinarySet(2773, 'Bb') // => ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A']</code></pre>
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
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L10">lineno 10</a>
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
<pre class="prettyprint"><code>gamut('c d e') // => [ 'c', 'd', 'e' ]
gamut('CMaj7 | Dm7 G7') // => [ 'CMaj7', 'Dm7', 'G7' ]
gamut('1, 2, 3') // => ['1', '2', '3']
gamut([1, 'a', 3]) // => [1, 'a', 3]
gamut(object) // => [ object ]
gamut(null) // => [ ]</code></pre>
</dd>
<dt>
<h4 class="name" id="heights"><span class="type-signature"></span>heights<span class="signature">(source)</span><span class="type-signature"> &rarr; {Array.&lt;Integer>}</span></h4>
</dt>
<dd>
<div class="description">
<p>Get the heights of the notes or intervals. The height of a note is the
distance in semitones from <code>'C0'</code> to the note. Applied to intervals,
is the number of semitones</p>
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
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L123">lineno 123</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the heights</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array.&lt;Integer></span>
</dd>
</dl>
<h5>Example</h5>
<pre class="prettyprint"><code>gamut.heights('C0 D0 C1') // => [0, 2, 12]</code></pre>
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
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L76">lineno 76</a>
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
<h4 class="name" id="intervalSet"><span class="type-signature"></span>intervalSet<span class="signature">(source)</span><span class="type-signature"> &rarr; {Array.&lt;String>}</span></h4>
</dt>
<dd>
<div class="description">
<p>Get the interval set of the gamut. An interval set is a group of ascending
simple intervals with no repetitions.</p>
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
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L250">lineno 250</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the intervals</p>
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
<pre class="prettyprint"><code>gamut.intervalSet('1P 2M 3m 8P 9M 10M') // => ['1P', '2M', '3m', '3M']</code></pre>
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
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L59">lineno 59</a>
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
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L42">lineno 42</a>
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
<h5>Example</h5>
<pre class="prettyprint"><code>gamut.parse('C D') // => [ [0, 0, null], [1, 0, null]]
gamut.parse('1P 2M 3m') // => [ [0, 0, 0], [1, 0, 0], [2, -1, 0] ]</code></pre>
</dd>
<dt>
<h4 class="name" id="pitchClasses"><span class="type-signature"></span>pitchClasses<span class="signature">(source)</span><span class="type-signature"> &rarr; {Array.&lt;String>}</span></h4>
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
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L93">lineno 93</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the pitch classes</p>
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
<pre class="prettyprint"><code>gamut.pitchClasses('C2 D4 E') // => ['C', 'D', 'E']</code></pre>
</dd>
<dt>
<h4 class="name" id="pitchSet"><span class="type-signature"></span>pitchSet<span class="signature">(source)</span><span class="type-signature"> &rarr; {Array.&lt;String>}</span></h4>
</dt>
<dd>
<div class="description">
<p>Get the pitch set of the gamut. A pitch set is a group of note names without
octave and no repretition in ascending order (starting from the first note)</p>
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
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L266">lineno 266</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the pitch classes (note names without octaves)</p>
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
<pre class="prettyprint"><code>gamut.pitchSet('D4 D5 E6 Eb5 C2') // => ['D', 'Eb', 'E', 'C']</code></pre>
</dd>
<dt>
<h4 class="name" id="simplify"><span class="type-signature"></span>simplify<span class="signature">(source)</span><span class="type-signature"> &rarr; {Array.&lt;String>}</span></h4>
</dt>
<dd>
<div class="description">
<p>Convert all compound intervals to simple intervals</p>
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
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L108">lineno 108</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the simplified intervals</p>
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
<pre class="prettyprint"><code>gamut.simplify('1P 2M 9m') // => ['1P', '2M', '2m']</code></pre>
</dd>
<dt>
<h4 class="name" id="sortByFreq"><span class="type-signature"></span>sortByFreq<span class="signature">(source)</span><span class="type-signature"> &rarr; {Array.&lt;String>}</span></h4>
</dt>
<dd>
<div class="description">
<p>Sort notes in ascending frequency (pitch) order</p>
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
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L220">lineno 220</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the sorted notes</p>
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
<pre class="prettyprint"><code>gamut.sortByFreq('D E F G C') // => ['C', 'D', E', F', 'G']</code></pre>
</dd>
<dt>
<h4 class="name" id="sortBySize"><span class="type-signature"></span>sortBySize<span class="signature">(source)</span><span class="type-signature"> &rarr; {Array.&lt;String>}</span></h4>
</dt>
<dd>
<div class="description">
<p>Sort intervals by size</p>
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
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L235">lineno 235</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the sorted intervals</p>
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
<pre class="prettyprint"><code>gamut.sortBySize('5 4 3 2 1') // => ['1P', '2M', '3M', '4P', '5P']</code></pre>
</dd>
<dt>
<h4 class="name" id="transpose"><span class="type-signature"></span>transpose<span class="signature">(interval, source)</span><span class="type-signature"> &rarr; {Array.&lt;Array>}</span></h4>
</dt>
<dd>
<div class="description">
<p>Add an interval to a gamut of intervals</p>
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
|
<span class="param-type">Array</span>
</td>
<td class="description last"><p>the interval to add</p></td>
</tr>
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
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L161">lineno 161</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the gamut added by the interval</p>
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
<pre class="prettyprint"><code>gamut.add('M2', '1P 2M 3M') // => ['2M', '3M', '4A']</code></pre>
</dd>
<dt>
<h4 class="name" id="transpose"><span class="type-signature"></span>transpose<span class="signature">(interval, source)</span><span class="type-signature"> &rarr; {Array.&lt;Array>}</span></h4>
</dt>
<dd>
<div class="description">
<p>Transpose a list of notes by an interval</p>
<p>If the pitch to tranpose is a pitch class (note name without octave),
the transposed pitch will be a pitch class.</p>
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
|
<span class="param-type">Array</span>
</td>
<td class="description last"><p>the interval to transpose</p></td>
</tr>
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
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L140">lineno 140</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the transposed notes</p>
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
<pre class="prettyprint"><code>gamut.transpose('M2', 'C D E') // => ['D', 'E', 'F#']
gamut.transpose('M2', 'C2 D3 E2') // => ['D2', 'E3', 'F#2']</code></pre>
</dd>
<dt>
<h4 class="name" id="uniq"><span class="type-signature"></span>uniq<span class="signature">(source)</span><span class="type-signature"> &rarr; {Array.&lt;String>}</span></h4>
</dt>
<dd>
<div class="description">
<p>Remove duplicates <strong>and</strong> nulls</p>
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
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js">gamut.js</a>
<span>, </span>
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L205">lineno 205</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the notes</p>
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
<pre class="prettyprint"><code>gamut.uniq('C D blah E2 E3') // => ['C', 'D', 'E2', 'E3']</code></pre>
</dd>
</dl>
</article>
</section>
</div>

*generated with [docme](https://github.com/thlorenz/docme)*
</div>
<!-- END docme generated API please keep comment here to allow auto update -->
