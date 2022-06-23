<template>
  <dict-switch v-model="value" :data="dictData" border></dict-switch>
</template>

<script setup lang="ts">
import { ref } from "vue-demi";

const value = ref("");
const dictData = [
  { label: "no", value: "1", color: "red" },
  { label: "yes", value: "2", color: "green" }
];
</script>
