import type { PropType } from "vue-demi";
import type { Config } from "~/types";

import { defineComponent, computed } from "vue-demi";

import { useSize } from "~/composables";
import { h, slot } from "~/utils";

export type ButtonType = "default" | "primary" | "success";

export const buttonProps = {
  type: { type: String as PropType<ButtonType> },
  size: { type: String as PropType<Config["size"]> }
};

export const buttonEmits = {
  click: (e: MouseEvent) => e instanceof MouseEvent
};

export type ButtonInstance = InstanceType<typeof VButton>;

export const VButton = defineComponent({
  name: "VButton",
  props: buttonProps,
  emits: buttonEmits,
  setup(props, { emit, slots }) {
    const size = useSize();
    const baseClass = "v-button";
    const typeClass = computed(() => (props.type && props.type !== "default" ? ` ${baseClass}--${props.type}` : ""));
    const sizeClass = computed(() => (size.value && size.value !== "default" ? ` ${baseClass}--${size.value}` : ""));
    const classes = computed(() => `${baseClass}${typeClass.value}${sizeClass.value}`);

    function onClick(e: MouseEvent) {
      emit("click", e);
    }
    return () =>
      h(
        "button",
        {
          attrs: {
            class: classes.value
          },
          on: {
            click: onClick
          }
        },
        slot(slots.default)
      );
  }
});
