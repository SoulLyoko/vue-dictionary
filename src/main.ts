import { createApp } from "vue-demi";
import VueDictionary from "vue-dictionary";

import App from "./App.vue";
import "vue-dictionary/styles/index.scss";

const app = createApp(App);
app.use(VueDictionary, { size: "large" });
app.mount("#app");
