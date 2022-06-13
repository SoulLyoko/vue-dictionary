import type { App, Plugin, Component } from "vue-demi";
import type { Config } from "./types";

import { useConfig } from "./composables";
import * as components from "./components";

export default {
  install(app: App, options: Config = {}) {
    useConfig(app, options);
    Object.values(components).forEach((component: Component) => {
      if ("name" in component) {
        app.component(component.name!, component);
      }
    });
  }
} as unknown as Plugin;
