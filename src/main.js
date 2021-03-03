import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VDict from "../packages/index.js";

Vue.config.productionTip = false;

const getDict = type => {
  return axios.get("http://jsonplaceholder.typicode.com/posts/" + type + "/comments");
};

Vue.use(ElementUI);
Vue.use(VDict, {
  request: getDict,
  dataPath: "res.data",
  label: "name",
  value: "id"
});

new Vue({
  render: h => h(App)
}).$mount("#app");
