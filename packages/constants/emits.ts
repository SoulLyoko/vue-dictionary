/* eslint-disable @typescript-eslint/no-unused-vars */

export const vModelEmits = {
  input: (...args: any[]) => true, // Vue2
  "update:modelValue": (...args: any[]) => true // Vue3
};

export const changeEmits = {
  change: (...args: any[]) => true
};

export const basicEmits = {
  ...vModelEmits,
  ...changeEmits
};

export const selectRestEmits = {
  "visible-change": (v: boolean) => true,
  "remove-tag": (...args: any[]) => true,
  clear: () => true,
  blur: (event: Event) => true,
  focus: (event: Event) => true
};

export const cascaderRestEmits = {
  "expand-change": (...args: any[]) => true
};

export const fullEmits = {
  ...basicEmits,
  ...selectRestEmits,
  ...cascaderRestEmits
};
