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

export function formatDict(dictData: DictItem[], dictOption?: Config) {
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
export function useDict(key?: string, dictData?: DictData, dictOption?: Config): DictStorageItem;
export function useDict(key?: string, dictData?: DictData, dictOption?: Config) {
  const config = { ...CONFIG_DEFAULT, ...dictOption } as Required<Config>;

  const useGlobalState = createGlobalState(() => {
    const data = ref<DictItem[]>([]);
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
  } else if (!key && !dictData) {
    return dictStorage;
  } else {
    return useGlobalState();
  }
}
