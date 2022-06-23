import type { PropTypes, EmitFn } from "~/types";

import { defineComponent } from "vue-demi";
import { pick } from "lodash-unified";

import { basicProps, buttonBorderProps, basicEmits, useListeners } from "~/constants";
import { h, dynamicComponent } from "~/utils";

export type RadioProps = PropTypes<typeof radioProps>;
export type RadioEmits = typeof radioEmits;
export type RadioEmitFn = EmitFn<RadioEmits>;
export type RadioInstance = InstanceType<typeof DictRadio>;

export const radioProps = { ...basicProps, ...buttonBorderProps };
export const radioEmits = basicEmits;

export const DictRadio = defineComponent({
  name: "DictRadio",
  props: radioProps,
  emits: radioEmits,
  setup(props, { emit, attrs }) {
    const ElRadioGroup = dynamicComponent("el-radio-group");
    const ElRadio = dynamicComponent("el-radio");
    const ElRadioButton = dynamicComponent("el-radio-button");

    return () =>
      h(
        ElRadioGroup,
        {
          props: { ...pick(props, "value", "modelValue"), ...attrs },
          attrs: { ref: "radioRef" },
          on: useListeners(emit, radioEmits)
        },
        () =>
          props.data?.map(item =>
            h(
              props.button ? ElRadioButton : ElRadio,
              {
                props: { label: item.value, border: props.border, ...item }
              },
              () => item.label
            )
          )
      );
  }
});
