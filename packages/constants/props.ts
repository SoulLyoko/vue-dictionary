import type { PropType } from "vue-demi";
import type { DictValue, DictData, Config } from "../types";

export const dictProps = {
  value: { type: [String, Number, Array] as PropType<DictValue>, default: "" }, // Vue2
  modelValue: { type: [String, Number, Array] as PropType<DictValue>, default: "" }, // Vue3
  type: { type: String as PropType<"select" | "radio" | "checkbox" | "text">, default: "select" },
  data: {
    type: [Array, Function] as PropType<DictData>,
    default: () => []
  },
  option: { type: Object as PropType<Config> },
  cache: { type: String, default: "" },
  button: { type: Boolean }
};
