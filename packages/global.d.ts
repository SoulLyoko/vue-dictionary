declare module "vue" {
  export interface GlobalComponents {
    VDict: typeof import("vue-dictionary")["VDict"];
    VDictCheckbox: typeof import("vue-dictionary")["VDictCheckbox"];
    VDictRadio: typeof import("vue-dictionary")["VDictRadio"];
    VDictSelect: typeof import("vue-dictionary")["VDictSelect"];
    VDictText: typeof import("vue-dictionary")["VDictText"];
  }
}

export {};
