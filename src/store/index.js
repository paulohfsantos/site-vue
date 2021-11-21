import Vue from "vue";
import Vuex from "vuex";
// modules
import Projects from "./modules/projects";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    snackbar: {
      show: false,
      msg: "",
      color: "",
      timeout: 6000,
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
  },
  actions: {
    snack({ commit }, snack) {
      commit("changeSnackbar", snack);
    },
  },
  modules: {
    Projects,
  },
});
