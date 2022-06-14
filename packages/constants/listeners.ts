import type { DictValue } from "~/types";

export function useListeners(emit: any) {
  return {
    "update:modelValue": (e: DictValue) => emit("update:modelValue", e),
    input: (e: DictValue) => emit("input", e),
    change: (e: DictValue) => emit("change", e)
  };
}
