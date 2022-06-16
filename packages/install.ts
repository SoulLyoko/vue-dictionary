import type { App, Plugin, Component } from "vue-demi";
import type { Config } from "./types";

import { useConfig } from "./composables";
import components from "./components";

export default {
  install(app: App, options: Config = {}) {
    useConfig(app, options);
    Object.values(components).forEach((component: Component) => {
      app.component(component.name!, component);
    });
  }
} as unknown as Plugin;
