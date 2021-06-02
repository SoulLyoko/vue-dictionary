import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VDict from "../packages/index.js";

Vue.config.productionTip = false;

const getDict = code => {
  return fetch("https://jsonplaceholder.typicode.com/" + code)
    .then(response => response.json())
    .then(json => json.filter((e, i) => i < 5));
};

Vue.use(ElementUI);
Vue.use(VDict, {
  request: getDict,
  dataPath: "res",
  label: "title",
  value: "id"
});

new Vue({
  render: h => h(App)
}).$mount("#app");
