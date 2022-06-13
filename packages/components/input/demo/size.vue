<template>
  <v-input v-model="value" placeholder="Input Something" size="small"></v-input>
  <v-input v-model="value" placeholder="Input Something"></v-input>
  <v-input v-model="value" placeholder="Input Something" size="large"></v-input>
</template>

<script setup lang="ts">
import { ref } from "vue-demi";

const value = ref("");
</script>
