<div align="center">
<h3>VueDictionary</h3>
<span>一个后台管理系统通用的字典数据组件</span> 
<br>
<a  href="https://soullyoko.github.io/vue-dictionary/">文档</a>
</div>

## 安装

```bash
npm i vue-dictionary
# or
yarn add vue-dictionary
```

## 使用

### 全部引入

```ts
import { createApp } from "vue";
import App from "./App.vue";
import VueDictionary from "vue-dictionary";

const app = createApp(App);

// global config
const getDict = (type: string) => axios.get("/api/dict/" + type);
app.use(VueDictionary, {
  label: "title",
  value: "id",
  children: "child",
  request: getDict,
  res: "res.data"
});

app.mount("#app");
```

### 手动引入

```html
<!-- App.vue -->
<template>
  <v-dict type="select" :data="[]"></v-dict>
  <!-- Same As -->
  <dict-select :data="[]"></dict-select>
</template>
<script setup>
  import { VDict, DictSelect } from "vue-dictionary";
</script>
```

### Volar 支持

在 `tsconfig.json` 中为 `Volar` 添加类型定义

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["vue-dictionary/global"]
  }
}
```
