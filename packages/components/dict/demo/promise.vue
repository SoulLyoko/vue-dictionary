<template>
  <v-dict v-model="value" :data="dictDataPromise"></v-dict>
</template>

<script setup lang="ts">
import { ref } from "vue-demi";

const value = ref("");
const dictDataPromise = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: [
          { label: "apple", value: "1" },
          { label: "banana", value: "2" },
          { label: "cherry", value: "3" }
        ]
      });
    }, 1000);
  });
};
</script>
