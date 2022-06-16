import type { SetupContext, ExtractPropTypes } from "vue-demi";

import { defineComponent } from "vue-demi";

import { basicProps, basicEmits, selectRestEmits, useListeners } from "~/constants";
import { h, dynamicComponent } from "~/utils";
import { useDict } from "~/composables";

export type SelectProps = ExtractPropTypes<typeof selectProps>;
export type SelectEmits = typeof selectEmits;
export type SelectEmitFn = SetupContext<SelectEmits>["emit"];
export type SelectInstance = InstanceType<typeof VDictSelect>;

export const selectProps = basicProps;
export const selectEmits = { ...basicEmits, ...selectRestEmits };

export const VDictSelect = defineComponent({
  name: "VDictSelect",
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
          on: useListeners(emit, selectEmits)
        },
        () => data.value?.map(item => h(ElOption, { props: item }))
      );
  }
});
