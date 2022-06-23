<template>
  <dict-switch v-model="value" :data="dictData" disabled></dict-switch>
</template>

<script setup lang="ts">
import { ref } from "vue-demi";

const value = ref("");
const dictData = [
  { label: "no", value: "1" },
  { label: "yes", value: "2" }
];
</script>
