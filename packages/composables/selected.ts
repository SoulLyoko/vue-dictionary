import type { MaybeRef } from "@vueuse/core";
import type { DictItem, DictValue, Config } from "../types";

import { computed, isRef } from "vue-demi";
import { isNil } from "lodash-unified";

import { CONFIG_DEFAULT } from "../constants";
import { filterTree } from "../utils";

export interface UseSelectedConfig extends Config {
  returnLabel?: boolean;
}

export function useSelected<T extends DictItem[]>(
  mbrData: MaybeRef<T | undefined>,
  mbrValue: MaybeRef<DictValue | undefined>,
  inConfig?: UseSelectedConfig
) {
  const defaultConfig = { ...CONFIG_DEFAULT, returnLabel: false };

  const selectedItems = computed(() => {
    const config = { ...defaultConfig, ...inConfig } as Required<UseSelectedConfig>;

    const data = isRef(mbrData) ? mbrData.value : mbrData;
    const value = isRef(mbrValue) ? mbrValue.value : mbrValue;
    if (isNil(value) || isNil(data)) {
      return config.returnLabel ? "" : [];
    }

    const isMultiple = Array.isArray(value);
    const filterItems = filterTree(data, item => {
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
