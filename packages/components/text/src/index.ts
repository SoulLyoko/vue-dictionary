import type { PropTypes } from "~/types";

import { defineComponent, isVue2, toRefs } from "vue-demi";

import { basicProps } from "~/constants";
import { h } from "~/utils";
import { useSelected } from "~/composables";

export type TextProps = PropTypes<typeof textProps>;
export type TextInstance = InstanceType<typeof DictText>;

export const textProps = basicProps;

export const DictText = defineComponent({
  name: "DictText",
  props: textProps,
  setup(props) {
    const { value, modelValue } = toRefs(props);
    const selectedLabel = useSelected(props.data, isVue2 ? value : modelValue, { returnLabel: true });

    return () => h("span", {}, selectedLabel.value);
  }
});
