# Dict

## Basic

::: demo
./basic
:::

## Promise Data

::: demo
./promise
:::

## Dict Option

::: demo
./dictOption
:::

## Type

::: demo
./type
:::

## Props

除了支持 type 对应的组件参数和事件外，还包括以下参数

| 参数    | 说明                                              | 类型                              | 可选值                                                                | 默认值         |
| ------- | ------------------------------------------------- | --------------------------------- | --------------------------------------------------------------------- | -------------- |
| v-model | 绑定值                                            | string / number / boolean / array | -                                                                     | -              |
| type    | 组件类型                                          | string                            | select / radio / checkbox / switch / cascader / cascader-panel / text | select         |
| data    | 字典数据，可以是数组或返回 Promise 的函数         | array / function(params?)         | -                                                                     | option.request |
| option  | 字典配置，详见下方说明                            | -                                 | -                                                                     | -              |
| code    | 缓存字典数据的 key，并作为 data(params)的默认参数 | string                            | -                                                                     |
| button  | 当 type 为 radio 或 checkbox 时，是否显示按钮     | boolean                           | -                                                                     |
| border  | 当 type 为 radio 或 checkbox 时，是否显示边框     | boolean                           | -                                                                     |

## Option

| 参数     | 说明                                                             | 类型   | 可选值 | 默认值   |
| -------- | ---------------------------------------------------------------- | ------ | ------ | -------- |
| label    | 字典数据的 label 键名                                            | string | -      | label    |
| value    | 字典数据的 value 键名                                            | string | -      | value    |
| children | 字典数据的 children 键名                                         | string | -      | children |
| res      | 字典 Promise 函数返回数据的格式                                  | string | -      | res.data |
| params   | 字典 Promise 函数的参数                                          | -      | -      | -        |
| request  | 当组件 props.data 为 undefined 时，作为默认的字典 Promise 函数， | -      | -      | -        |

## Events

| 事件名 | 说明                                                                 | 回调参数                    |
| ------ | -------------------------------------------------------------------- | --------------------------- |
| change | 选中值发生变化时触发，回调参数为选择的字典项(单选)或字典项数组(多选) | (item:DictItem\|DictItem[]) |
