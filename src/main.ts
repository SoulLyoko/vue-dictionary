import { createApp, isVue2 } from "vue-demi";
import VueDictionary from "vue-dictionary";

import App from "./App.vue";
import "vue-dictionary/styles/index.scss";

const app = createApp(App);
await setup();
app.use(VueDictionary);
app.mount("#app");

async function setup() {
  if (isVue2) {
    const ElementUI = await import("element-ui");
    import("element-ui/lib/theme-chalk/index.css");
    app.use(ElementUI as any);
  } else {
    const ElementPlus = await import("element-plus");
    import("element-plus/dist/index.css");
    app.use(ElementPlus as any);
  }
}
