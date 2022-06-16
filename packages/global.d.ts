declare module "vue" {
  export interface GlobalComponents {
    VDict: typeof import("vue-dictionary")["VDict"];
    DictCascader: typeof import("vue-dictionary")["DictCascader"];
    DictCascaderPanel: typeof import("vue-dictionary")["DictCascaderPanel"];
    DictCheckbox: typeof import("vue-dictionary")["DictCheckbox"];
    DictRadio: typeof import("vue-dictionary")["DictRadio"];
    DictSelect: typeof import("vue-dictionary")["DictSelect"];
    DictText: typeof import("vue-dictionary")["DictText"];
  }
}

export {};
