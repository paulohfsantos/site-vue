import Vue from "vue";
import Vuex from "vuex";
// modules
import Projects from "./modules/projects";
import About from "./modules/about";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    snackbar: {
      show: false,
      msg: "",
      color: "",
    },
    alert: {
      visible: false,
      text: "",
      status: "",
    },
  },
  getters: {
    snackbar: (state) => state.snackbar,
    alert: (state) => state.alert,
  },
  mutations: {
    changeSnackbar(state, snack) {
      state.snackbar.show = snack.show;
      state.snackbar.msg = snack.msg;
      state.snackbar.color = snack.color;
    },
    changeAlert(state, alert) {
      state.alert.show = alert.show;
      state.alert.msg = alert.msg;
      state.alert.color = alert.color;
    },
  },
  modules: {
    Projects,
    About,
  },
});
