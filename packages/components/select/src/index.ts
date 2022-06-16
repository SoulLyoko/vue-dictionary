import type { PropTypes, EmitFn } from "~/types";

import { defineComponent } from "vue-demi";

import { basicProps, basicEmits, selectRestEmits, useListeners } from "~/constants";
import { h, dynamicComponent } from "~/utils";
import { useDict } from "~/composables";

export type SelectProps = PropTypes<typeof selectProps>;
export type SelectEmits = typeof selectEmits;
export type SelectEmitFn = EmitFn<SelectEmits>;
export type SelectInstance = InstanceType<typeof DictSelect>;

export const selectProps = basicProps;
export const selectEmits = { ...basicEmits, ...selectRestEmits };

export const DictSelect = defineComponent({
  name: "DictSelect",
  props: selectProps,
  emits: selectEmits,
  setup(props, { emit, attrs }) {
    const ElSelect = dynamicComponent("el-select");
    const ElOption = dynamicComponent("el-option");

    const { data } = useDict(props.data, props.option, props.cache);

    return () =>
      h(
        ElSelect,
        {
          props: { ...props, ...attrs },
          attrs: { ref: "selectRef" },
          on: useListeners(emit, selectEmits)
        },
        () => data.value?.map(item => h(ElOption, { props: item }))
      );
  }
});
