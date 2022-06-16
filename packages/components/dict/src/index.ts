import type { SetupContext, ExtractPropTypes } from "vue-demi";

import { defineComponent, computed } from "vue-demi";

import { fullProps, fullEmits, useListeners } from "~/constants";
import { h } from "~/utils";
import { DictCascader, DictCascaderPanel, DictSelect, DictRadio, DictCheckbox, DictText } from "../..";

export type DictProps = ExtractPropTypes<typeof dictProps>;
export type DictEmits = typeof dictEmits;
export type DictEmit = SetupContext<DictEmits>["emit"];
export type DictInstance = InstanceType<typeof VDict>;

export const dictProps = fullProps;
export const dictEmits = fullEmits;

export const VDict = defineComponent({
  name: "VDict",
  props: dictProps,
  emits: dictEmits,
  setup(props, { emit, attrs }) {
    const componentMap = {
      cascader: DictCascader,
      "cascader-panel": DictCascaderPanel,
      checkbox: DictCheckbox,
      radio: DictRadio,
      select: DictSelect,
      text: DictText
    };

    const component = computed(() => componentMap[props.type]);

    return () =>
      h(component.value, {
        props,
        attrs: { ref: "dictRef", ...attrs },
        on: useListeners(emit, dictEmits)
      });
  }
});
