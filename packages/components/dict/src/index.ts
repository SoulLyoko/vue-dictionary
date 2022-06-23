import type { PropTypes, EmitFn } from "~/types";

import { defineComponent, computed } from "vue-demi";

import { fullProps, fullEmits, useListeners } from "~/constants";
import { useDict, usePropOption } from "~/composables";
import { h } from "~/utils";
import { DictCascader, DictCascaderPanel, DictSelect, DictRadio, DictCheckbox, DictSwitch, DictText } from "../..";

export type DictProps = PropTypes<typeof dictProps>;
export type DictEmits = typeof dictEmits;
export type DictEmit = EmitFn<DictEmits>;
export type DictInstance = InstanceType<typeof Dict>;

export const dictProps = fullProps;
export const dictEmits = fullEmits;

export const Dict = defineComponent({
  name: "Dict",
  props: dictProps,
  emits: dictEmits,
  setup(props, { emit, attrs }) {
    const componentMap = {
      cascader: DictCascader,
      "cascader-panel": DictCascaderPanel,
      checkbox: DictCheckbox,
      radio: DictRadio,
      select: DictSelect,
      switch: DictSwitch,
      text: DictText
    };

    const component = computed(() => componentMap[props.type]);
    const option = usePropOption();
    const { data } = useDict(props.cache, props.data, option.value);

    return () =>
      h(component.value, {
        props: { ...props, data: data.value },
        attrs: { ref: "dictRef", ...attrs },
        on: useListeners(emit, dictEmits)
      });
  }
});
