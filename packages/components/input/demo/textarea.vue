<template>
  <v-input v-model="value" type="textarea" placeholder="Input Textarea"></v-input>
  <v-input v-model="value" type="textarea" rows="3" placeholder="Input Textarea"></v-input>
</template>

<script setup lang="ts">
import { ref } from "vue-demi";

const value = ref("");
</script>
