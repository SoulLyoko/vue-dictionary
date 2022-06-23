# useSelected

## 基础用法

```ts
import { useDict, useSelected } from "vue-dictionary";

const dictOption = { label: "title", value: "id" };
const dictData = ref([
  { title: "apple", id: "1" },
  { title: "banana", id: "2" },
  { title: "cherry", id: "3" }
]);
const value = ref("1");

const selected = useSelected(dictData, value, dictOption);
console.log(selected.value); // { title: "apple", id: "1" }
dictData.value[0].title = "app";
console.log(selected.value); // { title: "app", id: "1" }
value.value = "2";
console.log(selected.value); // { title: "banana", id: "2" }
```

## 多选值

```ts
const dictData = [
  { title: "apple", id: "1" },
  { title: "banana", id: "2" },
  { title: "cherry", id: "3" }
];
const selected = useSelected(dictData, ["1", "2"]);
console.log(selected.value); // [{ title: "apple", id: "1" },{ title: "banana", id: "2" }]
```

## 返回字典名称

```ts
const dictData = [
  { title: "apple", id: "1" },
  { title: "banana", id: "2" },
  { title: "cherry", id: "3" }
];
const selectedLabel = useSelected(dictData, "1", { returnLabel: true });
console.log(selectedLabel.value); // "apple"
const selectedLabels = useSelected(dictData, ["1", "2"], { returnLabel: true });
console.log(selectedLabels.value); // "apple,banana"
```

## 类型定义

<<< @/composables/selected.ts#snippet
