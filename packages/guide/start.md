---
title: Start
---

<div align="center">
<h3>VueDictionary</h3>
<span>一个后台管理系统通用的字典数据组件</span> 
<br>
<a  href="https://soullyoko.github.io/vue-dictionary/">文档</a>
</div>

## Install

```bash
npm i vue-dictionary
# or
yarn add vue-dictionary
```

## Usage

### Full Import

```ts
import { createApp } from "vue";
import App from "./App.vue";
import VueDictionary from "vue-dictionary";
import "vue-dictionary/lib/style.css";

const app = createApp(App);
app.use(VueDictionary);
// global config
app.use(VueDictionary, { label: "title", value: "id", children: "child", res: "res.data" });
app.mount("#app");
```

### Manually import

```html
<!-- App.vue -->
<template>
  <Dict type="select" :data="[]"></Dict>
  <!-- Same As -->
  <DictSelect :data="[]"></DictSelect>
</template>
<script setup>
  import { Dict, DictSelect } from "vue-dictionary";
  import "vue-dictionary/es/styles/button.css";
</script>
```

### Volar Support

Add the global component type definition for `Volar`

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["vue-dictionary/global"]
  }
}
```
