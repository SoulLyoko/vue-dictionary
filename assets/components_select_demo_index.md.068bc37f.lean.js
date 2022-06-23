import{d,r as g,a as u,o as k,c as v,b as m,f as a,e as c,w as r,g as n,h as _}from"./app.5caac3ef.js";const b=d({__name:"basic",setup(i){const s=g(""),e=[{label:"apple",value:"1"},{label:"banana",value:"2"},{label:"cherry",value:"3"}];return(o,t)=>{const l=u("dict-select");return k(),v(l,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=p=>s.value=p),data:e},null,8,["modelValue"])}}}),h=d({__name:"disabled",setup(i){const s=g(""),e=[{label:"apple",value:"1",disabled:!0},{label:"banana",value:"2"},{label:"cherry",value:"3"}];return(o,t)=>{const l=u("dict-select");return k(),v(l,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=p=>s.value=p),data:e},null,8,["modelValue"])}}}),f=d({__name:"multiple",setup(i){const s=g([]),e=[{label:"apple",value:"1"},{label:"banana",value:"2"},{label:"cherry",value:"3"}];return(o,t)=>{const l=u("dict-select");return k(),v(l,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=p=>s.value=p),data:e,multiple:""},null,8,["modelValue"])}}}),y=d({__name:"group",setup(i){const s=g(""),e=[{label:"fruits",children:[{label:"apple",value:"1"},{label:"banana",value:"2"},{label:"cherry",value:"3"}]},{label:"vegetables",disabled:!0,children:[{label:"avocado",value:"3"},{label:"bean",value:"4"},{label:"carrot",value:"5"}]}];return(o,t)=>{const l=u("dict-select");return k(),v(l,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=p=>s.value=p),data:e},null,8,["modelValue"])}}}),w=a("h1",{id:"select",tabindex:"-1"},[n("Select "),a("a",{class:"header-anchor",href:"#select","aria-hidden":"true"},"#")],-1),V=a("h2",{id:"basic",tabindex:"-1"},[n("Basic "),a("a",{class:"header-anchor",href:"#basic","aria-hidden":"true"},"#")],-1),x=a("div",{class:"language-vue"},[a("pre",null,[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("dict-select")]),n(),a("span",{class:"token attr-name"},"v-model"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("value"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},":data"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("dictData"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("dict-select")]),a("span",{class:"token punctuation"},">")]),n(`
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
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("dict-select")]),n(),a("span",{class:"token attr-name"},"v-model"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("value"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},":data"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("dictData"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("dict-select")]),a("span",{class:"token punctuation"},">")]),n(`
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
`)])])],-1),B=a("h2",{id:"multiple",tabindex:"-1"},[n("Multiple "),a("a",{class:"header-anchor",href:"#multiple","aria-hidden":"true"},"#")],-1),C=a("div",{class:"language-vue"},[a("pre",null,[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("dict-select")]),n(),a("span",{class:"token attr-name"},"v-model"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("value"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},":data"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("dictData"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},"multiple"),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("dict-select")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`

`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("script")]),n(),a("span",{class:"token attr-name"},"setup"),n(),a("span",{class:"token attr-name"},"lang"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("ts"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"},[a("span",{class:"token language-javascript"},[n(`
`),a("span",{class:"token keyword"},"import"),n(),a("span",{class:"token punctuation"},"{"),n(" ref "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},'"vue-demi"'),a("span",{class:"token punctuation"},";"),n(`

`),a("span",{class:"token keyword"},"const"),n(" value "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"ref"),a("span",{class:"token punctuation"},"("),a("span",{class:"token punctuation"},"["),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),n(`
`),a("span",{class:"token keyword"},"const"),n(" dictData "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token punctuation"},"["),n(`
  `),a("span",{class:"token punctuation"},"{"),n(" label"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"apple"'),a("span",{class:"token punctuation"},","),n(" value"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"1"'),n(),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),n(`
  `),a("span",{class:"token punctuation"},"{"),n(" label"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"banana"'),a("span",{class:"token punctuation"},","),n(" value"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"2"'),n(),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),n(`
  `),a("span",{class:"token punctuation"},"{"),n(" label"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"cherry"'),a("span",{class:"token punctuation"},","),n(" value"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"3"'),n(),a("span",{class:"token punctuation"},"}"),n(`
`),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},";"),n(`
`)])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("script")]),a("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),N=a("h2",{id:"group",tabindex:"-1"},[n("Group "),a("a",{class:"header-anchor",href:"#group","aria-hidden":"true"},"#")],-1),T=a("div",{class:"language-vue"},[a("pre",null,[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`
  `),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("dict-select")]),n(),a("span",{class:"token attr-name"},"v-model"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("value"),a("span",{class:"token punctuation"},'"')]),n(),a("span",{class:"token attr-name"},":data"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("dictData"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("dict-select")]),a("span",{class:"token punctuation"},">")]),n(`
`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("template")]),a("span",{class:"token punctuation"},">")]),n(`

`),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),n("script")]),n(),a("span",{class:"token attr-name"},"setup"),n(),a("span",{class:"token attr-name"},"lang"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),n("ts"),a("span",{class:"token punctuation"},'"')]),a("span",{class:"token punctuation"},">")]),a("span",{class:"token script"},[a("span",{class:"token language-javascript"},[n(`
`),a("span",{class:"token keyword"},"import"),n(),a("span",{class:"token punctuation"},"{"),n(" ref "),a("span",{class:"token punctuation"},"}"),n(),a("span",{class:"token keyword"},"from"),n(),a("span",{class:"token string"},'"vue-demi"'),a("span",{class:"token punctuation"},";"),n(`

`),a("span",{class:"token keyword"},"const"),n(" value "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token function"},"ref"),a("span",{class:"token punctuation"},"("),a("span",{class:"token string"},'""'),a("span",{class:"token punctuation"},")"),a("span",{class:"token punctuation"},";"),n(`
`),a("span",{class:"token keyword"},"const"),n(" dictData "),a("span",{class:"token operator"},"="),n(),a("span",{class:"token punctuation"},"["),n(`
  `),a("span",{class:"token punctuation"},"{"),n(`
    label`),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"fruits"'),a("span",{class:"token punctuation"},","),n(`
    children`),a("span",{class:"token operator"},":"),n(),a("span",{class:"token punctuation"},"["),n(`
      `),a("span",{class:"token punctuation"},"{"),n(" label"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"apple"'),a("span",{class:"token punctuation"},","),n(" value"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"1"'),n(),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),n(`
      `),a("span",{class:"token punctuation"},"{"),n(" label"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"banana"'),a("span",{class:"token punctuation"},","),n(" value"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"2"'),n(),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),n(`
      `),a("span",{class:"token punctuation"},"{"),n(" label"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"cherry"'),a("span",{class:"token punctuation"},","),n(" value"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"3"'),n(),a("span",{class:"token punctuation"},"}"),n(`
    `),a("span",{class:"token punctuation"},"]"),n(`
  `),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),n(`
  `),a("span",{class:"token punctuation"},"{"),n(`
    label`),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"vegetables"'),a("span",{class:"token punctuation"},","),n(`
    disabled`),a("span",{class:"token operator"},":"),n(),a("span",{class:"token boolean"},"true"),a("span",{class:"token punctuation"},","),n(`
    children`),a("span",{class:"token operator"},":"),n(),a("span",{class:"token punctuation"},"["),n(`
      `),a("span",{class:"token punctuation"},"{"),n(" label"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"avocado"'),a("span",{class:"token punctuation"},","),n(" value"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"3"'),n(),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),n(`
      `),a("span",{class:"token punctuation"},"{"),n(" label"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"bean"'),a("span",{class:"token punctuation"},","),n(" value"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"4"'),n(),a("span",{class:"token punctuation"},"}"),a("span",{class:"token punctuation"},","),n(`
      `),a("span",{class:"token punctuation"},"{"),n(" label"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"carrot"'),a("span",{class:"token punctuation"},","),n(" value"),a("span",{class:"token operator"},":"),n(),a("span",{class:"token string"},'"5"'),n(),a("span",{class:"token punctuation"},"}"),n(`
    `),a("span",{class:"token punctuation"},"]"),n(`
  `),a("span",{class:"token punctuation"},"}"),n(`
`),a("span",{class:"token punctuation"},"]"),a("span",{class:"token punctuation"},";"),n(`
`)])]),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),n("script")]),a("span",{class:"token punctuation"},">")]),n(`
`)])])],-1),P=_("",4),E='{"title":"Select","description":"","frontmatter":{},"headers":[{"level":2,"title":"Basic","slug":"basic"},{"level":2,"title":"Disabled","slug":"disabled"},{"level":2,"title":"Multiple","slug":"multiple"},{"level":2,"title":"Group","slug":"group"},{"level":2,"title":"Props","slug":"props"}],"relativePath":"components/select/demo/index.md"}',S={},A=Object.assign(S,{__name:"index",setup(i){return(s,e)=>{const o=u("code-details");return k(),m("div",null,[w,V,a("p",null,[c(b)]),c(o,null,{default:r(()=>[x]),_:1}),D,a("p",null,[c(h)]),c(o,null,{default:r(()=>[q]),_:1}),B,a("p",null,[c(f)]),c(o,null,{default:r(()=>[C]),_:1}),N,a("p",null,[c(y)]),c(o,null,{default:r(()=>[T]),_:1}),P])}}});export{E as __pageData,A as default};
