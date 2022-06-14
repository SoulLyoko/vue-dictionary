import { defineComponent, isVue2, toRefs } from "vue-demi";

import { dictProps, dictEmits } from "~/constants";
import { h } from "~/utils";
import { useDict, useSelected } from "~/composables";

export type TextInstance = InstanceType<typeof VDictText>;

export const VDictText = defineComponent({
  name: "VDictText",
  props: dictProps,
  emits: dictEmits,
  setup(props) {
    const { data } = useDict(props.data, props.option, props.cache);
    const { value, modelValue } = toRefs(props);
    const selectedLabel = useSelected(data, isVue2 ? value : modelValue, { returnLabel: true });

    return () => h("span", {}, selectedLabel.value);
  }
});
