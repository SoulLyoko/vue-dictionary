import { checkboxEmits, radioEmits, selectEmits } from "../components";

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

export const fullEmits = {
  ...checkboxEmits,
  ...radioEmits,
  ...selectEmits
};

// export const cascaderEmits = {
//   ...selectEmits,
//   "expand-change": (...args: any[]) => true
// };
