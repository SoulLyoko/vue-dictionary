import type { SetupContext, ExtractPropTypes } from "vue-demi";

import { defineComponent } from "vue-demi";

import { basicProps, basicEmits, cascaderRestEmits, useListeners } from "~/constants";
import { h, dynamicComponent } from "~/utils";
import { useDict } from "~/composables";

export type CascaderPanelProps = ExtractPropTypes<typeof cascaderPanelProps>;
export type CascaderPanelEmits = typeof cascaderPanelEmits;
export type CascaderPanelEmitFn = SetupContext<CascaderPanelEmits>["emit"];
export type CascaderPanelInstance = InstanceType<typeof DictCascaderPanel>;

export const cascaderPanelProps = basicProps;
export const cascaderPanelEmits = { ...basicEmits, ...cascaderRestEmits };

export const DictCascaderPanel = defineComponent({
  name: "DictCascaderPanel",
  props: cascaderPanelProps,
  emits: cascaderPanelEmits,
  setup(props, { emit, attrs }) {
    const ElCascaderPanel = dynamicComponent("el-cascader-panel");

    const { data } = useDict(props.data, props.option, props.cache);

    return () =>
      h(ElCascaderPanel, {
        props: {
          options: data.value,
          ...props,
          ...attrs
        },
        attrs: { ref: "cascaderPanelRef" },
        on: useListeners(emit, cascaderPanelEmits)
      });
  }
});
