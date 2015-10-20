# API

_All functions are pure (no side effects, no mutations) so they allways returns a new copy of the arrays._


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
<p>Get the gamut pitch set as binary number representation</p>
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
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L193">lineno 193</a>
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
</dd>
<dt>
<h4 class="name" id="distances"><span class="type-signature"></span>distances<span class="signature">(tonic, source)</span><span class="type-signature"> &rarr; {Array.&lt;String>}</span></h4>
</dt>
<dd>
<div class="description">
<p>Get the distances (in intervals) of the notes from a tonic</p>
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
<td class="description last"><p>the note to calculate the interval from</p></td>
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
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L142">lineno 142</a>
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
</dd>
<dt>
<h4 class="name" id="fromBinarySet"><span class="type-signature"></span>fromBinarySet<span class="signature">(source, tonic)</span><span class="type-signature"> &rarr; {Array.&lt;String>}</span></h4>
</dt>
<dd>
<div class="description">
<p>Get a pitch set from a binary set number and a tonic</p>
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
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L205">lineno 205</a>
</li>
</ul></dd>
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
distance in semitones from <code>'C2'</code> to the note. Applied to intervals,
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
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L114">lineno 114</a>
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
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L73">lineno 73</a>
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
<p>Get the interval set of the gamut</p>
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
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L169">lineno 169</a>
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
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L56">lineno 56</a>
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
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L90">lineno 90</a>
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
</dd>
<dt>
<h4 class="name" id="pitchSet"><span class="type-signature"></span>pitchSet<span class="signature">(source)</span><span class="type-signature"> &rarr; {Array.&lt;String>}</span></h4>
</dt>
<dd>
<div class="description">
<p>Get the pitch set of the gamut</p>
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
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L181">lineno 181</a>
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
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L102">lineno 102</a>
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
</dd>
<dt>
<h4 class="name" id="transpose"><span class="type-signature"></span>transpose<span class="signature">(interval, source)</span><span class="type-signature"> &rarr; {Array.&lt;Integer>}</span></h4>
</dt>
<dd>
<div class="description">
<p>Transpose a list of notes by an interval</p>
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
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L128">lineno 128</a>
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
<span class="param-type">Array.&lt;Integer></span>
</dd>
</dl>
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
<a href="https://github.com/danigb/music-gamut/blob/master/gamut.js#L157">lineno 157</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the notes or intervals</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Array.&lt;String></span>
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