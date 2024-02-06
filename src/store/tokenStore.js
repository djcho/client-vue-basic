
import Vuex from 'vuex';


const tokenStore = new Vuex.Store({
  state: {
    accessToken: null,
    tokenType: null,
    accessTokenExpiresIn : 0
  },
  mutations: {
    setAccessToken(state, tokenData) {
      state.accessToken = tokenData.access_token;
      state.tokenType = tokenData.token_type;
      state.accessTokenExpiresIn = tokenData.access_token_expires_in;
    },
    clearAccessToken(state) {
      state.accessToken = null;
      state.tokenType = null;
      state.accessTokenExpiresIn = 0;
    },
  },
  actions: {
    login({ commit }, tokenData) {
      commit('setAccessToken', tokenData);
    },
    logout({ commit }) {
      commit('clearAccessToken');
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.accessToken,
  },
});

export default tokenStore;