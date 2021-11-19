import axios from "axios";

const state = {
  projects: [],
  project: {
    id: 0,
    name: "",
    description: "",
    type: "",
    status: "",
    techs: [],
    url: "",
  },
};

const getters = {
  projects: (state) => {
    console.log("projects", state.projects);
    return state.projects;
  },
  project: (state) => state.project,
};

const mutations = {
  setProjects(state, projects) {
    state.projects = projects;
  },
  setProject(state, project) {
    state.project = project;
  },
  resetProject(state) {
    state.project = {
      id: 0,
      name: "",
      description: "",
      type: "",
      status: "",
      techs: [],
      url: "",
    };
  },
  resetProjects(state) {
    state.projects = [];
  },
};

const actions = {
  getProjects({ commit }) {
    axios
      .get("http://localhost:5000/projects")
      .then((response) => {
        console.log(response);
        commit("setProjects", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getProject({ commit }, id) {
    axios
      .get(`http://localhost:5000/projects/${id}`)
      .then((response) => {
        console.log(response);
        commit("setProject", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
