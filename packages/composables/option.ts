import type { Config } from "../types";

import { computed } from "vue-demi";

import { useConfig, useProp } from ".";

export function usePropOption() {
  const config = useConfig();
  const propOption = useProp<Config>("option");
  return computed(() => ({ ...config, ...propOption.value }));
}
