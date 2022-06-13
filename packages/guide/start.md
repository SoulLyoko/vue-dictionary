---
title: Start
---

<div align="center">
<h3>VueDictionary</h3>
<span>A template for building Vue components library</span> 
<br>
<a  href="https://soullyoko.github.io/vue-dictionary/">Docs</a>
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
// app.use(VueDictionary, { size: "small" });
app.mount("#app");
```

### Manually import

```html
<!-- App.vue -->
<template>
  <v-button>VButton</v-button>
</template>
<script setup>
  import { VButton } from "vue-dictionary";
  import "vue-dictionary/es/styles/button.css";
</script>
```

### On-demand Import

Use unplugin-vue-components to auto import

```bash
yarn add -D unplugin-vue-components
```

```ts
//vite.config.ts
import Components from "unplugin-vue-components/vite";
import { kebabCase } from "unplugin-vue-components";

const LibResolver = componentName => {
  if (componentName.startsWith("V")) {
    const partialName = kebabCase(componentName.slice(1));
    return {
      name: componentName,
      from: "vue-dictionary",
      sideEffects: `vue-dictionary/es/styles/${partialName}.css`
    };
  }
};

export default {
  plugins: [
    // ...
    Components({
      resolvers: [LibResolver]
    })
  ]
};
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
