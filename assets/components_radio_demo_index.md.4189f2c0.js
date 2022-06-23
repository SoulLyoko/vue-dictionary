import{d,r as g,a as u,o as i,c as _,b as m,e as a,f as c,w as k,g as n,h as v}from"./app.b74653d2.js";const b=d({__name:"basic",setup(r){const s=g(""),e=[{label:"apple",value:"1"},{label:"banana",value:"2"},{label:"cherry",value:"3"}];return(o,t)=>{const p=u("dict-radio");return i(),_(p,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=l=>s.value=l),data:e},null,8,["modelValue"])}}}),h=d({__name:"disabled",setup(r){const s=g(""),e=[{label:"apple",value:"1",disabled:!0},{label:"banana",value:"2"},{label:"cherry",value:"3"}];return(o,t)=>{const p=u("dict-radio");return i(),_(p,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=l=>s.value=l),data:e},null,8,["modelValue"])}}}),f=d({__name:"buttonType",setup(r){const s=g(""),e=[{label:"apple",value:"1"},{label:"banana",value:"2"},{label:"cherry",value:"3"}];return(o,t)=>{const p=u("dict-radio");return i(),_(p,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=l=>s.value=l),data:e,button:""},null,8,["modelValue"])}}}),y=d({__name:"border",setup(r){const s=g(""),e=[{label:"apple",value:"1"},{label:"banana",value:"2"},{label:"cherry",value:"3"}];return(o,t)=>{const p=u("dict-radio");return i(),_(p,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=l=>s.value=l),data:e,border:""},null,8,["modelValue"])}}}),w=a("h1",{id:"radio",tabindex:"-1"},[n("Radio "),a("a",{class:"header-anchor",href:"#radio","aria-hidden":"true"},"#")],-1),V=a("h2",{id:"basic",tabindex:"-1"},[n("Basic "),a("a",{class:"header-anchor",href:"#basic","aria-hidden":"true"},"#")],-1),x=a("div",{class:"language-vue"},[a("pre",null,[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("dict-radio")]),n(),a("span",{class:"token attr-name"},"v-model"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("value"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},":data"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("dictData"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("dict-radio")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`

`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("script")]),n(),a("span",{class:"token attr-name"},"setup"),n(),a("span",{class:"token attr-name"},"lang"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("ts"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"},[a("span",{class:"token language-javascript"},[n(`
`),a("span",{class:"token keyword"},"import"),n(),a("span",{class:"token punctuation"},"{"),n(" ref "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},'"vue-demi"'),a("span",{class:"token punctuation"},";"),n(`

`),a("span",{class:"token keyword"},"const"),n(" value "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"ref"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},'""'),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),n(`
`),a("span",{class:"token keyword"},"const"),n(" dictData "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token punctuation"},"["),n(`
  `),a("span",{class:"token punctuation"},"{"),n(" label"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"apple"'),a("span",{class:"token punctuation"},","),n(" value"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"1"'),n(),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),n(`
  `),a("span",{class:"token punctuation"},"{"),n(" label"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"banana"'),a("span",{class:"token punctuation"},","),n(" value"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"2"'),n(),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),n(`
  `),a("span",{class:"token punctuation"},"{"),n(" label"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"cherry"'),a("span",{class:"token punctuation"},","),n(" value"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"3"'),n(),a("span",{class:"token punctuation"},"}"),n(`
`),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},";"),n(`
`)])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("script")]),a("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),D=a("h2",{id:"disabled",tabindex:"-1"},[n("Disabled "),a("a",{class:"header-anchor",href:"#disabled","aria-hidden":"true"},"#")],-1),q=a("div",{class:"language-vue"},[a("pre",null,[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("dict-radio")]),n(),a("span",{class:"token attr-name"},"v-model"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("value"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},":data"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("dictData"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("dict-radio")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`

`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("script")]),n(),a("span",{class:"token attr-name"},"setup"),n(),a("span",{class:"token attr-name"},"lang"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("ts"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"},[a("span",{class:"token language-javascript"},[n(`
`),a("span",{class:"token keyword"},"import"),n(),a("span",{class:"token punctuation"},"{"),n(" ref "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},'"vue-demi"'),a("span",{class:"token punctuation"},";"),n(`

`),a("span",{class:"token keyword"},"const"),n(" value "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"ref"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},'""'),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),n(`
`),a("span",{class:"token keyword"},"const"),n(" dictData "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token punctuation"},"["),n(`
  `),a("span",{class:"token punctuation"},"{"),n(" label"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"apple"'),a("span",{class:"token punctuation"},","),n(" value"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"1"'),a("span",{class:"token punctuation"},","),n(" disabled"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token boolean"},"true"),n(),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),n(`
  `),a("span",{class:"token punctuation"},"{"),n(" label"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"banana"'),a("span",{class:"token punctuation"},","),n(" value"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"2"'),n(),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),n(`
  `),a("span",{class:"token punctuation"},"{"),n(" label"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"cherry"'),a("span",{class:"token punctuation"},","),n(" value"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"3"'),n(),a("span",{class:"token punctuation"},"}"),n(`
`),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},";"),n(`
`)])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("script")]),a("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),B=a("h2",{id:"button",tabindex:"-1"},[n("Button "),a("a",{class:"header-anchor",href:"#button","aria-hidden":"true"},"#")],-1),T=a("div",{class:"language-vue"},[a("pre",null,[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("dict-radio")]),n(),a("span",{class:"token attr-name"},"v-model"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("value"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},":data"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("dictData"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"button"),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("dict-radio")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`

`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("script")]),n(),a("span",{class:"token attr-name"},"setup"),n(),a("span",{class:"token attr-name"},"lang"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("ts"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"},[a("span",{class:"token language-javascript"},[n(`
`),a("span",{class:"token keyword"},"import"),n(),a("span",{class:"token punctuation"},"{"),n(" ref "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},'"vue-demi"'),a("span",{class:"token punctuation"},";"),n(`

`),a("span",{class:"token keyword"},"const"),n(" value "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"ref"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},'""'),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),n(`
`),a("span",{class:"token keyword"},"const"),n(" dictData "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token punctuation"},"["),n(`
  `),a("span",{class:"token punctuation"},"{"),n(" label"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"apple"'),a("span",{class:"token punctuation"},","),n(" value"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"1"'),n(),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),n(`
  `),a("span",{class:"token punctuation"},"{"),n(" label"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"banana"'),a("span",{class:"token punctuation"},","),n(" value"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"2"'),n(),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),n(`
  `),a("span",{class:"token punctuation"},"{"),n(" label"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"cherry"'),a("span",{class:"token punctuation"},","),n(" value"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"3"'),n(),a("span",{class:"token punctuation"},"}"),n(`
`),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},";"),n(`
`)])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("script")]),a("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),C=a("h2",{id:"border",tabindex:"-1"},[n("Border "),a("a",{class:"header-anchor",href:"#border","aria-hidden":"true"},"#")],-1),N=a("div",{class:"language-vue"},[a("pre",null,[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("dict-radio")]),n(),a("span",{class:"token attr-name"},"v-model"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("value"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},":data"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("dictData"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"border"),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("dict-radio")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`

`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("script")]),n(),a("span",{class:"token attr-name"},"setup"),n(),a("span",{class:"token attr-name"},"lang"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("ts"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"},[a("span",{class:"token language-javascript"},[n(`
`),a("span",{class:"token keyword"},"import"),n(),a("span",{class:"token punctuation"},"{"),n(" ref "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},'"vue-demi"'),a("span",{class:"token punctuation"},";"),n(`

`),a("span",{class:"token keyword"},"const"),n(" value "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"ref"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},'""'),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),n(`
`),a("span",{class:"token keyword"},"const"),n(" dictData "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token punctuation"},"["),n(`
  `),a("span",{class:"token punctuation"},"{"),n(" label"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"apple"'),a("span",{class:"token punctuation"},","),n(" value"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"1"'),n(),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),n(`
  `),a("span",{class:"token punctuation"},"{"),n(" label"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"banana"'),a("span",{class:"token punctuation"},","),n(" value"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"2"'),n(),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),n(`
  `),a("span",{class:"token punctuation"},"{"),n(" label"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"cherry"'),a("span",{class:"token punctuation"},","),n(" value"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"3"'),n(),a("span",{class:"token punctuation"},"}"),n(`
`),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},";"),n(`
`)])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("script")]),a("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),P=v('<h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><p>\u652F\u6301 el-radio-group \u6240\u6709\u53C2\u6570\u548C\u4E8B\u4EF6</p><ul><li><a href="https://element.eleme.cn/#/zh-CN/component/radio#radio-group-attributes" target="_blank" rel="noopener noreferrer">element-ui#radio</a></li><li><a href="https://element-plus.gitee.io/zh-CN/component/radio.html#radio-group-%E5%B1%9E%E6%80%A7" target="_blank" rel="noopener noreferrer">element-plus#radio</a></li></ul><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u7ED1\u5B9A\u503C</td><td>string / number / array</td><td></td><td></td></tr><tr><td>data</td><td>\u5B57\u5178\u6570\u636E\uFF0C\u53EF\u4EE5\u662F\u6570\u7EC4\u6216\u8FD4\u56DE Promise \u7684\u51FD\u6570</td><td>array</td><td>-</td><td>-</td></tr></tbody></table>',4),A='{"title":"Radio","description":"","frontmatter":{},"headers":[{"level":2,"title":"Basic","slug":"basic"},{"level":2,"title":"Disabled","slug":"disabled"},{"level":2,"title":"Button","slug":"button"},{"level":2,"title":"Border","slug":"border"},{"level":2,"title":"Props","slug":"props"}],"relativePath":"components/radio/demo/index.md"}',j={},S=Object.assign(j,{__name:"index",setup(r){return(s,e)=>{const o=u("code-details");return i(),m("div",null,[w,V,a("p",null,[c(b)]),c(o,null,{default:k(()=>[x]),_:1}),D,a("p",null,[c(h)]),c(o,null,{default:k(()=>[q]),_:1}),B,a("p",null,[c(f)]),c(o,null,{default:k(()=>[T]),_:1}),C,a("p",null,[c(y)]),c(o,null,{default:k(()=>[N]),_:1}),P])}}});export{A as __pageData,S as default};
