import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.component("icon", () => import("./components/Icon/Icon"));
Vue.component("modal", () => import("./components/Modal/Modal"));

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
