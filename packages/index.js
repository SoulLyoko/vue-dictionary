import VDict from "./index.vue";

const install = function(Vue, opts = {}) {
  if (install.installed) return;
  Vue.prototype.$dictOption = opts;
  Vue.component("v-dict", VDict);
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default { install };
