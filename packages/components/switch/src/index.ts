import type { PropTypes, EmitFn } from "~/types";

import { defineComponent, computed } from "vue-demi";
import { pick } from "lodash-unified";

import { basicProps, basicEmits, useListeners } from "~/constants";
import { h, dynamicComponent } from "~/utils";

export type SwitchProps = PropTypes<typeof switchProps>;
export type SwitchEmits = typeof switchEmits;
export type SwitchEmitFn = EmitFn<SwitchEmits>;
export type SwitchInstance = InstanceType<typeof DictSwitch>;

export const switchProps = basicProps;
export const switchEmits = basicEmits;

export const DictSwitch = defineComponent({
  name: "DictSwitch",
  props: switchProps,
  emits: switchEmits,
  setup(props, { emit, attrs }) {
    const ElSwitch = dynamicComponent("el-switch");

    const switchProps = computed(() => {
      const [inactiveItem, activeItem] = props.data ?? [];
      return {
        inactiveText: inactiveItem?.label,
        inactiveValue: inactiveItem?.value,
        inactiveColor: inactiveItem?.color,
        inactiveIcon: inactiveItem?.icon,
        inactiveIconClass: inactiveItem?.icon, // element-ui
        activeText: activeItem?.label,
        activeValue: activeItem?.value,
        activeColor: activeItem?.color,
        activeIcon: activeItem?.icon,
        activeIconClass: activeItem?.icon // element-ui
      };
    });

    return () =>
      h(ElSwitch, {
        props: { ...switchProps.value, ...pick(props, "value", "modelValue"), ...attrs },
        attrs: { ref: "switchRef" },
        on: useListeners(emit, switchEmits)
      });
  }
});
