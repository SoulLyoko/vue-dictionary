<template>
  <v-input v-model="value" placeholder="Input Text"></v-input>
  <v-input v-model="value" type="password" placeholder="Input Password"></v-input>
  <v-input v-model="value" type="number" placeholder="Input Number"></v-input>
</template>

<script setup lang="ts">
import { ref } from "vue-demi";

const value = ref("");
</script>
