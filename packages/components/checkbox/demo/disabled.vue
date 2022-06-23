<template>
  <dict-checkbox v-model="value" :data="dictData"></dict-checkbox>
</template>

<script setup lang="ts">
import { ref } from "vue-demi";

const value = ref([]);
const dictData = [
  { label: "apple", value: "1", disabled: true },
  { label: "banana", value: "2" },
  { label: "cherry", value: "3" }
];
</script>
