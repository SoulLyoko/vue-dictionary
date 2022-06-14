import { defineComponent } from "vue-demi";

import { dictProps, dictEmits, useListeners } from "~/constants";
import { h, dynamicComponent } from "~/utils";
import { useDict } from "~/composables";

export type RadioInstance = InstanceType<typeof VDictRadio>;

export const VDictRadio = defineComponent({
  name: "VDictRadio",
  props: dictProps,
  emits: dictEmits,
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
          on: useListeners(emit)
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
