import type { App } from "vue-demi";
import type { Theme } from "vitepress";
import defaultTheme from "vitepress/theme";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import VueDictionary from "../..";
import "../../styles/index.scss";
import components from "../components";

export default {
  ...defaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.use(ElementPlus);
    app.use(VueDictionary);
    app.use(components);
  }
} as Theme;
