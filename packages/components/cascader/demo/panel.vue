<template>
  <dict-cascader-panel v-model="value" :data="dictData"></dict-cascader-panel>
</template>

<script setup lang="ts">
import { ref } from "vue-demi";

const value = ref("");
const dictData = [
  {
    label: "fruits",
    children: [
      { label: "apple", value: "1" },
      { label: "banana", value: "2" },
      { label: "cherry", value: "3" }
    ]
  },
  {
    label: "vegetables",
    children: [
      { label: "avocado", value: "3" },
      { label: "bean", value: "4" },
      { label: "carrot", value: "5" }
    ]
  }
];
</script>
