import { defineComponent } from "vue-demi";

import { dictProps, dictEmits, useListeners } from "~/constants";
import { h, dynamicComponent } from "~/utils";
import { useDict } from "~/composables";

export type CheckboxInstance = InstanceType<typeof VDictCheckbox>;

export const VDictCheckbox = defineComponent({
  name: "VDictRadio",
  props: dictProps,
  emits: dictEmits,
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
          on: useListeners(emit)
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
