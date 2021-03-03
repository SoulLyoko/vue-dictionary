<template>
  <span>{{ this.selectedLabel }}</span>
</template>

<script>
function flatTree(tree, childrenKey = "children") {
  return tree
    .map(item => {
      if (item[childrenKey]?.length) {
        return [item, flatTree(item[childrenKey])];
      } else {
        return item;
      }
    })
    .flat(Infinity);
}

export default {
  name: "dict-text",
  data() {
    return {};
  },
  computed: {
    selectedLabel() {
      const { value } = this.$attrs;
      const { join, options } = this.$parent;
      if (Array.isArray(value)) {
        return (
          flatTree(options)
            .filter(item => value.some(val => val === item.value))
            .map(item => item.label)
            .join(join) || value
        );
      } else {
        return flatTree(options).find(item => item.value === value)?.label || value;
      }
    }
  }
};
</script>

<style lang="" scoped></style>
