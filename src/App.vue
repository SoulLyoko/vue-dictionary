<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h3 v-if="userName">
      Hi,{{ userName }}!
      <br />
      <VButton @click="onBack">Back</VButton>
    </h3>
    <div v-else>
      <VInput v-model="inputValue" placeholder="Input your name"></VInput>
      <VButton type="primary" @click="onConfirm">Confirm</VButton>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue-demi";

export default defineComponent({
  name: "App",
  setup() {
    const inputValue = ref("");
    const userName = ref("");

    function onConfirm() {
      if (!inputValue.value) {
        return alert("Please enter your name");
      }
      userName.value = inputValue.value;
    }
    function onBack() {
      userName.value = "";
    }

    return {
      inputValue,
      userName,
      onConfirm,
      onBack
    };
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
