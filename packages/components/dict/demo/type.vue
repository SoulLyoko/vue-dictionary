<template>
  <v-dict v-model="type" type="radio" :data="typeDict" button @change="typeChange"></v-dict>
  <br />
  <br />
  <v-dict v-model="value" :type="type" :data="dictData"></v-dict>
</template>

<script setup lang="ts">
import type { DictValue } from "~/types";

import { ref } from "vue-demi";

const value = ref<string | string[]>("1");
const type = ref("select" as const);
const dictData = [
  { label: "apple", value: "1" },
  { label: "banana", value: "2" },
  { label: "cherry", value: "3" }
];

const typeDict = [
  { label: "select", value: "select" },
  { label: "radio", value: "radio" },
  { label: "checkbox", value: "checkbox" },
  { label: "switch", value: "switch" },
  { label: "cascader", value: "cascader" },
  { label: "tree-select", value: "tree-select" },
  { label: "text", value: "text" }
];

function typeChange(val: DictValue) {
  if (val === "text") {
    value.value = ["1", "2"];
  } else {
    value.value = val === "checkbox" ? ["1", "2"] : "1";
  }
}
</script>
