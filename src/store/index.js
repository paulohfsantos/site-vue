import Vue from "vue";
import Vuex from "vuex";
// modules
import Projects from './modules/projects'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Projects
  },
});
