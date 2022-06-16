import{_ as n,o as s,b as a,h as t}from"./app.367e07ac.js";const g='{"title":"Start","description":"","frontmatter":{"title":"Start"},"headers":[{"level":2,"title":"Install","slug":"install"},{"level":2,"title":"Usage","slug":"usage"},{"level":3,"title":"Full Import","slug":"full-import"},{"level":3,"title":"Manually import","slug":"manually-import"},{"level":3,"title":"On-demand Import","slug":"on-demand-import"},{"level":3,"title":"Volar Support","slug":"volar-support"}],"relativePath":"guide/start.md"}',p={},o=t(`<div align="center"><h3>VueDictionary</h3><span>A template for building Vue components library</span><br><a href="https://soullyoko.github.io/vue-dictionary/">Docs</a></div><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-hidden="true">#</a></h2><div class="language-bash"><pre><code><span class="token function">npm</span> i vue-dictionary
<span class="token comment"># or</span>
<span class="token function">yarn</span> <span class="token function">add</span> vue-dictionary
</code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><h3 id="full-import" tabindex="-1">Full Import <a class="header-anchor" href="#full-import" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&quot;./App.vue&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> VueDictionary <span class="token keyword">from</span> <span class="token string">&quot;vue-dictionary&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&quot;vue-dictionary/lib/style.css&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueDictionary<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// global config</span>
<span class="token comment">// app.use(VueDictionary, { size: &quot;small&quot; });</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="manually-import" tabindex="-1">Manually import <a class="header-anchor" href="#manually-import" aria-hidden="true">#</a></h3><div class="language-html"><pre><code><span class="token comment">&lt;!-- App.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-button</span><span class="token punctuation">&gt;</span></span>VButton<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> VButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue-dictionary&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">import</span> <span class="token string">&quot;vue-dictionary/es/styles/button.css&quot;</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="on-demand-import" tabindex="-1">On-demand Import <a class="header-anchor" href="#on-demand-import" aria-hidden="true">#</a></h3><p>Use unplugin-vue-components to auto import</p><div class="language-bash"><pre><code><span class="token function">yarn</span> <span class="token function">add</span> -D unplugin-vue-components
</code></pre></div><div class="language-ts"><pre><code><span class="token comment">//vite.config.ts</span>
<span class="token keyword">import</span> Components <span class="token keyword">from</span> <span class="token string">&quot;unplugin-vue-components/vite&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> kebabCase <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;unplugin-vue-components&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">LibResolver</span> <span class="token operator">=</span> componentName <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>componentName<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;V&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> partialName <span class="token operator">=</span> <span class="token function">kebabCase</span><span class="token punctuation">(</span>componentName<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> componentName<span class="token punctuation">,</span>
      from<span class="token operator">:</span> <span class="token string">&quot;vue-dictionary&quot;</span><span class="token punctuation">,</span>
      sideEffects<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">vue-dictionary/es/styles/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>partialName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.css</span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// ...</span>
    <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      resolvers<span class="token operator">:</span> <span class="token punctuation">[</span>LibResolver<span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="volar-support" tabindex="-1">Volar Support <a class="header-anchor" href="#volar-support" aria-hidden="true">#</a></h3><p>Add the global component type definition for <code>Volar</code></p><div class="language-json"><pre><code><span class="token comment">// tsconfig.json</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;vue-dictionary/global&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,15),e=[o];function c(l,u,i,r,k,d){return s(),a("div",null,e)}var h=n(p,[["render",c]]);export{g as __pageData,h as default};
