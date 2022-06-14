import type { DictValue } from "~/types";

export const dictEmits = {
  "update:modelValue": (e: DictValue) => e,
  input: (e: DictValue) => e,
  change: (e: DictValue) => e
};
