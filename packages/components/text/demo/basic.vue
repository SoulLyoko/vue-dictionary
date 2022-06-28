<template>
  <dict-text v-model="value" :data="dictData"></dict-text>
</template>

<script setup lang="ts">
import { ref } from "vue-demi";

const value = ref("1");
const dictData = [
  { label: "apple", value: "1" },
  { label: "banana", value: "2" },
  { label: "cherry", value: "3" }
];
</script>
