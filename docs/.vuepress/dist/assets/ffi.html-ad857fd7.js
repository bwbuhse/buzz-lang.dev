import{_ as c,b as p,o as u,c as i,e as t,f as n,k as a,l as e,a as o}from"./app-ffa276ea.js";const d={},l=t("h1",{id:"foreign-function-interface",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#foreign-function-interface","aria-hidden":"true"},"#"),n(" Foreign Function Interface")],-1),r=o(`<ol><li>Taking its arguments from the stack</li><li>Converting them to the expected types</li><li>Make the call to the foreign function</li><li>Convert its result to a buzz value</li><li>Push it on the stack</li></ol><p>This is called a binding and writing those can be time consuming for very little added value to your program. Another option is using the FFI feature of buzz which will generate a JIT compiled function that will do this work for you.</p><h2 id="zdef-statements" tabindex="-1"><a class="header-anchor" href="#zdef-statements" aria-hidden="true">#</a> <code>zdef</code> statements</h2><p><code>zdef</code> statements can only occur in the global scope. They have two functions: declare the type of the foreign functions and specify which library they are bound to.</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">zdef</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;/path/to/libforeign&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;fn hello(name: [*:0]const u8) void;&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">zdef</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;/path/to/libforeign&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">\`
    pub const AStruct = struct </span><span class="token interpolation">{
        id: u32,
        name: [*:0]const u8,
    }</span><span class="token string">;
\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">zdef</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;/path/to/libforeign&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;fn get_id(data: *Data) u32;&quot;</span></span><span class="token punctuation">)</span>
</code></pre></div><p>The definitions are written in C ABI compatible zig code. Once you&#39;ve declared your interface with <code>zdef</code>s. You can use it just like any other buzz function, assuming you use the appropriate buzz values.</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">import</span> <span class="token string-literal"><span class="token string">&quot;ffi&quot;</span></span><span class="token punctuation">;</span>

<span class="token comment">|...</span>

<span class="token function">hello</span><span class="token punctuation">(</span><span class="token function">cstr</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;world&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">AStruct</span> data <span class="token operator">=</span> <span class="token class-name">AStruct</span><span class="token punctuation">{</span>
    name <span class="token operator">=</span> <span class="token function">cstr</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;hello&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    id <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">get_id</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">42</span><span class="token punctuation">;</span>
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>When a <code>[*:0]const u8</code> pointer is expected, you can provide a buzz string. Note however that we use the <code>cstr</code> helper which will add <code>\\0</code> to the end of the string. Avoid using a buzz strings that has multiple <code>\\0</code> embedded in them.</p></div><p><code>struct</code> instances are always passed by reference right now (passing a struct by value can be complex depending on your system ABI). This is why you can pass them directly to functions expecting pointer to a struct.</p><h2 id="pointers" tabindex="-1"><a class="header-anchor" href="#pointers" aria-hidden="true">#</a> Pointers</h2>`,10),k=t("code",null,"Buffer",-1),f=o(`<div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code><span class="token keyword">zdef</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;/path/to/libforeign&quot;</span></span><span class="token punctuation">,</span> <span class="token string-literal"><span class="token string">&quot;fn sum(values: [*]i32) u32;&quot;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">|...</span>

<span class="token class-name">Buffer</span> buffer <span class="token operator">=</span> <span class="token class-name">Buffer</span><span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

buffer<span class="token punctuation">.</span>writeZ<span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&quot;i32&quot;</span></span><span class="token punctuation">,</span> values<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1,</span> <span class="token number">2,</span> <span class="token number">3]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">sum</span><span class="token punctuation">(</span>buffer<span class="token punctuation">.</span><span class="token function">ptr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">6;</span>
</code></pre></div><p>To write a list of structs, you must use <code>writeStruct</code>.</p><div class="language-buzz" data-ext="buzz"><pre class="language-buzz"><code>buffer<span class="token punctuation">.</span><span class="token function">writeStruct</span><span class="token punctuation">(</span><span class="token operator">&lt;</span><span class="token class-name">Data</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token class-name">Data</span><span class="token punctuation">,</span> values<span class="token punctuation">:</span> <span class="token punctuation">[</span>data1<span class="token punctuation">,</span> data2<span class="token punctuation">,</span> datae3<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="supported-zig-types-and-statements" tabindex="-1"><a class="header-anchor" href="#supported-zig-types-and-statements" aria-hidden="true">#</a> Supported zig types and statements</h2><p>Here&#39;s the list of supported types and their buzz counterparts:</p><table><thead><tr><th>Zig type</th><th>buzz type</th></tr></thead><tbody><tr><td><code>c_int</code></td><td><code>int</code></td></tr><tr><td><code>u8</code></td><td><code>int</code></td></tr><tr><td><code>i8</code></td><td><code>int</code></td></tr><tr><td><code>u16</code></td><td><code>int</code></td></tr><tr><td><code>i16</code></td><td><code>int</code></td></tr><tr><td><code>i32</code></td><td><code>int</code></td></tr><tr><td><code>c_uint</code></td><td><code>float</code></td></tr><tr><td><code>u32</code></td><td><code>float</code></td></tr><tr><td><code>i64</code></td><td><code>float</code></td></tr><tr><td><code>f32</code></td><td><code>float</code></td></tr><tr><td><code>f64</code></td><td><code>float</code></td></tr><tr><td><code>u64</code></td><td><code>ud</code></td></tr><tr><td><code>usize</code></td><td><code>ud</code></td></tr><tr><td><code>bool</code></td><td><code>bool</code></td></tr><tr><td><code>void</code></td><td><code>void</code></td></tr><tr><td>pointers</td><td><code>ud</code></td></tr><tr><td><code>extern struct</code></td><td>foreign struct</td></tr><tr><td><code>opaque struct</code></td><td>foreign struct</td></tr><tr><td><code>extern union</code></td><td>foreign struct</td></tr></tbody></table>`,6);function h(g,b){const s=p("RouterLink");return u(),i("div",null,[l,t("p",null,[n("When you want to call a foreign function from a buzz program you can use "),a(s,{to:"/guide/calling-native-code.html"},{default:e(()=>[n("buzz's API")]),_:1}),n(" to build the function call by:")]),r,t("p",null,[n("For any other type of pointers. You can use the "),k,n(" object provided by the "),a(s,{to:"/reference/std/buffer.html"},{default:e(()=>[n("buffer standard library")]),_:1}),n(".")]),f])}const z=c(d,[["render",h],["__file","ffi.html.vue"]]);export{z as default};