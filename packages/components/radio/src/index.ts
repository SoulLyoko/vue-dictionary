import type { SetupContext, ExtractPropTypes } from "vue-demi";

import { defineComponent } from "vue-demi";

import { basicProps, buttonProps, basicEmits, useListeners } from "~/constants";
import { h, dynamicComponent } from "~/utils";
import { useDict } from "~/composables";

export type RadioProps = ExtractPropTypes<typeof radioProps>;
export type RadioEmits = typeof radioEmits;
export type RadioEmitFn = SetupContext<RadioEmits>["emit"];
export type RadioInstance = InstanceType<typeof DictRadio>;

export const radioProps = { ...basicProps, ...buttonProps };
export const radioEmits = basicEmits;

export const DictRadio = defineComponent({
  name: "DictRadio",
  props: radioProps,
  emits: radioEmits,
  setup(props, { emit, attrs }) {
    const ElRadioGroup = dynamicComponent("el-radio-group");
    const ElRadio = dynamicComponent("el-radio");
    const ElRadioButton = dynamicComponent("el-radio-button");

    const { data } = useDict(props.data, props.option, props.cache);

    return () =>
      h(
        ElRadioGroup,
        {
          props: { ...props, ...attrs },
          attrs: { ref: "radioRef" },
          on: useListeners(emit, radioEmits)
        },
        () =>
          data.value?.map(item =>
            h(
              props.button ? ElRadioButton : ElRadio,
              {
                props: { ...item, label: item.value }
              },
              () => item.label
            )
          )
      );
  }
});
