import type { SetupContext, EmitsOptions } from "vue-demi";

export function useListeners(emit: SetupContext<any[]>["emit"], emits: EmitsOptions) {
  return Object.keys(emits).reduce((prevObj, currKey) => {
    return {
      ...prevObj,
      [currKey]: (...args: any[]) => emit(currKey, ...args)
    };
  }, {});
}
