import type { Config } from "~/types";

import { computed } from "vue-demi";

import { useConfig, useProp } from ".";

export function useSize() {
  const config = useConfig();
  const propSize = useProp<Config["size"]>("size");
  return computed(() => propSize.value ?? config.size);
}
