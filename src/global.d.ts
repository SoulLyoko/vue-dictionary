declare module "vue" {
  export interface GlobalComponents {
    VDict: typeof import("vue-dictionary")["VDict"];
    DictCascader: typeof import("vue-dictionary")["DictCascader"];
    DictCascaderPanel: typeof import("vue-dictionary")["DictCascaderPanel"];
    DictCheckbox: typeof import("vue-dictionary")["DictCheckbox"];
    DictRadio: typeof import("vue-dictionary")["DictRadio"];
    DictSelect: typeof import("vue-dictionary")["DictSelect"];
    DictSwitch: typeof import("vue-dictionary")["DictSwitch"];
    DictText: typeof import("vue-dictionary")["DictText"];
  }
}

export {};
