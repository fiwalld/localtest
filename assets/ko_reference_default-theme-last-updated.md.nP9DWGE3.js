import{_ as a,c as e,o as s,aT as t}from"./chunks/framework.B2PsjvDk.js";const f=JSON.parse('{"title":"마지막 업데이트 시간","description":"","frontmatter":{},"headers":[],"relativePath":"ko/reference/default-theme-last-updated.md","filePath":"ko/reference/default-theme-last-updated.md","lastUpdated":1728095291000}'),i={name:"ko/reference/default-theme-last-updated.md"},l=t(`<h1 id="last-updated" tabindex="-1">마지막 업데이트 시간 <a class="header-anchor" href="#last-updated" aria-label="Permalink to &quot;마지막 업데이트 시간 {#last-updated}&quot;">​</a></h1><p>마지막 내용의 업데이트 시간은 페이지의 오른쪽 하단에 표시됩니다. 활성화하려면 config에 <code>lastUpdated</code> 옵션을 추가하세요.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>업데이트 시간을 보려면 markdown 파일을 커밋해야 합니다.</p></div><h2 id="site-level-config" tabindex="-1">사이트 수준 설정 <a class="header-anchor" href="#site-level-config" aria-label="Permalink to &quot;사이트 수준 설정 {#site-level-config}&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  lastUpdated: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="frontmatter-config" tabindex="-1">프런트매터 설정 <a class="header-anchor" href="#frontmatter-config" aria-label="Permalink to &quot;프런트매터 설정 {#frontmatter-config}&quot;">​</a></h2><p>이 기능은 frontmatter의 <code>lastUpdated</code> 옵션을 사용하여 페이지별로 비활성화할 수 있습니다:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">lastUpdated</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><p>자세한 내용은 <a href="./default-theme-config#lastupdated">기본 테마: 마지막 업데이트 시간</a>를 참조하세요. 테마 수준에서 참 값을 설정하면 사이트 또는 페이지 수준에서 명시적으로 비활성화하지 않는 한 기능이 활성화됩니다.</p>`,9),n=[l];function d(p,o,h,r,c,k){return s(),e("div",null,n)}const g=a(i,[["render",d]]);export{f as __pageData,g as default};
