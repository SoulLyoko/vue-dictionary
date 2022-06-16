import type { PropType } from "vue-demi";
import type { DictValue, DictData, Config } from "../types";

import { checkboxProps, radioProps, selectProps } from "../components";

export const basicProps = {
  value: { type: [String, Number, Array] as PropType<DictValue>, default: "" }, // Vue2
  modelValue: { type: [String, Number, Array] as PropType<DictValue>, default: "" }, // Vue3
  data: { type: [Array, Function] as PropType<DictData>, default: () => [] },
  option: { type: Object as PropType<Config> },
  cache: { type: String, default: "" }
};

export const fullProps = {
  type: { type: String as PropType<"select" | "radio" | "checkbox" | "text">, default: "select" },
  ...checkboxProps,
  ...radioProps,
  ...selectProps
};
