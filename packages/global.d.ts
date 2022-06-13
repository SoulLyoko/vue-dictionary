declare module "vue" {
  export interface GlobalComponents {
    VButton: typeof import("vue-dictionary")["VButton"];
    VInput: typeof import("vue-dictionary")["VInput"];
  }
}

export {};
