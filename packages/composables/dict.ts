import type { Ref } from "vue-demi";
import type { DictItem, DictData, Config } from "../types";

import { ref } from "vue-demi";
import { createGlobalState } from "@vueuse/core";
import { get } from "lodash-unified";

import { CONFIG_DEFAULT } from "../constants";
import { treeMap } from "../utils";

export interface DictStorageItem<T = DictItem[]> {
  data: Ref<T>;
  isLoading: Ref<boolean>;
  isFinished: Ref<boolean>;
  execute: () => void;
}

export type DictStorage = Record<string, DictStorageItem>;

export const dictStorage: DictStorage = {};

export function formatDict<T extends DictItem[]>(dictData: T, dictOption?: Config) {
  const config = { ...CONFIG_DEFAULT, ...dictOption } as Required<Config>;
  return treeMap(
    dictData,
    item => {
      return {
        ...item,
        value: item[config.value],
        label: item[config.label]
      };
    },
    { childrenKey: config.children }
  );
}

export function useDict(): DictStorage;
export function useDict<T extends DictItem[]>(
  key?: string,
  dictData?: DictData,
  dictOption?: Config
): DictStorageItem<T>;
export function useDict<T extends DictItem[]>(key?: string, dictData?: DictData, dictOption?: Config) {
  const config = { ...CONFIG_DEFAULT, ...dictOption } as Required<Config>;

  const useGlobalState = createGlobalState(() => {
    const data = ref([] as unknown as T);
    const isLoading = ref(false);
    const isFinished = ref(false);
    const execute = () => {
      if (dictData instanceof Array) {
        data.value = formatDict(dictData, config);
      } else if (dictData instanceof Function) {
        isLoading.value = true;
        isFinished.value = false;
        dictData(config.params)
          .then(res => {
            data.value = formatDict(get({ res }, config.res), config);
          })
          .finally(() => {
            isLoading.value = false;
            isFinished.value = true;
          });
      }
    };
    execute();
    return { data, isLoading, isFinished, execute };
  });

  if (key) {
    if (!dictStorage[key]) {
      dictStorage[key] = useGlobalState();
    }
    return dictStorage[key];
  } else if (dictData) {
    return useGlobalState();
  } else {
    return dictStorage;
  }
}
