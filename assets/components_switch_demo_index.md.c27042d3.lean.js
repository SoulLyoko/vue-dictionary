import{d,r as m,a as u,o as i,c as g,i as v,j as _,b as h,e as n,f as c,w as r,g as a,h as b}from"./app.08059938.js";const w=d({__name:"basic",setup(k){const s=m(""),e=[{label:"no",value:"1"},{label:"yes",value:"2"}];return(o,t)=>{const p=u("dict-switch");return i(),g(p,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=l=>s.value=l),data:e},null,8,["modelValue"])}}}),f=d({__name:"disabled",setup(k){const s=m(""),e=[{label:"no",value:"1"},{label:"yes",value:"2"}];return(o,t)=>{const p=u("dict-switch");return i(),g(p,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=l=>s.value=l),data:e,disabled:""},null,8,["modelValue"])}}}),y=d({__name:"color",setup(k){const s=m(""),e=[{label:"no",value:"1",color:"red"},{label:"yes",value:"2",color:"green"}];return(o,t)=>{const p=u("dict-switch");return i(),g(p,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=l=>s.value=l),data:e,border:""},null,8,["modelValue"])}}}),I=d({__name:"icon",setup(k){const s=m(""),e=[{label:"no",value:"1",icon:v},{label:"yes",value:"2",icon:_}];return(o,t)=>{const p=u("dict-switch");return i(),g(p,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=l=>s.value=l),data:e},null,8,["modelValue"])}}}),V=n("h1",{id:"switch",tabindex:"-1"},[a("Switch "),n("a",{class:"header-anchor",href:"#switch","aria-hidden":"true"},"#")],-1),x=n("h2",{id:"basic",tabindex:"-1"},[a("Basic "),n("a",{class:"header-anchor",href:"#basic","aria-hidden":"true"},"#")],-1),C=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("dict-switch")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dictData"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("dict-switch")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"setup"),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"vue-demi"'),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(" dictData "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"no"'),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"1"'),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"yes"'),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"2"'),a(),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),D=n("h2",{id:"disabled",tabindex:"-1"},[a("Disabled "),n("a",{class:"header-anchor",href:"#disabled","aria-hidden":"true"},"#")],-1),q=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("dict-switch")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dictData"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"disabled"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("dict-switch")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"setup"),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"vue-demi"'),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(" dictData "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"no"'),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"1"'),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"yes"'),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"2"'),a(),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),T=n("h2",{id:"color",tabindex:"-1"},[a("Color "),n("a",{class:"header-anchor",href:"#color","aria-hidden":"true"},"#")],-1),B=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("dict-switch")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dictData"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"border"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("dict-switch")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"setup"),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"vue-demi"'),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(" dictData "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"no"'),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"1"'),n("span",{class:"token punctuation"},","),a(" color"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"red"'),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"yes"'),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"2"'),n("span",{class:"token punctuation"},","),a(" color"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"green"'),a(),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),N=n("h2",{id:"icon",tabindex:"-1"},[a("Icon "),n("a",{class:"header-anchor",href:"#icon","aria-hidden":"true"},"#")],-1),j=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("dict-switch")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dictData"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("dict-switch")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"setup"),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"vue-demi"'),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Check"),n("span",{class:"token punctuation"},","),a(" Close "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"@element-plus/icons-vue"'),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(" dictData "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"no"'),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"1"'),n("span",{class:"token punctuation"},","),a(" icon"),n("span",{class:"token operator"},":"),a(" Close "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"yes"'),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"2"'),n("span",{class:"token punctuation"},","),a(" icon"),n("span",{class:"token operator"},":"),a(" Check "),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// elment-ui"),a(`
`),n("span",{class:"token comment"},"// const dictData = ["),a(`
`),n("span",{class:"token comment"},'//   { label: "no", value: "1", icon: "el-icon-close" },'),a(`
`),n("span",{class:"token comment"},'//   { label: "yes", value: "2", icon: "el-icon-check" }'),a(`
`),n("span",{class:"token comment"},"// ];"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),P=b("",6),A='{"title":"Switch","description":"","frontmatter":{},"headers":[{"level":2,"title":"Basic","slug":"basic"},{"level":2,"title":"Disabled","slug":"disabled"},{"level":2,"title":"Color","slug":"color"},{"level":2,"title":"Icon","slug":"icon"},{"level":2,"title":"Props","slug":"props"}],"relativePath":"components/switch/demo/index.md"}',S={},U=Object.assign(S,{__name:"index",setup(k){return(s,e)=>{const o=u("code-details");return i(),h("div",null,[V,x,n("p",null,[c(w)]),c(o,null,{default:r(()=>[C]),_:1}),D,n("p",null,[c(f)]),c(o,null,{default:r(()=>[q]),_:1}),T,n("p",null,[c(y)]),c(o,null,{default:r(()=>[B]),_:1}),N,n("p",null,[c(I)]),c(o,null,{default:r(()=>[j]),_:1}),P])}}});export{A as __pageData,U as default};