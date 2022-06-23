# useDict

## 基础用法

```ts
import { useDict } from "vue-dictionary";

const dictData = [
  { title: "apple", id: "1" },
  { title: "banana", id: "2" },
  { title: "cherry", id: "3" }
];
const dictOption = { label: "title", value: "id", res: "res" };
const getDictData = () => Promise.resolve(dictData);

const { data, execute } = useDict("fruits", getDictData, dictOption);
console.log(data); // Ref<dictData>
execute(); // 再执行一次`getDictData()`
```

## 使用字典缓存

```ts
const { data } = useDict("fruits");
// 等同于
const { fruits: data } = useDict();
console.log(data); // Ref<dictData>
```

## 类型定义

```ts
interface DictStorageItem<T = DictItem[]> {
  data: Ref<T>;
  isLoading: Ref<boolean>;
  isFinished: Ref<boolean>;
  execute: () => void;
}
type DictStorage = Record<string, DictStorageItem>;
function useDict(): DictStorage;
function useDict<T extends DictItem[]>(key?: string, dictData?: DictData, dictOption?: Config): DictStorageItem<T>;
```
