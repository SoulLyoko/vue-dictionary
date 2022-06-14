declare module "vue" {
  export interface GlobalComponents {
    VDict: typeof import("vue-dictionary")["VDict"];
  }
}

export {};
