import axios from "axios";

const state = {
  about: {
    name: "",
    desc: "",
    image: "",
    email: "",
  },
};

const getters = {
  about: (state) => state.about,
};
const mutations = {
  setAbout(state, about) {
    state.about = about;
  },
  resetAbout(state) {
    state.about = {
      name: "",
      desc: "",
      image: "",
      email: "",
    };
  },
};
const actions = {
  getAbout({ commit }) {
    axios
      .get("http://localhost:5000/about")
      .then((response) => {
        console.log("about", response);
        commit("setAbout", response.data);
      })
      .catch((error) => {
        console.log("actions", error);
      });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
