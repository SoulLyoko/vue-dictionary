import type { Config } from "~/types";

import { mount } from "@vue/test-utils";
import { isVue2, Vue2 } from "vue-demi";

import { CONFIG_DEFAULT, CONFIG_KEY } from "~/constants";
import { useConfig } from "../config";

describe("useConfig", () => {
  it("should set global config", () => {
    const config: Config = { size: "small" };
    const globalConfig: Config = { ...CONFIG_DEFAULT, ...config };
    if (isVue2) {
      const app = Vue2 as any;
      useConfig(app, config);
      expect(app.prototype[CONFIG_KEY]).toEqual(globalConfig);
    } else {
      const wrapper = mount({}) as any;
      const { app } = wrapper.getCurrentComponent().appContext;
      useConfig(app, config);
      expect(app.config.globalProperties[CONFIG_KEY]).toEqual(globalConfig);
    }
  });
  it("should return default config", () => {
    const config = useConfig();
    expect(config).toEqual(CONFIG_DEFAULT);
  });
});
