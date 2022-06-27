import type { ComputedRef } from "vue-demi";
import type { MaybeRef } from "@vueuse/core";
import type { DictItem, DictValue } from "../types";

import { computed, isRef } from "vue-demi";
import { isNil } from "lodash-unified";

import { CONFIG_DEFAULT } from "../constants";
import { filterTree } from "../utils";

// #region snippet
export type UseSelectedConfig<L> = MaybeRef<{
  label?: string;
  value?: string;
  children?: string;
  returnLabel?: L;
}>;
export type SelectedData = MaybeRef<DictItem[] | undefined>;
export type SelectedValue<T> = MaybeRef<T | undefined>;
export type SingleValue = SelectedValue<boolean | string | number>;
export type MultipleValue = SelectedValue<string[] | number[]>;
export type useSelectedReturn<T> = ComputedRef<T>;

export function useSelected(
  selectedData: SelectedData,
  selectedValue: SingleValue,
  config?: UseSelectedConfig<false | undefined>
): useSelectedReturn<DictItem>;
export function useSelected(
  selectedData: SelectedData,
  selectedValue: MultipleValue,
  config?: UseSelectedConfig<false | undefined>
): useSelectedReturn<DictItem[]>;
export function useSelected(
  selectedData: SelectedData,
  selectedValue: SelectedValue<DictValue>,
  config?: UseSelectedConfig<false | undefined>
): useSelectedReturn<DictItem | DictItem[]>;

export function useSelected(
  selectedData: SelectedData,
  selectedValue: SelectedValue<DictValue>,
  config?: UseSelectedConfig<true>
): useSelectedReturn<string>;

export function useSelected(
  selectedData: SelectedData,
  selectedValue: SelectedValue<DictValue>,
  config?: UseSelectedConfig<boolean>
): useSelectedReturn<DictItem | DictItem[] | string>;
// #endregion snippet

export function useSelected<L extends boolean>(
  selectedData: SelectedData,
  selectedValue: SelectedValue<DictValue>,
  inConfig?: UseSelectedConfig<L>
) {
  const defaultConfig = { ...CONFIG_DEFAULT, returnLabel: false };

  const selectedItems = computed(() => {
    const config = { ...defaultConfig, ...(isRef(inConfig) ? inConfig.value : inConfig) };

    const data = isRef(selectedData) ? selectedData.value : selectedData;
    const value = isRef(selectedValue) ? selectedValue.value : selectedValue;
    if (isNil(value) || isNil(data)) {
      return config.returnLabel ? "" : [];
    }

    const isMultiple = Array.isArray(value);
    const filterItems = filterTree(
      data,
      item => {
        if (isMultiple) {
          return value.some(e => e === item[config.value!]);
        } else {
          return value === item[config.value!];
        }
      },
      { childrenKey: config.children }
    );
    if (config.returnLabel) {
      return filterItems.map(e => e[config.label!]).join(",");
    }

    return isMultiple ? filterItems : filterItems[0];
  });

  return selectedItems;
}
