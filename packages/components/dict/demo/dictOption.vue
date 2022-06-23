<template>
  <v-dict v-model="value" :data="dictDataPromise" :option="dictOption"></v-dict>
</template>

<script setup lang="ts">
import { ref } from "vue-demi";

const value = ref("");
const dictOption = {
  label: "title",
  value: "id",
  res: "res"
};
const dictDataPromise = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { title: "apple", id: "1" },
        { title: "banana", id: "2" },
        { title: "cherry", id: "3" }
      ]);
    }, 1000);
  });
};
</script>
