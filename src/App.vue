<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <br />
    <Dict v-model="dictValue" type="select" :data="dictDataArray" cache="test1"></Dict>
    <br />
    <Dict v-model="dictValue" type="radio" :data="dictDataArray" cache="test1"></Dict>
    <br />
    <Dict v-model="dictValue" button type="radio" :data="dictDataArray" cache="test1"></Dict>
    <br />
    <Dict v-model="dictValue" type="switch" :data="dictDataArray" cache="test1"></Dict>
    <br />
    <Dict v-model="dictValue" type="text" :data="dictDataArray" cache="test1"></Dict>
    <br />
    <br />
    <Dict v-model="dictValues" type="select" multiple :data="dictDataPromiseFunction" cache="test2"></Dict>
    <br />
    <Dict v-model="dictValues" type="checkbox" :data="dictDataPromiseFunction" cache="test2"></Dict>
    <br />
    <Dict v-model="dictValues" button type="checkbox" :data="dictDataPromiseFunction" cache="test2"></Dict>
    <br />
    <Dict v-model="dictValues" type="text" :data="dictDataPromiseFunction" cache="test2"></Dict>
    <br />
    <Dict v-model="cascaderDataValue" type="cascader" :data="cascaderData" cache="test3"></Dict>
    <br />
    <Dict v-model="cascaderDataValue" type="cascader-panel" :data="cascaderData" cache="test3"></Dict>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue-demi";
// import { Close, Check } from "@element-plus/icons-vue";

export default defineComponent({
  name: "App",
  setup() {
    const dictValue = ref("");
    const dictValues = ref([]);
    const dictDataArray = [
      { label: "1", value: "1", icon: "el-icon-close", color: "red" },
      { label: "2", value: "2", icon: "el-icon-check", color: "green" }
    ];
    const dictDataPromiseFunction = () => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({ data: dictDataArray });
        }, 1000);
      });
    };

    const cascaderDataValue = ref("");
    const cascaderData = [
      {
        label: "1",
        value: "1",
        children: [
          { label: "11", value: "11" },
          { label: "12", value: "12" }
        ]
      },
      {
        label: "2",
        value: "2",
        children: [
          { label: "21", value: "21" },
          { label: "22", value: "22" }
        ]
      }
    ];

    return {
      dictValue,
      dictValues,
      dictDataArray,
      dictDataPromiseFunction,
      cascaderDataValue,
      cascaderData
    };
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
