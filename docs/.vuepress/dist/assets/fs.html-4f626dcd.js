import{_ as s,o as a,c as n,a as e}from"./app-d5d1ed34.js";const t={},o=e(`<h1 id="fs" tabindex="-1"><a class="header-anchor" href="#fs" aria-hidden="true">#</a> fs</h1><h2 id="currentdirectory" tabindex="-1"><a class="header-anchor" href="#currentdirectory" aria-hidden="true">#</a> currentDirectory</h2><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function">currentDirectory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">str</span> <span class="token operator">!&gt;</span> <span class="token class-name">FileSystemError</span><span class="token punctuation">,</span> <span class="token class-name">InvalidArgumentError</span> 
</code></pre></div><p>Returns current directory absolute path</p><p><strong>Returns:</strong> current directory</p><h2 id="makedirectory" tabindex="-1"><a class="header-anchor" href="#makedirectory" aria-hidden="true">#</a> makeDirectory</h2><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function">makeDirectory</span><span class="token punctuation">(</span><span class="token keyword">str</span> path<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">void</span> <span class="token operator">!&gt;</span> <span class="token class-name">FileSystemError</span><span class="token punctuation">,</span> <span class="token class-name">UnexpectedError</span> 
</code></pre></div><p>Creates directory path</p><ul><li><strong><code>path</code>:</strong> directory to create</li></ul><h2 id="delete" tabindex="-1"><a class="header-anchor" href="#delete" aria-hidden="true">#</a> delete</h2><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function">delete</span><span class="token punctuation">(</span><span class="token keyword">str</span> path<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">void</span> <span class="token operator">!&gt;</span> <span class="token class-name">FileSystemError</span><span class="token punctuation">,</span> <span class="token class-name">UnexpectedError</span> 
</code></pre></div><p>Deletes directory or file at path</p><ul><li><strong><code>path</code>:</strong> direcotry/file to delete</li></ul><h2 id="move" tabindex="-1"><a class="header-anchor" href="#move" aria-hidden="true">#</a> move</h2><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function">move</span><span class="token punctuation">(</span><span class="token keyword">str</span> source<span class="token punctuation">,</span> <span class="token keyword">str</span> destination<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">void</span> <span class="token operator">!&gt;</span> <span class="token class-name">FileSystemError</span><span class="token punctuation">,</span> <span class="token class-name">UnexpectedError</span> 
</code></pre></div><p>Moves/renames file</p><ul><li><strong><code>destination</code>:</strong> where to move it</li></ul><h2 id="list" tabindex="-1"><a class="header-anchor" href="#list" aria-hidden="true">#</a> list</h2><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function">list</span><span class="token punctuation">(</span><span class="token keyword">str</span> path<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token keyword">str</span><span class="token punctuation">]</span> <span class="token operator">!&gt;</span> <span class="token class-name">FileSystemError</span><span class="token punctuation">,</span> <span class="token class-name">UnexpectedError</span> 
</code></pre></div><p>List files under path</p><ul><li><strong><code>path</code>:</strong> directory to list</li></ul><h2 id="exists" tabindex="-1"><a class="header-anchor" href="#exists" aria-hidden="true">#</a> exists</h2><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">fun</span> <span class="token function">exists</span><span class="token punctuation">(</span><span class="token keyword">str</span> path<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token keyword">bool</span> <span class="token operator">!&gt;</span> <span class="token class-name">FileSystemError</span>
</code></pre></div><p>Returns true if path exists</p><ul><li><strong><code>path</code>:</strong> Directory/file to test</li></ul><p><strong>Returns:</strong> <code>true</code> if file exists</p>`,26),p=[o];function r(c,l){return a(),n("div",null,p)}const d=s(t,[["render",r],["__file","fs.html.vue"]]);export{d as default};