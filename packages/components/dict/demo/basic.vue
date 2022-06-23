<template>
  <Dict v-model="value" :data="dictData"></Dict>
</template>

<script setup lang="ts">
import { ref } from "vue-demi";

const value = ref("");
const dictData = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" }
];
</script>
