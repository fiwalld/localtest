import{_ as s,c as i,o as a,aT as e}from"./chunks/framework.B2PsjvDk.js";const g=JSON.parse('{"title":"Despliegue su Sitio VitePress","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"es/guide/deploy.md","filePath":"es/guide/deploy.md","lastUpdated":1728095291000}'),n={name:"es/guide/deploy.md"},t=e(`<h1 id="deploy-your-vitepress-site" tabindex="-1">Despliegue su Sitio VitePress <a class="header-anchor" href="#deploy-your-vitepress-site" aria-label="Permalink to &quot;Despliegue su Sitio VitePress {#deploy-your-vitepress-site}&quot;">​</a></h1><p>Las siguientes orientaciones están basadas en algunos supuestos:</p><ul><li><p>El sitio VitePress está dentro del directorio <code>docs</code> de su proyecto.</p></li><li><p>Está usando la directorio por defecto para el build (<code>.vitepress/dist</code>).</p></li><li><p>VitePress está instalado como una dependencia local en su proyecto, y usted configuró los siguientes scripts en su <code>package.json</code>:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;docs:build&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vitepress build docs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;docs:preview&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vitepress preview docs&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li></ul><h2 id="build-and-test-locally" tabindex="-1">Compilar y Testear Localmente <a class="header-anchor" href="#build-and-test-locally" aria-label="Permalink to &quot;Compilar y Testear Localmente {#build-and-test-locally}&quot;">​</a></h2><ol><li><p>Ejecute este comando para compilar la documentación:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:build</span></span></code></pre></div></li><li><p>Después de la compilación, vea la vista previa ejecutando:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:preview</span></span></code></pre></div><p>El comando <code>preview</code> inicializará un servidor web estático local que servirá la directorio de salida <code>.vitepress/dist</code> en <code>http://localhost:4173</code>. Puede usar eso para garantizar que todo esté correcto antes de enviar a producción.</p></li><li><p>Puede configurar el puerto del servidor pasando <code>--port</code> como argumento.</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;docs:preview&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vitepress preview docs --port 8080&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Ahora el método <code>docs:preview</code> implantará el servidor en <code>http://localhost:8080</code>.</p></li></ol><h2 id="setting-a-public-base-path" tabindex="-1">Configurando un Path Base Publico <a class="header-anchor" href="#setting-a-public-base-path" aria-label="Permalink to &quot;Configurando un Path Base Publico {#setting-a-public-base-path}&quot;">​</a></h2><p>Por defecto, asumimos que el sitio será implantado en el path raiz de un dominio (<code>/</code>). Si su sitio fuera servido en un subpath, por ejemplo, <code>https://meusite.com/blog/</code>, necesitará entonces configurar la opción <a href="./../reference/site-config#base"><code>base</code></a> para <code>&#39;/blog/&#39;</code> en la configuración VitePress.</p><p><strong>Ejemplo:</strong> Al usar GitHub Pages (ou GitLab Pages) e implantar en <code>user.github.io/repo/</code>, defina su <code>base</code> como <code>/repo/</code>.</p><h2 id="http-cache-headers" tabindex="-1">Headers de Cache HTTP <a class="header-anchor" href="#http-cache-headers" aria-label="Permalink to &quot;Headers de Cache HTTP {#http-cache-headers}&quot;">​</a></h2><p>Si tiene control sobre los headers HTTP de su servidor en producción, se puede configurar headers <code>cache-control</code> para obtener mejor desempeño en vistar repetidas.</p><p>La compilación de producción usa nombres de archivos con hash para assets estáticos (JavaScript, CSS e otros assets que no están en <code>public</code>). Se inspecciona la previa de producción usando las herramientas de desarrollador de su navegador en la pestaña red, verá archivos como <code>app.4f283b18.js</code>.</p><p>Este hash <code>4f283b18</code> es generado a partir del contenido de este archivo. La misma URL con hash es garantizada para servir el mismo contenido del archivo - se el contenido cambia, las URLs también cambian. Esto significa que puede utilizar con seguridad los headers de cahe más fuertespara esos archivos. Todos esos archivos serán colocados en <code>assets/</code> en la directorio de salida, entonces puede configurar el siguiente header para ellos:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Cache-Control: max-age=31536000,immutable</span></span></code></pre></div><p>::: detralles Ejemplo de archivo <code>_headers</code> do Netlify</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/assets/*</span></span>
<span class="line"><span>  cache-control: max-age=31536000</span></span>
<span class="line"><span>  cache-control: immutable</span></span></code></pre></div><p>Nota: el archivo <code>_headers</code> debe ser colocado en <a href="./asset-handling#the-public-directory">diretório public</a> - en nuestro caso, <code>docs/public/_headers</code> - para que el sea copiado exactamente para la directorio de salida.</p><p><a href="https://docs.netlify.com/routing/headers/" target="_blank" rel="noreferrer">Documentación de headers personalizados de Netlify</a></p><p>:::</p><p>::: detalles de Ejemplo de configuración Vercel em <code>vercel.json</code></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;headers&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;source&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/assets/(.*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;headers&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">          &quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Cache-Control&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">          &quot;value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;max-age=31536000, immutable&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Nota: el archivo <code>vercel.json</code> debe ser colocado en la raiz de su <strong>repositório</strong>.</p><p><a href="https://vercel.com/docs/concepts/projects/project-configuration#headers" target="_blank" rel="noreferrer">Documentación Vercel sobre configuración de headers </a></p><p>:::</p><h2 id="platform-guides" tabindex="-1">Guias de Plataforma <a class="header-anchor" href="#platform-guides" aria-label="Permalink to &quot;Guias de Plataforma {#platform-guides}&quot;">​</a></h2><h3 id="netlify-vercel-cloudflare-pages-aws-amplify-render" tabindex="-1">Netlify / Vercel / Cloudflare Pages / AWS Amplify / Render <a class="header-anchor" href="#netlify-vercel-cloudflare-pages-aws-amplify-render" aria-label="Permalink to &quot;Netlify / Vercel / Cloudflare Pages / AWS Amplify / Render&quot;">​</a></h3><p>Configure un nuevo proyecto y altere estas configuraciones usando su panel:</p><ul><li><strong>Comando de Compilación:</strong> <code>npm run docs:build</code></li><li><strong>directorio de Salida:</strong> <code>docs/.vitepress/dist</code></li><li><strong>Versión de Node:</strong> <code>18</code> (o superior)</li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>No active opciones como <em>Auto Minify</em> para código HTML. Eso removera comentarios de salida que tiene significado para Vue. Habrán errores de incompatibilidad de hidratación se fueran removidos.</p></div><h3 id="github-pages" tabindex="-1">GitHub Pages <a class="header-anchor" href="#github-pages" aria-label="Permalink to &quot;GitHub Pages&quot;">​</a></h3><ol><li><p>Cree un archivo llamado <code>deploy.yml</code> dentro del directorio <code>.github/workflows</code> do seu projeto com algum conteúdo como este:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Ejemplo de flujo de trabajo para compilar e implantar un sitio VitePress en GitHub Pages</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Implante el sitio VitePress en Pages</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Ejecute en push direccionados a la branch \`main\`.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Cambie para \`master\` si estuviera usando la branch \`master\` por defecto.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    branches</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Permite ejecutar manualmente este flujo de trabajo en la guia Actions</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  workflow_dispatch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Define permisos GITHUB_TOKEN para la implementación en GitHub Pages</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">permissions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  contents</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">read</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  pages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">write</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  id-token</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">write</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Permite apenas una implantación simultánea, omitiendo ejecuciones en fila entre la ejecución en progreso y la última de la fila.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Sin embargo, NO cancela ejecuciones en progreso, pues queremos permitir que esas implantaciones de producción sean concuidas.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">concurrency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  group</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">pages</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  cancel-in-progress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">jobs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Trabajo de compilación</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    runs-on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    steps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Checkout</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/checkout@v4</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          fetch-depth</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # No necesario se lastUpdated no estuviera habilitado</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # - uses: pnpm/action-setup@v3 # Desconecte eso si estuviera usando pnpm</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # - uses: oven-sh/setup-bun@v1 # Desconecte eso se estuviera usando Bun</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Setup Node</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/setup-node@v4</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          node-version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          cache</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # o pnpm / yarn</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Setup Pages</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/configure-pages@v4</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Install dependencies</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm ci</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # o pnpm install / yarn install / bun install</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Build with VitePress</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          npm run docs:build # o pnpm docs:build / yarn docs:build / bun run docs:build</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          touch docs/.vitepress/dist/.nojekyll</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Upload artifact</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/upload-pages-artifact@v3</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">docs/.vitepress/dist</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Trabajo de implantación</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  deploy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    environment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">github-pages</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\${{ steps.deployment.outputs.page_url }}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    needs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">build</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    runs-on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Deploy</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    steps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Deploy to GitHub Pages</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">deployment</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/deploy-pages@v4</span></span></code></pre></div><p>Asegurese de que la opción <code>base</code> en su VitePress esté configurada correctamentse. Vea <a href="#setting-a-public-base-path">Configuranco un Path base Público</a> para más detalles. :::</p></li><li><p>En las configuraciones de su repositorio sobre el item del menú &quot;Pages&quot;, seleccione &quot;GitHub Actions&quot; en &quot;Build and deployment &gt; Source&quot;.</p></li><li><p>Envie sus modificaciones para el branch <code>main</code> y espere la conclusión del flujo de trabajo de GitHub Actions. Verá su sitio implantado en <code>https://&lt;username&gt;.github.io/[repository]/</code> o <code>https://&lt;custom-domain&gt;/</code> dependiendo de sus configuraciones. Su sitio será implantado automáticamente en cada push para la branch <code>main</code>.</p></li></ol><h3 id="gitlab-pages" tabindex="-1">GitLab Pages <a class="header-anchor" href="#gitlab-pages" aria-label="Permalink to &quot;GitLab Pages&quot;">​</a></h3><ol><li><p>Defina <code>outDir</code> en la configuración VitePress como <code>../public</code>. Configure la opción <code>base</code> para <code>&#39;/&lt;repository&gt;/&#39;</code> se desea implantar en <code>https://&lt;username&gt;.gitlab.io/&lt;repository&gt;/</code>.</p></li><li><p>Cree un archivo llamado <code>.gitlab-ci.yml</code> en la raiz del proyecto con el contenido abajo. Esto construirá e implantará su sitio siempre que haga alteraciones en el contenido.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">node:18</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  cache</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    paths</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">node_modules/</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # - apk add git # Desconecte eso se estuviera usando imagenes pequeñas de Docker como Alpine y tuviera lastUpdated habilitado</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm install</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm run docs:build</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  artifacts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    paths</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">public</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  only</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">main</span></span></code></pre></div></li></ol><h3 id="azure-static-web-apps" tabindex="-1">Azure Static Web Apps <a class="header-anchor" href="#azure-static-web-apps" aria-label="Permalink to &quot;Azure Static Web Apps {#azure-static-web-apps}&quot;">​</a></h3><ol><li><p>Siga la <a href="https://docs.microsoft.com/en-us/azure/static-web-apps/build-configuration" target="_blank" rel="noreferrer">documentación oficial</a>.</p></li><li><p>Configure esos valores en su archivo de configuración (y remueva aquellos que no necesita, como <code>api_location</code>):</p><ul><li><strong><code>app_location</code></strong>: <code>/</code></li><li><strong><code>output_location</code></strong>: <code>docs/.vitepress/dist</code></li><li><strong><code>app_build_command</code></strong>: <code>npm run docs:build</code></li></ul></li></ol><h3 id="firebase" tabindex="-1">Firebase <a class="header-anchor" href="#firebase" aria-label="Permalink to &quot;Firebase {#firebase}&quot;">​</a></h3><ol><li><p>Cree <code>firebase.json</code> y <code>.firebaserc</code> en la raiz de su proyecto:</p><p><code>firebase.json</code>:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;hosting&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;public&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;docs/.vitepress/dist&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;ignore&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><code>.firebaserc</code>:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;projects&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;default&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;SU_ID_FIREBASE&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li><li><p>Después de ejecutar <code>npm run docs:build</code>, ejecute este comando para implantar:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">firebase</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deploy</span></span></code></pre></div></li></ol><h3 id="surge" tabindex="-1">Surge <a class="header-anchor" href="#surge" aria-label="Permalink to &quot;Surge&quot;">​</a></h3><ol><li><p>Después de ejecutar <code>npm run docs:build</code>, ejecute este comando para implantar:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> surge</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs/.vitepress/dist</span></span></code></pre></div></li></ol><h3 id="heroku" tabindex="-1">Heroku <a class="header-anchor" href="#heroku" aria-label="Permalink to &quot;Heroku&quot;">​</a></h3><ol><li><p>Siga la documentación y el guia proporcionados por <a href="https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-static" target="_blank" rel="noreferrer"><code>heroku-buildpack-static</code></a>.</p></li><li><p>Cree un archivo llamado <code>static.json</code> en la raiz de su proyecto con el contenido abajo:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;root&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;docs/.vitepress/dist&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li></ol><h3 id="edgio" tabindex="-1">Edgio <a class="header-anchor" href="#edgio" aria-label="Permalink to &quot;Edgio&quot;">​</a></h3><p>Consulte <a href="https://docs.edg.io/guides/vitepress" target="_blank" rel="noreferrer">Crear e Implantar una Aplicación VitePress en Edgio</a>.</p><h3 id="kinsta-static-site-hosting" tabindex="-1">Kinsta Static Site Hosting <a class="header-anchor" href="#kinsta-static-site-hosting" aria-label="Permalink to &quot;Kinsta Static Site Hosting {#kinsta-static-site-hosting}&quot;">​</a></h3><p>Puede implantar su sitio VitePress em <a href="https://kinsta.com/static-site-hosting/" target="_blank" rel="noreferrer">Kinsta</a> siguiendo estas <a href="https://kinsta.com/docs/vitepress-static-site-example/" target="_blank" rel="noreferrer">instrucciones</a>.</p>`,44),l=[t];function p(h,o,r,d,k,c){return a(),i("div",null,l)}const u=s(n,[["render",p]]);export{g as __pageData,u as default};
