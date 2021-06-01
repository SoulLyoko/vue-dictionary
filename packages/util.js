export function flatTree(tree, childrenKey = "children") {
  return tree
    .map(item => {
      if (item[childrenKey]?.length) {
        return [item, flatTree(item[childrenKey])];
      } else {
        return item;
      }
    })
    .flat(Infinity);
}

export function getLabel(value, options, join = ",") {
  if (Array.isArray(value)) {
    return (
      flatTree(options)
        .filter(item => value.some(val => val === item.value))
        .map(item => item.label)
        .join(join) || value
    );
  } else {
    return flatTree(options).find(item => item.value === value)?.label || value;
  }
}
