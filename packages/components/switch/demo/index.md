# Switch

## Basic

::: demo
./basic
:::

## Disabled

::: demo
./disabled
:::

## Color

::: demo
./color
:::

## Icon

::: demo
./icon
:::

## Props

支持 el-switch 所有参数和事件

- [element-ui#switch](https://element.eleme.cn/#/zh-CN/component/switch#attributes)
- [element-plus#switch](https://element-plus.gitee.io/zh-CN/component/switch.html#%E5%B1%9E%E6%80%A7)

| 参数    | 说明                                      | 类型                    | 可选值 | 默认值 |
| ------- | ----------------------------------------- | ----------------------- | ------ | ------ |
| v-model | 绑定值                                    | string / number / array |
| data    | 字典数据，可以是数组或返回 Promise 的函数 | array                   | -      | -      |

inactive 和 active 相关参数与字典数据的对应关系如下:

```ts
const switchProps = computed(() => {
  const [inactiveItem, activeItem] = props.data ?? [];
  return {
    inactiveText: inactiveItem?.label,
    inactiveValue: inactiveItem?.value,
    inactiveColor: inactiveItem?.color,
    inactiveIcon: inactiveItem?.icon,
    inactiveIconClass: inactiveItem?.icon, // element-ui
    activeText: activeItem?.label,
    activeValue: activeItem?.value,
    activeColor: activeItem?.color,
    activeIcon: activeItem?.icon,
    activeIconClass: activeItem?.icon // element-ui
  };
});
```
