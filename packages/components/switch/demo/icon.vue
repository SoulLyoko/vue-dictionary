<template>
  <dict-switch v-model="value" :data="dictData"></dict-switch>
</template>

<script setup lang="ts">
import { ref } from "vue-demi";
import { Check, Close } from "@element-plus/icons-vue";

const value = ref("");
const dictData = [
  { label: "no", value: "1", icon: Close },
  { label: "yes", value: "2", icon: Check }
];

// elment-ui
// const dictData = [
//   { label: "no", value: "1", icon: "el-icon-close" },
//   { label: "yes", value: "2", icon: "el-icon-check" }
// ];
</script>
