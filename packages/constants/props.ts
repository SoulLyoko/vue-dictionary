import type { PropType } from "vue-demi";
import type { Config, DictValue, DictData, DictComponentType, DictItem } from "../types";

export const basicProps = {
  value: { type: [String, Number, Array] as PropType<DictValue> }, // Vue2
  modelValue: { type: [String, Number, Array] as PropType<DictValue> }, // Vue3
  data: { type: Array as PropType<DictItem[]> }
};

export const dictRestProps = {
  type: { type: String as PropType<DictComponentType>, default: "select" },
  data: { type: [Array, Function] as PropType<DictData> },
  option: { type: Object as PropType<Config> },
  code: { type: String }
};

export const buttonProps = {
  button: { type: Boolean }
};

export const fullProps = {
  ...basicProps,
  ...dictRestProps,
  ...buttonProps
};
