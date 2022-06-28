import{d,r as g,a as u,o as k,c as v,b,e as n,f as l,w as i,g as a,h as m}from"./app.68553b85.js";const _=d({__name:"basic",setup(r){const s=g(""),e=[{label:"fruits",value:"fruits",children:[{label:"apple",value:"1"},{label:"banana",value:"2"},{label:"cherry",value:"3"}]},{label:"vegetables",value:"vegetables",children:[{label:"avocado",value:"4"},{label:"bean",value:"5"},{label:"carrot",value:"6"}]}];return(o,t)=>{const c=u("dict-tree-select");return k(),v(c,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=p=>s.value=p),data:e},null,8,["modelValue"])}}}),h=d({__name:"disabled",setup(r){const s=g([]),e=[{label:"fruits",value:"fruits",children:[{label:"apple",value:"1"},{label:"banana",value:"2"},{label:"cherry",value:"3"}]},{label:"vegetables",value:"vegetables",children:[{label:"avocado",value:"4"},{label:"bean",value:"5"},{label:"carrot",value:"6"}]}];return(o,t)=>{const c=u("dict-tree-select");return k(),v(c,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=p=>s.value=p),data:e},null,8,["modelValue"])}}}),f=d({__name:"multiple",setup(r){const s=g([]),e=[{label:"fruits",value:"fruits",children:[{label:"apple",value:"1"},{label:"banana",value:"2"},{label:"cherry",value:"3"}]},{label:"vegetables",value:"vegetables",children:[{label:"avocado",value:"4"},{label:"bean",value:"5"},{label:"carrot",value:"6"}]}];return(o,t)=>{const c=u("dict-tree-select");return k(),v(c,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=p=>s.value=p),data:e,multiple:"","show-checkbox":"","check-strictly":!0},null,8,["modelValue"])}}}),y=d({__name:"filterable",setup(r){const s=g([]),e=[{label:"fruits",value:"fruits",children:[{label:"apple",value:"1"},{label:"banana",value:"2"},{label:"cherry",value:"3"}]},{label:"vegetables",value:"vegetables",children:[{label:"avocado",value:"4"},{label:"bean",value:"5"},{label:"carrot",value:"6"}]}];return(o,t)=>{const c=u("dict-tree-select");return k(),v(c,{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=p=>s.value=p),data:e,filterable:""},null,8,["modelValue"])}}}),w=n("h1",{id:"treeselect",tabindex:"-1"},[a("TreeSelect "),n("a",{class:"header-anchor",href:"#treeselect","aria-hidden":"true"},"#")],-1),x=n("h2",{id:"basic",tabindex:"-1"},[a("Basic "),n("a",{class:"header-anchor",href:"#basic","aria-hidden":"true"},"#")],-1),V=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("dict-tree-select")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dictData"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("dict-tree-select")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"setup"),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"vue-demi"'),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(" dictData "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"fruits"'),n("span",{class:"token punctuation"},","),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"fruits"'),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"apple"'),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"1"'),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"banana"'),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"2"'),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"cherry"'),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"3"'),a(),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"]"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"vegetables"'),n("span",{class:"token punctuation"},","),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"vegetables"'),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"avocado"'),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"4"'),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"bean"'),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"5"'),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"carrot"'),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"6"'),a(),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"]"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),D=n("h2",{id:"disabled",tabindex:"-1"},[a("Disabled "),n("a",{class:"header-anchor",href:"#disabled","aria-hidden":"true"},"#")],-1),q=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("dict-tree-select")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dictData"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("dict-tree-select")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"setup"),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"vue-demi"'),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(" dictData "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"fruits"'),n("span",{class:"token punctuation"},","),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"fruits"'),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"apple"'),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"1"'),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"banana"'),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"2"'),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"cherry"'),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"3"'),a(),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"]"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"vegetables"'),n("span",{class:"token punctuation"},","),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"vegetables"'),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"avocado"'),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"4"'),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"bean"'),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"5"'),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"carrot"'),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"6"'),a(),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"]"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),T=n("h2",{id:"multiple",tabindex:"-1"},[a("Multiple "),n("a",{class:"header-anchor",href:"#multiple","aria-hidden":"true"},"#")],-1),B=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("dict-tree-select")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dictData"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"multiple"),a(),n("span",{class:"token attr-name"},"show-checkbox"),a(),n("span",{class:"token attr-name"},":check-strictly"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("dict-tree-select")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"setup"),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"vue-demi"'),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(" dictData "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"fruits"'),n("span",{class:"token punctuation"},","),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"fruits"'),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"apple"'),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"1"'),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"banana"'),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"2"'),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"cherry"'),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"3"'),a(),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"]"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"vegetables"'),n("span",{class:"token punctuation"},","),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"vegetables"'),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"avocado"'),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"4"'),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"bean"'),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"5"'),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"carrot"'),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"6"'),a(),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"]"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),C=n("h2",{id:"filterable",tabindex:"-1"},[a("Filterable "),n("a",{class:"header-anchor",href:"#filterable","aria-hidden":"true"},"#")],-1),N=n("div",{class:"language-vue"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("dict-tree-select")]),a(),n("span",{class:"token attr-name"},"v-model"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("value"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":data"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("dictData"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"filterable"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("dict-tree-select")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"setup"),a(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" ref "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},'"vue-demi"'),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" value "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(" dictData "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"fruits"'),n("span",{class:"token punctuation"},","),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"fruits"'),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"apple"'),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"1"'),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"banana"'),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"2"'),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"cherry"'),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"3"'),a(),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"]"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"vegetables"'),n("span",{class:"token punctuation"},","),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"vegetables"'),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"avocado"'),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"4"'),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"bean"'),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"5"'),a(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"{"),a(" label"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"carrot"'),n("span",{class:"token punctuation"},","),a(" value"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},'"6"'),a(),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"]"),a(`
  `),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),S=m('<h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><p>\u652F\u6301 el-tree-select \u6240\u6709\u53C2\u6570\u548C\u4E8B\u4EF6(\u4EC5\u652F\u6301 element-plus. element-ui \u6CA1\u6709 tree-select \u7EC4\u4EF6)</p><ul><li><a href="https://element-plus.gitee.io/zh-CN/component/tree-select.html#treeselect-%E5%B1%9E%E6%80%A7" target="_blank" rel="noopener noreferrer">element-plus#tree-select</a></li></ul><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u7ED1\u5B9A\u503C</td><td>string / number / array</td><td></td><td></td></tr><tr><td>data</td><td>\u5B57\u5178\u6570\u636E</td><td>array</td><td>-</td><td>-</td></tr></tbody></table>',4),P='{"title":"TreeSelect","description":"","frontmatter":{},"headers":[{"level":2,"title":"Basic","slug":"basic"},{"level":2,"title":"Disabled","slug":"disabled"},{"level":2,"title":"Multiple","slug":"multiple"},{"level":2,"title":"Filterable","slug":"filterable"},{"level":2,"title":"Props","slug":"props"}],"relativePath":"components/tree-select/demo/index.md"}',j={},A=Object.assign(j,{__name:"index",setup(r){return(s,e)=>{const o=u("code-details");return k(),b("div",null,[w,x,n("p",null,[l(_)]),l(o,null,{default:i(()=>[V]),_:1}),D,n("p",null,[l(h)]),l(o,null,{default:i(()=>[q]),_:1}),T,n("p",null,[l(f)]),l(o,null,{default:i(()=>[B]),_:1}),C,n("p",null,[l(y)]),l(o,null,{default:i(()=>[N]),_:1}),S])}}});export{P as __pageData,A as default};
