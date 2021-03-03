<template>
  <el-checkbox-group v-bind="$attrs" v-on="$listeners" v-model="model">
    <el-checkbox v-bind="item" :label="item.value" v-for="item in $parent.options" :key="item.value">
      {{ item.label }}
    </el-checkbox>
  </el-checkbox-group>
</template>

<script>
export default {
  name: "dict-checkbox",
  data() {
    return {
      model: []
    };
  },
  watch: {
    $attrs: {
      handler(val) {
        this.model = val.value;
      },
      immediate: true
    }
  }
};
</script>
