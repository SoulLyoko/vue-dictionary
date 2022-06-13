import { getCurrentInstance, computed, type ComputedRef } from "vue-demi";

export function useProps() {
  const instance = getCurrentInstance();
  return instance?.proxy?.$props as Record<string, any>;
}

export function useProp<T>(key: string): ComputedRef<T | undefined> {
  return computed(() => useProps()?.[key]);
}
