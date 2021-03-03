<template>
  <el-radio-group v-bind="$attrs" v-on="$listeners" v-model="model">
    <el-radio-button v-bind="item" :label="item.value" v-for="item in $parent.options" :key="item.value">
      {{ item.label }}
    </el-radio-button>
  </el-radio-group>
</template>

<script>
export default {
  name: "dict-radio-button",
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
