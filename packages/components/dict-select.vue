<template>
  <el-select v-bind="$attrs" v-on="$listeners">
    <el-option v-bind="item" v-for="item in $parent.options" :key="item.value"></el-option>
  </el-select>
</template>

<script>
export default {
  name: "dict-select",
  data() {
    return {};
  }
};
</script>
