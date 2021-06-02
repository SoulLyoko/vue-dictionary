<template>
  <span>{{ this.selectedLabel }}</span>
</template>

<script>
import { getLabel } from "../util";

export default {
  name: "dict-text",
  data() {
    return {};
  },
  computed: {
    selectedLabel() {
      const { value } = this.$attrs;
      const { join, options } = this.$parent;
      return getLabel(value, options, join);
    }
  }
};
</script>
