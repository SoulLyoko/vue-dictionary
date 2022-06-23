import type { PropTypes, EmitFn } from "~/types";

import { defineComponent } from "vue-demi";
import { pick, omit } from "lodash-unified";

import { basicProps, basicEmits, selectRestEmits, useListeners } from "~/constants";
import { h, dynamicComponent } from "~/utils";

export type SelectProps = PropTypes<typeof selectProps>;
export type SelectEmits = typeof selectEmits;
export type SelectEmitFn = EmitFn<SelectEmits>;
export type SelectInstance = InstanceType<typeof DictSelect>;

export const selectProps = basicProps;
export const selectEmits = { ...basicEmits, ...selectRestEmits };

export const DictSelect = defineComponent({
  name: "DictSelect",
  props: selectProps,
  emits: selectEmits,
  setup(props, { emit, attrs }) {
    const ElSelect = dynamicComponent("el-select");
    const ElOptionGroup = dynamicComponent("el-option-group");
    const ElOption = dynamicComponent("el-option");

    const ElSelectProps = ["value", "modelValue"];
    const ElOptionGroupProps = ["label", "disabled"];
    const ElOptionProps = ["label", "value", "disabled"];

    return () =>
      h(
        ElSelect,
        {
          props: { ...pick(props, ElSelectProps), ...attrs },
          attrs: { ref: "selectRef" },
          on: useListeners(emit, selectEmits)
        },
        () =>
          props.data?.map(item => {
            return Array.isArray(item.children)
              ? h(
                  ElOptionGroup,
                  {
                    props: pick(item, ElOptionGroupProps)
                  },
                  () =>
                    item.children?.map(child =>
                      h(ElOption, {
                        props: pick(child, ElOptionProps)
                      })
                    )
                )
              : h(ElOption, { props: pick(item, ElOptionProps) });
          })
      );
  }
});
