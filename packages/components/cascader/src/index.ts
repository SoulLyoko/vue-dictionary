import type { PropTypes, EmitFn } from "~/types";

import { defineComponent } from "vue-demi";

import { basicProps, basicEmits, selectRestEmits, cascaderRestEmits, useListeners } from "~/constants";
import { h, dynamicComponent } from "~/utils";
import { useDict } from "~/composables";

export type CascaderProps = PropTypes<typeof cascaderProps>;
export type CascaderEmits = typeof cascaderEmits;
export type CascaderEmitFn = EmitFn<CascaderEmits>;
export type CascaderInstance = InstanceType<typeof DictCascader>;

export const cascaderProps = basicProps;
export const cascaderEmits = { ...basicEmits, ...selectRestEmits, ...cascaderRestEmits };

export const DictCascader = defineComponent({
  name: "DictCascader",
  props: cascaderProps,
  emits: cascaderEmits,
  setup(props, { emit, attrs }) {
    const ElCascader = dynamicComponent("el-cascader");

    const { data } = useDict(props.data, props.option, props.cache);

    return () =>
      h(ElCascader, {
        props: {
          options: data.value,
          ...props,
          ...attrs
        },
        attrs: { ref: "cascaderRef" },
        on: useListeners(emit, cascaderEmits)
      });
  }
});
