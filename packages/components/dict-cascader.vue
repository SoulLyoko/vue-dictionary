<template>
  <el-cascader
    v-bind="$attrs"
    v-on="$listeners"
    :options="$parent.options"
    :props="{ ...($attrs.props || {}), emitPath: false }"
  ></el-cascader>
</template>

<script>
export default {
  name: "dict-cascader",
  data() {
    return {};
  }
};
</script>
