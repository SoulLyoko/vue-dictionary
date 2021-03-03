<template>
  <el-radio-group v-bind="$attrs" v-on="$listeners" v-model="model">
    <el-radio v-bind="item" :label="item.value" v-for="item in $parent.options" :key="item.value">
      {{ item.label }}
    </el-radio>
  </el-radio-group>
</template>

<script>
export default {
  name: "dict-radio",
  data() {
    return {
      model: ""
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
