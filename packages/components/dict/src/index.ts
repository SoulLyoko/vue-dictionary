import { defineComponent, computed } from "vue-demi";

import { dictProps, dictEmits, useListeners } from "~/constants";
import { h } from "~/utils";
import { VDictSelect } from "../../select";
import { VDictRadio } from "../../radio";
import { VDictCheckbox } from "../../checkbox";
import { VDictText } from "../../text";

export type DictInstance = InstanceType<typeof VDict>;

export const VDict = defineComponent({
  name: "VDict",
  props: dictProps,
  emits: dictEmits,
  setup(props, { emit, attrs }) {
    const componentMap = {
      select: VDictSelect,
      radio: VDictRadio,
      checkbox: VDictCheckbox,
      text: VDictText
    };

    const component = computed(() => componentMap[props.type]);

    return () =>
      h(component.value, {
        props,
        attrs,
        on: useListeners(emit)
      });
  }
});
