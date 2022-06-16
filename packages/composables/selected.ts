import type { MaybeRef } from "@vueuse/core";
import type { DictItem, DictValue, Config } from "../types";

import { computed, isRef } from "vue-demi";
import { isNil } from "lodash-unified";

import { CONFIG_DEFAULT } from "../constants";

export interface UseSelectedConfig extends Config {
  returnLabel?: boolean;
}

export function useSelected<T extends DictItem[]>(
  mbData: MaybeRef<T | undefined>,
  mbValue: MaybeRef<DictValue | undefined>,
  inConfig?: UseSelectedConfig
) {
  const defaultConfig = { ...CONFIG_DEFAULT, returnLabel: false };
  const config = { ...defaultConfig, ...inConfig } as Required<UseSelectedConfig>;

  const selectedItems = computed(() => {
    const data = isRef(mbData) ? mbData.value : mbData;
    const value = isRef(mbValue) ? mbValue.value : mbValue;
    const isMultiple = Array.isArray(value);
    if (isNil(value) || isNil(data)) return config.returnLabel ? "" : [];
    const filterItems = data.filter(item => {
      if (isMultiple) {
        return value.some(e => e == item[config.value]);
      } else {
        return value == item[config.value];
      }
    });
    if (config.returnLabel) {
      return filterItems.map(e => e[config.label]).join(",");
    }
    return isMultiple ? filterItems : filterItems[0];
  });

  return selectedItems;
}
