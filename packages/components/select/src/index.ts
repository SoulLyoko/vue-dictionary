import { defineComponent } from "vue-demi";

import { dictProps, dictEmits, useListeners } from "~/constants";
import { h, dynamicComponent } from "~/utils";
import { useDict } from "~/composables";

export type SelectInstance = InstanceType<typeof VDictSelect>;

export const VDictSelect = defineComponent({
  name: "VDictSelect",
  props: dictProps,
  emits: dictEmits,
  setup(props, { emit, attrs }) {
    const ElSelect = dynamicComponent("el-select");
    const ElOption = dynamicComponent("el-option");

    const { data } = useDict(props.data, props.option, props.cache);

    return () =>
      h(
        ElSelect,
        {
          props: { ...props, ...attrs },
          on: useListeners(emit)
        },
        () => data.value?.map(item => h(ElOption, { props: item }))
      );
  }
});
