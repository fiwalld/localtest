import{_ as e,c as a,o as r,aT as o}from"./chunks/framework.B2PsjvDk.js";const h=JSON.parse('{"title":"O que é VitePress?","description":"","frontmatter":{},"headers":[],"relativePath":"pt/guide/what-is-vitepress.md","filePath":"pt/guide/what-is-vitepress.md","lastUpdated":1728095291000}'),t={name:"pt/guide/what-is-vitepress.md"},s=o('<h1 id="what-is-vitepress" tabindex="-1">O que é VitePress? <a class="header-anchor" href="#what-is-vitepress" aria-label="Permalink to &quot;O que é VitePress? {#what-is-vitepress}&quot;">​</a></h1><p>O VitePress é um <a href="https://en.wikipedia.org/wiki/Static_site_generator" target="_blank" rel="noreferrer">Gerador de Site Estático</a> (SSG) projetado para criar sites rápidos e centrados em conteúdo. Em suma, VitePress utiliza seu conteúdo-fonte escrito em <a href="https://en.wikipedia.org/wiki/Markdown" target="_blank" rel="noreferrer">Markdown</a>, aplica um tema a ele e gera páginas HTML estáticas que podem ser facilmente implantadas em qualquer lugar.</p><div class="tip custom-block" style="padding-top:8px;"><p>Quer apenas experimentar? Pule para o <a href="./getting-started">Início Rápido</a>.</p></div><h2 id="use-cases" tabindex="-1">Casos de Uso <a class="header-anchor" href="#use-cases" aria-label="Permalink to &quot;Casos de Uso {#use-cases}&quot;">​</a></h2><ul><li><p><strong>Documentação</strong></p><p>VitePress vem com um tema padrão projetado para documentação técnica. Ele alimenta esta página que você está lendo agora, juntamente com a documentação <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">Vite</a>, <a href="https://rollupjs.org/" target="_blank" rel="noreferrer">Rollup</a>, <a href="https://pinia.vuejs.org/" target="_blank" rel="noreferrer">Pinia</a>, <a href="https://vueuse.org/" target="_blank" rel="noreferrer">VueUse</a>, <a href="https://vitest.dev/" target="_blank" rel="noreferrer">Vitest</a>, <a href="https://d3js.org/" target="_blank" rel="noreferrer">D3</a>, <a href="https://unocss.dev/" target="_blank" rel="noreferrer">UnoCSS</a>, <a href="https://iconify.design/" target="_blank" rel="noreferrer">Iconify</a> e <a href="https://www.vuetelescope.com/explore?framework.slug=vitepress" target="_blank" rel="noreferrer">muitos outros</a>.</p><p>A <a href="https://vuejs.org/" target="_blank" rel="noreferrer">documentação oficial Vue.js</a> também é baseada em VitePress, mas usa um tema personalizado compartilhado entre várias traduções.</p></li><li><p><strong>Blogs, Portfólios e Sites de Marketing</strong></p><p>VitePress suporta <a href="./custom-theme">temas totalmente personalizáveis</a>, com a experiência de desenvolvedor padrão de uma aplicação Vite + Vue. A construção com Vite significa que você pode aproveitar diretamente plugins Vite de seu rico ecossistema. Adicionalmente, VitePress fornece APIs flexíveis para <a href="./data-loading">carregar dados</a> (locais ou remotos) e <a href="./routing#dynamic-routes">gerar rotas dinamicamente</a>. Você pode usá-lo para construir praticamente qualquer coisa desde que os dados possam ser determinados no momento da construção.</p><p>O <a href="https://blog.vuejs.org/" target="_blank" rel="noreferrer">blog oficial Vue.js</a> é um blog simples que gera sua página inicial baseada em conteúdo local.</p></li></ul><h2 id="developer-experience" tabindex="-1">Experiência de Desenvolvedor <a class="header-anchor" href="#developer-experience" aria-label="Permalink to &quot;Experiência de Desenvolvedor {#developer-experience}&quot;">​</a></h2><p>VitePress visa proporcionar excelente Experiência de Desenvolvedor (DX) ao trabalhar com conteúdo em Markdown.</p><ul><li><p><strong><a href="https://vitejs.dev/" target="_blank" rel="noreferrer">Alimentado por Vite:</a></strong> inicialização instantânea do servidor, com edições sempre refletidas instantaneamente (&lt;100ms) sem recarregamento de página.</p></li><li><p><strong><a href="./markdown">Extensões Markdown Integradas:</a></strong> Frontmatter, tabelas, destaque de sintaxe... você escolhe. Especificamente, VitePress fornece muitos recursos avançados para trabalhar com blocos de código, tornando-o ideal para documentação altamente técnica.</p></li><li><p><strong><a href="./using-vue">Markdown Aprimorado por Vue:</a></strong> cada página Markdown é também um <a href="https://pt.vuejs.org/guide/scaling-up/sfc.html" target="_blank" rel="noreferrer">Componente de Arquivo Único Vue</a>, graças à compatibilidade de sintaxe de 100% do template Vue com HTML. Você pode incorporar interatividade em seu conteúdo estático usando recursos de template Vue ou componentes Vue importados.</p></li></ul><h2 id="performance" tabindex="-1">Desempenho <a class="header-anchor" href="#performance" aria-label="Permalink to &quot;Desempenho {#performance}&quot;">​</a></h2><p>Ao contrário de muitos SSGs tradicionais, um site gerado pelo VitePress é na verdade uma <a href="https://en.wikipedia.org/wiki/Single-page_application" target="_blank" rel="noreferrer">Aplicação de Página Única</a> (SPA).</p><ul><li><p><strong>Carregamento Inicial Rápido</strong></p><p>A visita inicial a qualquer página será servida com o HTML estático pré-renderizado para velocidade de carregamento rápida e SEO otimizado. A página então carrega um pacote JavaScript que transforma a página em uma SPA Vue (&quot;hidratação&quot;). O processo de hidratação é extremamente rápido: no <a href="https://pagespeed.web.dev/report?url=https%3A%2F%2Fvitepress.dev%2F" target="_blank" rel="noreferrer">PageSpeed Insights</a>, sites típicos VitePress alcançam pontuações de desempenho quase perfeitas, mesmo em dispositivos móveis de baixo desempenho com uma rede lenta.</p></li><li><p><strong>Navegação Rápida pós-carregamento</strong></p><p>Mais importante ainda, o modelo SPA leva a uma melhor experiência do usuário <strong>após</strong> o carregamento inicial. A navegação subsequente dentro do site não causará mais uma recarga completa da página. Em vez disso, o conteúdo da página de entrada será buscado e atualizado dinamicamente. VitePress também pré-carrega automaticamente pedaços de página para links que estão dentro do viewport. Na maioria dos casos, a navegação pós-carregamento parecerá instantânea.</p></li><li><p><strong>Interatividade Sem Penalidades</strong></p><p>Para ser capaz de hidratar as partes dinâmicas Vue incorporadas dentro do Markdown estático, cada página Markdown é processada como um componente Vue e compilada em JavaScript. Isso pode parecer ineficiente, mas o compilador Vue é inteligente o suficiente para separar as partes estáticas e dinâmicas, minimizando tanto o custo de hidratação quanto o tamanho da carga. Para o carregamento inicial da página, as partes estáticas são automaticamente eliminadas da carga JavaScript e puladas durante a hidratação.</p></li></ul><h2 id="what-about-vuepress" tabindex="-1">E o VuePress? <a class="header-anchor" href="#what-about-vuepress" aria-label="Permalink to &quot;E o VuePress? {#what-about-vuepress}&quot;">​</a></h2><p>VitePress é o sucessor espiritual de VuePress. VuePress era orginalmente baseado em Vue 2 e webpack. Com Vue 3 e Vite, VitePress oferece uma experiência de desenvolvedor significativamente melhor, melhor desempenho em produção, um tema padrão mais polido e uma API de personalização mais flexível.</p><p>A diferença da API entre VitePress e VuePress reside principalmente em temas e personalização. Se você estiver usando VuePress 1 com o tema padrão, a migração para VitePress deve ser relativamente simples.</p><p>Também houve esforço investido em VuePress 2, que também suporta Vue 3 e Vite com melhor compatibilidade do que VuePress 1. No entanto, manter dois SSGs em paralelo não é sustentável, então a equipe Vue decidiu focar em VitePress como o principal SSG recomendado a longo prazo.</p>',15),i=[s];function n(p,d,c,l,m,u){return r(),a("div",null,i)}const v=e(t,[["render",n]]);export{h as __pageData,v as default};
