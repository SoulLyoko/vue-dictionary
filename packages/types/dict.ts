export interface DictItem {
  label?: string;
  value?: any;
  children?: DictItem[];
  [x: string]: any;
}

export type DictData = DictItem[] | ((params?: any) => Promise<unknown>);

export type DictValue = boolean | string | number | string[] | number[];

export type DictComponentType =
  | "select"
  | "radio"
  | "checkbox"
  | "switch"
  | "cascader"
  | "cascader-panel"
  | "tree-select"
  | "text";
