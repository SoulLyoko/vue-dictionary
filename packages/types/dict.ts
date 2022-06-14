export interface DictItem {
  label?: string;
  value?: any;
  [x: string]: any;
}

export type DictData = DictItem[] | ((params?: any) => Promise<unknown>);

export type DictValue = string | number | string[] | number[];
