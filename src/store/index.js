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
  },
  getters: {
    snackbar: (state) => state.snackbar,
  },
  mutations: {
    changeSnackbar(state, snack) {
      state.snackbar.show = snack.show;
      state.snackbar.msg = snack.msg;
      state.snackbar.color = snack.color;
      state.snackbar.timeout = snack.timeout;
    },
    destroySnackbar(state) {
      state.snackbar.show = false;
      state.snackbar.msg = "";
      state.snackbar.color = "";
      state.snackbar.timeout = 5000;
    },
  },
  modules: {
    Projects,
    About,
  },
});
