import type { PropType } from "vue-demi";
import type { Config, DictValue, DictData, DictComponentType } from "../types";

export const basicProps = {
  value: { type: [String, Number, Array] as PropType<DictValue>, default: "" }, // Vue2
  modelValue: { type: [String, Number, Array] as PropType<DictValue>, default: "" }, // Vue3
  data: { type: [Array, Function] as PropType<DictData>, default: () => [] },
  option: { type: Object as PropType<Config> },
  cache: { type: String, default: "" }
};

export const typeProps = {
  type: { type: String as PropType<DictComponentType>, default: "select" }
};

export const buttonProps = {
  button: { type: Boolean }
};

export const fullProps = {
  ...basicProps,
  ...typeProps,
  ...buttonProps
};
