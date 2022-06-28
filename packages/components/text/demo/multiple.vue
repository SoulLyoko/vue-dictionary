<template>
  <dict-text v-model="value" :data="dictData" multile></dict-text>
</template>

<script setup lang="ts">
import { ref } from "vue-demi";

const value = ref(["1", "2"]);
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
