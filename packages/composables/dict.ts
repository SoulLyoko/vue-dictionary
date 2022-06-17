import type { Ref } from "vue-demi";
import type { DictItem, DictData, Config } from "../types";

import { ref } from "vue-demi";
import { createGlobalState } from "@vueuse/core";
import { get } from "lodash-unified";

import { CONFIG_DEFAULT } from "../constants";
import { treeMap } from "../utils";

export interface DictStorageItem {
  data: Ref<DictItem[] | undefined>;
  isLoading: Ref<boolean>;
  isFinished: Ref<boolean>;
  execute: () => void;
}

export type DictStorage = Record<string, DictStorageItem>;

export const dictStorage: DictStorage = {};

export function useDictStorage(): DictStorage;
export function useDictStorage(key: string): DictStorageItem;
export function useDictStorage(key?: string) {
  return key ? dictStorage[key] : dictStorage;
}

export function useDict(dictData?: DictData, dictOption?: Config, key?: string) {
  const config = { ...CONFIG_DEFAULT, ...dictOption } as Required<Config>;
  const useGlobalState = createGlobalState(() => {
    const data = ref<DictItem[]>([]);
    const isLoading = ref(false);
    const isFinished = ref(false);
    const formatDictData = (d: DictItem[]) => {
      return treeMap(d, item => {
        return {
          ...item,
          value: item[config.value],
          label: item[config.label]
        };
      });
    };
    const execute = () => {
      if (dictData instanceof Array) {
        data.value = formatDictData(dictData);
      } else if (dictData instanceof Function) {
        isLoading.value = true;
        isFinished.value = false;
        dictData(config.params)
          .then(res => {
            data.value = formatDictData(get({ res }, config.res));
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
  } else {
    return useGlobalState();
  }
}
