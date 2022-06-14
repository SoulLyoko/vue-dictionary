<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <br />
    <v-dict v-model="dictValue" type="select" :data="dictDataArray" cache="test1"></v-dict>
    <br />
    <v-dict v-model="dictValue" type="radio" :data="dictDataArray" cache="test1"></v-dict>
    <br />
    <v-dict v-model="dictValue" button type="radio" :data="dictDataArray" cache="test1"></v-dict>
    <br />
    <v-dict v-model="dictValue" type="text" :data="dictDataArray" cache="test1"></v-dict>
    <br />
    <br />
    <v-dict v-model="dictValues" type="select" multiple :data="dictDataPromiseFunction" cache="test2"></v-dict>
    <br />
    <v-dict v-model="dictValues" type="checkbox" :data="dictDataPromiseFunction" cache="test2"></v-dict>
    <br />
    <v-dict v-model="dictValues" button type="checkbox" :data="dictDataPromiseFunction" cache="test2"></v-dict>
    <br />
    <v-dict v-model="dictValues" type="text" :data="dictDataPromiseFunction" cache="test2"></v-dict>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue-demi";

export default defineComponent({
  name: "App",
  setup() {
    const dictValue = ref("");
    const dictValues = ref([]);
    const dictDataArray = [
      { label: "1", value: "1" },
      { label: "2", value: "2" }
    ];
    const dictDataPromiseFunction = () => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({ data: dictDataArray });
        }, 1000);
      });
    };

    return { dictValue, dictValues, dictDataArray, dictDataPromiseFunction };
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
