import{_ as e,c as o,o as t,aT as i}from"./chunks/framework.B2PsjvDk.js";const g=JSON.parse('{"title":"Migration from VitePress 0.x","description":"","frontmatter":{},"headers":[],"relativePath":"guide/migration-from-vitepress-0.md","filePath":"en/guide/migration-from-vitepress-0.md","lastUpdated":1728095291000}'),a={name:"guide/migration-from-vitepress-0.md"},r=i('<h1 id="migration-from-vitepress-0-x" tabindex="-1">Migration from VitePress 0.x <a class="header-anchor" href="#migration-from-vitepress-0-x" aria-label="Permalink to &quot;Migration from VitePress 0.x&quot;">​</a></h1><p>If you&#39;re coming from VitePress 0.x version, there&#39;re several breaking changes due to new features and enhancement. Please follow this guide to see how to migrate your app over to the latest VitePress.</p><h2 id="app-config" tabindex="-1">App Config <a class="header-anchor" href="#app-config" aria-label="Permalink to &quot;App Config&quot;">​</a></h2><ul><li>The internationalization feature is not yet implemented.</li></ul><h2 id="theme-config" tabindex="-1">Theme Config <a class="header-anchor" href="#theme-config" aria-label="Permalink to &quot;Theme Config&quot;">​</a></h2><ul><li><code>sidebar</code> option has changed its structure. <ul><li><code>children</code> key is now named <code>items</code>.</li><li>Top level item may not contain <code>link</code> at the moment. We&#39;re planning to bring it back.</li></ul></li><li><code>repo</code>, <code>repoLabel</code>, <code>docsDir</code>, <code>docsBranch</code>, <code>editLinks</code>, <code>editLinkText</code> are removed in favor of more flexible api. <ul><li>For adding GitHub link with icon to the nav, use <a href="./../reference/default-theme-nav#navigation-links">Social Links</a> feature.</li><li>For adding &quot;Edit this page&quot; feature, use <a href="./../reference/default-theme-edit-link">Edit Link</a> feature.</li></ul></li><li><code>lastUpdated</code> option is now split into <code>config.lastUpdated</code> and <code>themeConfig.lastUpdatedText</code>.</li><li><code>carbonAds.carbon</code> is changed to <code>carbonAds.code</code>.</li></ul><h2 id="frontmatter-config" tabindex="-1">Frontmatter Config <a class="header-anchor" href="#frontmatter-config" aria-label="Permalink to &quot;Frontmatter Config&quot;">​</a></h2><ul><li><code>home: true</code> option has changed to <code>layout: home</code>. Also, many Homepage related settings have been modified to provide additional features. See <a href="./../reference/default-theme-home-page">Home Page guide</a> for details.</li><li><code>footer</code> option is moved to <a href="./../reference/default-theme-config#footer"><code>themeConfig.footer</code></a>.</li></ul>',8),n=[r];function d(c,l,s,f,m,h){return t(),o("div",null,n)}const p=e(a,[["render",d]]);export{g as __pageData,p as default};
