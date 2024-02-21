import{_ as s,b as l,o as i,c as o,e,f as a,k as t,a as r}from"./app-ffa276ea.js";const c={},d=e("h1",{id:"building-and-installing",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#building-and-installing","aria-hidden":"true"},"#"),a(" Building and installing")],-1),u=e("h2",{id:"requirements",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#requirements","aria-hidden":"true"},"#"),a(" Requirements")],-1),p=e("li",null,"Since this is built with Zig, you should be able to build buzz on a wide variety of architectures even though this has only been tested on x86/M1.",-1),h={href:"https://github.com/buzz-language/buzz/issues/74",target:"_blank",rel:"noopener noreferrer"},b=e("li",null,"libc",-1),g=e("li",null,"zig master",-1),m=r(`<h2 id="build" tabindex="-1"><a class="header-anchor" href="#build" aria-hidden="true">#</a> Build</h2><ol><li>Clone the project: <code>git clone https://github.com/buzz-language/buzz &lt;buzz_dir&gt;</code></li><li>Checkout submodules: <code>git submodule update --init</code></li><li>Build MIR:</li></ol><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> vendors/mir
<span class="token function">make</span>
</code></pre></div><ol start="4"><li>Have fun: <code>zig build run -- &lt;myscript.buzz&gt;</code></li></ol><h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># install locally at ~/.local</span>
zig build <span class="token parameter variable">-Doptimize</span><span class="token operator">=</span>ReleaseSafe <span class="token function">install</span> <span class="token parameter variable">-p</span> ~/.local

<span class="token comment"># install globally at /usr/local</span>
<span class="token function">sudo</span> zig build <span class="token parameter variable">-Doptimize</span><span class="token operator">=</span>ReleaseSafe <span class="token function">install</span> <span class="token parameter variable">-p</span> /usr/local
</code></pre></div><p>If you&#39;re usage if performance critical (game dev for example), you can build using <code>-Doptimize=ReleaseFast</code>.</p><p>Remember to modify PATH to include the <code>bin</code> directory where it is installed. For example, <code>export PATH=PATH:/home/xxx/.local/bin</code>. You can then run buzz with <code>buzz &lt;myscript.buzz&gt;</code>.</p>`,8),_={href:"https://marketplace.visualstudio.com/items?itemName=giann.buzz",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/buzz-language/code/blob/main/syntaxes/buzz.tmLanguage.json",target:"_blank",rel:"noopener noreferrer"};function z(k,x){const n=l("ExternalLinkIcon");return i(),o("div",null,[d,u,e("ul",null,[p,e("li",null,[a("Linux or macOS (Windows support "),e("a",h,[a("is coming"),t(n)]),a(")")]),b,g]),m,e("p",null,[a("Additionally, install the "),e("a",_,[a("VS Code extension"),t(n)]),a(" to get syntax highlighting. If you don't use VS Code but your editor supports "),e("a",f,[a("TextMate grammar files"),t(n)]),a(", you can use that.")])])}const y=s(c,[["render",z],["__file","building-installing.html.vue"]]);export{y as default};