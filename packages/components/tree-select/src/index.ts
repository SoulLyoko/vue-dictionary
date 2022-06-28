import type { PropTypes, EmitFn } from "~/types";

import { defineComponent } from "vue-demi";

import { basicProps, basicEmits, selectRestEmits, useListeners } from "~/constants";
import { h, dynamicComponent } from "~/utils";

export type TreeSelectProps = PropTypes<typeof treeSelectProps>;
export type TreeSelectEmits = typeof treeSelectEmits;
export type TreeSelectEmitFn = EmitFn<TreeSelectEmits>;
export type TreeSelectInstance = InstanceType<typeof DictTreeSelect>;

export const treeSelectProps = basicProps;
export const treeSelectEmits = { ...basicEmits, ...selectRestEmits };

export const DictTreeSelect = defineComponent({
  name: "DictTreeSelect",
  props: treeSelectProps,
  emits: treeSelectEmits,
  setup(props, { emit, attrs }) {
    const ElTreeSelect = dynamicComponent("el-tree-select");

    return () =>
      h(ElTreeSelect, {
        props: { ...props, ...attrs },
        attrs: { ref: "treeSelectRef" },
        on: useListeners(emit, treeSelectEmits)
      });
  }
});
