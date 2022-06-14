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
          { label: "1", value: "1" },
          { label: "2", value: "2" },
          { label: "3", value: "3" }
        ]
      });
    }, 1000);
  });
};
</script>
