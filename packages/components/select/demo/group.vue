<template>
  <dict-select v-model="value" :data="dictData"></dict-select>
</template>

<script setup lang="ts">
import { ref } from "vue-demi";

const value = ref("");
const dictData = [
  {
    label: "fruits",
    value: "fruits",
    children: [
      { label: "apple", value: "1" },
      { label: "banana", value: "2" },
      { label: "cherry", value: "3" }
    ]
  },
  {
    label: "vegetables",
    value: "vegetables",
    children: [
      { label: "avocado", value: "4" },
      { label: "bean", value: "5" },
      { label: "carrot", value: "6" }
    ]
  }
];
</script>
