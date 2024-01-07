import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: null,
    isLoggedIn: localStorage.getItem("lbUser"),
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    clearToken(state) {
      state.token = null;
    },
  },
  actions: {
    setToken({ commit }, token) {
      commit("setToken", token);
    },
    clearToken({ commit }) {
      commit("clearToken");
    },
  },
});
