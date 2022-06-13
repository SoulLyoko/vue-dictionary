/// <reference types="vite/client" />

declare module "*.vue" {
  import { DefineComponent } from "vue-demi";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare module "*.md" {
  import { DefineComponent } from "vue-demi";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
