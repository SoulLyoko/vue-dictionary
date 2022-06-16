import type { PropTypes, EmitFn } from "~/types";

import { defineComponent } from "vue-demi";

import { basicProps, buttonProps, basicEmits, useListeners } from "~/constants";
import { h, dynamicComponent } from "~/utils";
import { useDict } from "~/composables";

export type CheckboxProps = PropTypes<typeof checkboxProps>;
export type CheckboxEmits = typeof checkboxEmits;
export type CheckboxEmitFn = EmitFn<CheckboxEmits>;
export type CheckboxInstance = InstanceType<typeof DictCheckbox>;

export const checkboxProps = { ...basicProps, ...buttonProps };
export const checkboxEmits = basicEmits;

export const DictCheckbox = defineComponent({
  name: "DictCheckbox",
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
          attrs: { ref: "checkboxRef" },
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
