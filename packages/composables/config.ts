import type { Config } from "~/types";

import { isVue2, getCurrentInstance } from "vue-demi";

import { CONFIG_KEY, CONFIG_DEFAULT } from "~/constants";

export function useConfig(app?: any, config?: Config): Config {
  if (app) {
    config = { ...CONFIG_DEFAULT, ...config };
    if (isVue2) {
      app.prototype[CONFIG_KEY] = config;
    } else {
      app.config.globalProperties[CONFIG_KEY] = config;
    }
    return config;
  } else {
    const instance = getCurrentInstance() as any;
    return instance?.proxy[CONFIG_KEY] || CONFIG_DEFAULT;
  }
}
