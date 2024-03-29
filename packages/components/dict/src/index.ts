import type { PropTypes, EmitFn, DictValue } from "~/types";

import { defineComponent, computed } from "vue-demi";

import { fullProps, fullEmits, useListeners } from "~/constants";
import { useDict, usePropOption, useSelected } from "~/composables";
import { h } from "~/utils";
import {
  DictCascader,
  DictCascaderPanel,
  DictSelect,
  DictRadio,
  DictCheckbox,
  DictSwitch,
  DictTreeSelect,
  DictText
} from "../..";

export type DictProps = PropTypes<typeof dictProps>;
export type DictEmits = typeof dictEmits;
export type DictEmit = EmitFn<DictEmits>;
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
      switch: DictSwitch,
      "tree-select": DictTreeSelect,
      text: DictText
    };

    const component = computed(() => componentMap[props.type]);
    const option = computed(() => ({ params: props.code, ...usePropOption().value }));
    const { data } = useDict(props.code, props.data ?? option.value.request, option.value);

    function onChange(val: DictValue) {
      const selected = useSelected(data, val, option);
      emit("change", selected.value);
    }

    return () =>
      h(component.value, {
        props: { ...props, data: data.value },
        attrs: { ref: "dictRef", ...attrs },
        on: { ...useListeners(emit, dictEmits), change: onChange }
      });
  }
});
