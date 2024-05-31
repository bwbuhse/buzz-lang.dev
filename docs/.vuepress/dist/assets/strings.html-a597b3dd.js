import{_ as n,o as s,c as a,a as e}from"./app-563139a6.js";const t={},o=e(`<h1 id="strings" tabindex="-1"><a class="header-anchor" href="#strings" aria-hidden="true">#</a> Strings</h1><h2 id="len" tabindex="-1"><a class="header-anchor" href="#len" aria-hidden="true">#</a> len</h2><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function">len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">int</span>
</code></pre></div><p><strong>Returns:</strong> Length of the string</p><h2 id="upper" tabindex="-1"><a class="header-anchor" href="#upper" aria-hidden="true">#</a> upper</h2><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function">upper</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">str</span>
</code></pre></div><p><strong>Returns:</strong> Uppercased string</p><h2 id="lower" tabindex="-1"><a class="header-anchor" href="#lower" aria-hidden="true">#</a> lower</h2><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function">lower</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">str</span>
</code></pre></div><p><strong>Returns:</strong> Lowercased string</p><h2 id="trim" tabindex="-1"><a class="header-anchor" href="#trim" aria-hidden="true">#</a> trim</h2><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">str</span>
</code></pre></div><p><strong>Returns:</strong> Trimmed string</p><h2 id="byte" tabindex="-1"><a class="header-anchor" href="#byte" aria-hidden="true">#</a> byte</h2><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function">byte</span><span class="token punctuation">(</span><span class="token keyword">int</span> at <span class="token operator">=</span> <span class="token number">0)</span> <span class="token operator">&gt;</span> <span class="token keyword">int</span>
</code></pre></div><p>Get byte value of character</p><ul><li><strong><code>at</code></strong>: index of character in the string</li></ul><p><strong>Returns:</strong> Byte value of character</p><h2 id="indexof" tabindex="-1"><a class="header-anchor" href="#indexof" aria-hidden="true">#</a> indexOf</h2><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token keyword">str</span> needle<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">int</span><span class="token operator">?</span>
</code></pre></div><p>Find needle in string</p><ul><li><strong><code>needle</code></strong>: needle to find</li></ul><p><strong>Returns:</strong> Index of found match</p><h2 id="startswith" tabindex="-1"><a class="header-anchor" href="#startswith" aria-hidden="true">#</a> startsWith</h2><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token keyword">str</span> needle<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">bool</span>
</code></pre></div><p>Test if strings starts with needle</p><ul><li><strong><code>needle</code></strong>: needle to find</li></ul><p><strong>Returns:</strong> <code>true</code> if strings starts with needle</p><h2 id="endswith" tabindex="-1"><a class="header-anchor" href="#endswith" aria-hidden="true">#</a> endsWith</h2><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token keyword">str</span> needle<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">bool</span>
</code></pre></div><p>Test if strings ends with needle</p><ul><li><strong><code>needle</code></strong>: needle to find</li></ul><p><strong>Returns:</strong> <code>true</code> if strings ends with needle</p><h2 id="replace" tabindex="-1"><a class="header-anchor" href="#replace" aria-hidden="true">#</a> replace</h2><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function">replace</span><span class="token punctuation">(</span><span class="token keyword">str</span> needle<span class="token punctuation">,</span> <span class="token keyword">str</span> with<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">str</span>
</code></pre></div><p>Replace first occurence of needle</p><ul><li><strong><code>needle</code></strong>: needle to find</li><li><strong><code>with</code></strong>: replacement</li></ul><p><strong>Returns:</strong> New string</p><h2 id="split" tabindex="-1"><a class="header-anchor" href="#split" aria-hidden="true">#</a> split</h2><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function">split</span><span class="token punctuation">(</span><span class="token keyword">str</span> separator<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token keyword">str</span><span class="token punctuation">]</span>
</code></pre></div><p>Split string</p><ul><li><strong><code>separator</code></strong>: separator by which the string will be split</li></ul><p><strong>Returns:</strong> Splitted string</p><h2 id="sub" tabindex="-1"><a class="header-anchor" href="#sub" aria-hidden="true">#</a> sub</h2><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function">sub</span><span class="token punctuation">(</span><span class="token keyword">int</span> start<span class="token punctuation">,</span> <span class="token keyword">int</span><span class="token operator">?</span> len<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">str</span>
</code></pre></div><p>Get sub string</p><ul><li><strong><code>start</code></strong>: Sub string start index</li><li><strong><code>end</code></strong>: Length of sub string, if <code>null</code> will go until end of string</li></ul><p><strong>Returns:</strong> The substring</p><h2 id="repeat" tabindex="-1"><a class="header-anchor" href="#repeat" aria-hidden="true">#</a> repeat</h2><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function">repeat</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">str</span>
</code></pre></div><p>Repeat string</p><ul><li><strong><code>n</code></strong>: How many times the string will be repeated</li></ul><p><strong>Returns:</strong> New string</p><h2 id="encodebase64" tabindex="-1"><a class="header-anchor" href="#encodebase64" aria-hidden="true">#</a> encodeBase64</h2><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function">encodeBase64</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">str</span>
</code></pre></div><p>Base64 encode the string</p><p><strong>Returns:</strong> Encoded string</p><h2 id="decodebase64" tabindex="-1"><a class="header-anchor" href="#decodebase64" aria-hidden="true">#</a> decodeBase64</h2><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function">decodeBase64</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">str</span>
</code></pre></div><p>Base64 decode the string</p><p><strong>Returns:</strong> Decoded string</p><h2 id="hex" tabindex="-1"><a class="header-anchor" href="#hex" aria-hidden="true">#</a> hex</h2><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function">hex</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">str</span>
</code></pre></div><p>Converts binary string to hexadecimal representation</p><p><strong>Returns:</strong> Hex string</p><h2 id="bin" tabindex="-1"><a class="header-anchor" href="#bin" aria-hidden="true">#</a> bin</h2><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function">bin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">str</span>
</code></pre></div><p>Converts hexadecimal string to binary string</p><p><strong>Returns:</strong> Binary string</p><h2 id="utf8len" tabindex="-1"><a class="header-anchor" href="#utf8len" aria-hidden="true">#</a> utf8Len</h2><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function">utf8Len</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">int</span>
</code></pre></div><p><strong>Returns:</strong> Number of UTF8 codepoints in the string or <code>0</code> if string is not a valid UTF8 sequence</p><h2 id="utf8valid" tabindex="-1"><a class="header-anchor" href="#utf8valid" aria-hidden="true">#</a> utf8Valid</h2><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function">utf8Valid</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">bool</span>
</code></pre></div><p><strong>Returns:</strong> <code>true</code> if string is a valid UTF8 sequence</p><h2 id="utf8codepoints" tabindex="-1"><a class="header-anchor" href="#utf8codepoints" aria-hidden="true">#</a> utf8Codepoints</h2><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function">utf8Codepoints</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token keyword">str</span><span class="token punctuation">]</span>
</code></pre></div><p><strong>Returns:</strong> Return a list of the UTF8 string codepoints or an empty list if the string is not a valid UTF8 sequence</p>`,78),p=[o];function r(c,d){return s(),a("div",null,p)}const i=n(t,[["render",r],["__file","strings.html.vue"]]);export{i as default};