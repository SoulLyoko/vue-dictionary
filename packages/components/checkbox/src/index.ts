import { defineComponent } from "vue-demi";

import { dictProps, basicEmits, useListeners } from "~/constants";
import { h, dynamicComponent } from "~/utils";
import { useDict } from "~/composables";

export type CheckboxInstance = InstanceType<typeof VDictCheckbox>;

export const VDictCheckbox = defineComponent({
  name: "VDictRadio",
  props: dictProps,
  emits: basicEmits,
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
          on: useListeners(emit, basicEmits)
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
