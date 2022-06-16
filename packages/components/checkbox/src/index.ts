import type { SetupContext, ExtractPropTypes } from "vue-demi";

import { defineComponent } from "vue-demi";

import { basicProps, basicEmits, useListeners } from "~/constants";
import { h, dynamicComponent } from "~/utils";
import { useDict } from "~/composables";

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>;
export type CheckboxEmits = typeof checkboxEmits;
export type CheckboxEmitFn = SetupContext<CheckboxEmits>["emit"];
export type CheckboxInstance = InstanceType<typeof VDictCheckbox>;

export const checkboxProps = { ...basicProps, button: { type: Boolean } };
export const checkboxEmits = basicEmits;

export const VDictCheckbox = defineComponent({
  name: "VDictCheckbox",
  props: checkboxProps,
  emits: checkboxEmits,
  setup(props, { emit, attrs }) {
    const ElCheckboxGroup = dynamicComponent("el-checkbox-group");
    const ElCheckbox = dynamicComponent("el-checkbox");
    const ElCheckboxButton = dynamicComponent("el-checkbox-button");

    const { data } = useDict(props.data, props.option, props.cache);

    return () =>
      h(
        ElCheckboxGroup,
        {
          props: { ...props, ...attrs },
          on: useListeners(emit, checkboxEmits)
        },
        () =>
          data.value?.map(item =>
            h(
              props.button ? ElCheckboxButton : ElCheckbox,
              {
                props: { ...item, label: item.value }
              },
              () => item.label
            )
          )
      );
  }
});