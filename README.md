# vue-dictionary

## 安装

### npm 安装

```sh
npm i vue-dictionary
或
yarn add vue-dictionary
```

### cdn 使用

```html
<script src="https://unpkg.com/vue-dictionary/lib/vue-dictionary.umd.min.js"></script>
```

## 快速上手

- 可以在全局引入时传入字典配置，也可以在使用组件时传入单独的字典配置来覆盖全局配置

### 全局引入

- 组件基于 element-ui，需要先引入 element 组件库

```js
import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VDict from "../packages/index.js";

Vue.config.productionTip = false;

const getDict = type => {
  return axios.get("http://jsonplaceholder.typicode.com/posts/" + type + "/comments");
};

Vue.use(ElementUI);
Vue.use(VDict, {
  request: getDict,
  dataPath: "res.data",
  label: "name",
  value: "id"
});

new Vue({
  render: h => h(App)
}).$mount("#app");
```

## 示例

- [演示](https://soullyoko.github.io/vue-dictionary/)
  ![example](https://github.com/SoulLyoko/vue-dictionary/blob/master/example.png?raw=true)

<details>

  <summary>点击查看代码</summary>

```html
<template>
  <div id="app">
    <div>
      <div class="label">select:</div>
      <v-dict v-model="dictValue" type="select" code="1"></v-dict>
    </div>
    <div>
      <div class="label">multiple select:</div>
      <v-dict v-model="dictArr" type="select" code="1" multiple style="width:500px"></v-dict>
    </div>
    <div>
      <div class="label">radio:</div>
      <v-dict v-model="dictValue" type="radio" code="1"></v-dict>
    </div>
    <div>
      <div class="label">checkbox:</div>
      <v-dict v-model="dictArr" code="1" type="checkbox"></v-dict>
    </div>
    <div>
      <div class="label">cascader:</div>
      <v-dict
        v-model="cascaderValue"
        type="cascader"
        :props="{ checkStrictly: true }"
        :show-all-levels="false"
        :dictData="cascaderDict"
        :dictOption="{ label: 'label', value: 'value' }"
      ></v-dict>
    </div>
    <div>
      <div class="label">text:</div>
      <v-dict v-model="dictValue" code="1" type="text"></v-dict>
    </div>
    <div>
      <div class="label">use dictData:</div>
      <v-dict
        ref="sexdict"
        v-model="customValue"
        type="radio"
        :dictData="customDict"
        :dictOption="{ label: 'label', value: 'value' }"
      ></v-dict>
    </div>
    <div>
      <div class="label">getLabel():</div>
      <button @click="getLabel">{{ label }}</button>
    </div>
    <div>
      <div class="label">slot:</div>
      <v-dict code="1">
        <template #default="{options}">
          <div>
            <div v-for="item in options" :key="item.value">{{ item.value }}.{{ item.label }}</div>
          </div>
        </template>
      </v-dict>
    </div>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        dictValue: 1,
        dictArr: [1, 2],
        cascaderValue: "1-1",
        customValue: 1,
        customDict: [
          { label: "男", value: 1 },
          { label: "女", value: 0 }
        ],
        cascaderDict: [
          {
            label: "level1",
            value: "1",
            children: [
              { label: "level1-1", value: "1-1" },
              { label: "level1-2", value: "1-2" },
              { label: "level1-3", value: "1-3" }
            ]
          },
          {
            label: "level2",
            value: "2",
            children: [
              { label: "level2-1", value: "2-1" },
              { label: "level2-2", value: "2-2" },
              { label: "level2-3", value: "2-3" }
            ]
          }
        ],
        label: "Click To Get Label"
      };
    },
    methods: {
      getLabel() {
        this.label = this.$refs.sexdict.getLabel(1);
      }
    }
  };
</script>

<style>
  #app {
    width: 1200px;
    margin: 100px auto;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .label {
    color: green;
  }
</style>
```

</details>

## Props

- 除了 element 的 select/cascader/radio/checkbox 组件的所有属性外，还增加了以下属性
- type=cascader 中，props 的 emitPath 已被强制设置成 false，所以每个节点必须设置唯一的 key

| 参数       | 说明                                                                                           | 类型   | 可选值     | 默认值 |
| ---------- | ---------------------------------------------------------------------------------------------- | ------ | ---------- | ------ |
| dictOption | 字典的配置，见下方说明                                                                         | Object | -          | -      |
| dictData   | 自定义的字典数据，当传入时，将不发请求                                                         | Array  | -          | -      |
| code       | 发送请求的字典代码                                                                             | String | -          | -      |
| type       | select 下拉选择,cascader 级联,radio(-button) 单选框,checkbox(-button) 多选框,text 文字         | String | -          | select |
| transform  | 多选时是否进行数据值的转换，只有 multiple=true 时生效，使用 join 和 split 的符号进行拼接和分割 | Bolean | true/false | false  |
| join       | transform=true 时数组拼接成字符串的符号。type="text"时,数组拼接成字符串的符号                  | String | -          | ","    |
| split      | transform=true 时字符串分割成数组的符号                                                        | String | -          | ","    |

## Events

| 事件名称 | 说明             | 回调参数 |
| -------- | ---------------- | -------- |
| change   | 选择字典项时触发 | value    |

## Slots

| name    | 说明                                                                                                        |
| ------- | ----------------------------------------------------------------------------------------------------------- |
| default | 使用默认插槽时将不再根据 type 渲染组件，插槽暴露 options 属性：`<template #default="{options}"></template>` |

## DictOption

| 参数     | 说明               | 类型    | 可选值 | 默认值   |
| -------- | ------------------ | ------- | ------ | -------- |
| label    | 字典的名称属性值   | String  | -      | label    |
| value    | 字典的值属性值     | String  | -      | value    |
| children | 字典的子属性值     | String  | -      | children |
| request  | 字典的请求函数     | Promise | -      | null     |
| dataPath | 请求返回的数据格式 | String  | -      | res.data |

## Method

| name     | 说明     | 参数                                                                   |
| -------- | -------- | ---------------------------------------------------------------------- |
| getLabel | 获取标题 | (value:String//值, options:Array//字典数组, join:String = ","//分隔符) |
| flatTree | 树扁平化 | (tree:Array//树数组, childrenKey:String = "children"//树子数组的 key)  |
