import { getIpifyApi } from "@/helpers/getIpifyApi";

export default {
  namespaced: true,

  state: {
    ip: false,
    loader: false,
    error: false,
  },
  mutations: {
    search(state, payload) {
      state.ip = payload;
    },
    error(state, payload) {
      state.error = payload;
    },
    loader(state, payload) {
      state.loader = payload;
    },
  },
  actions: {
    async searchIpAddress({ commit }, ip) {
      commit("loader", true);

      const response = await getIpifyApi(ip);

      if (!response.status) {
        commit("search", response);
        commit("error", false);
        commit("loader", false);
      } else {
        commit("error", response);
        commit("loader", false);
      }
    },
    searchIp({ commit }, ip) {
      if (ip === "") {
        commit("search", false);
        commit("error", false);
      }
    },
  },
};
