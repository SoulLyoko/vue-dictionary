import { getCurrentInstance, computed } from "vue-demi";

export function useProps() {
  const instance = getCurrentInstance();
  return instance?.proxy?.$props as Record<string, any>;
}

export function useProp<T>(key: string) {
  return computed<T>(() => useProps()?.[key]);
}
