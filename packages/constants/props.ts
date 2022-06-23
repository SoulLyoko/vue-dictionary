import type { PropType } from "vue-demi";
import type { Config, DictValue, DictData, DictComponentType, DictItem } from "../types";

export const basicProps = {
  value: { type: [String, Number, Array] as PropType<DictValue>, default: "" }, // Vue2
  modelValue: { type: [String, Number, Array] as PropType<DictValue>, default: "" }, // Vue3
  data: { type: Array as PropType<DictItem[]>, default: () => [] }
};

export const dictRestProps = {
  type: { type: String as PropType<DictComponentType>, default: "select" },
  data: { type: [Array, Function] as PropType<DictData>, default: () => [] },
  option: { type: Object as PropType<Config> },
  code: { type: String, default: "" }
};

export const buttonProps = {
  button: { type: Boolean }
};

export const fullProps = {
  ...basicProps,
  ...dictRestProps,
  ...buttonProps
};
