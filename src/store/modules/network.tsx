import Vuex from 'vuex'

const state = {
  loading: false
};

const mutations: Vuex.MutationTree<any> = {
  setLoading(state, loading: boolean) {
    state.loading = loading;
  }
};

const actions: Vuex.ActionTree<any, any> = {
  startLoading({ commit }) {
    commit("setLoading", true);
  },
  stopLoading({ commit}) {
    commit("setLoading", false);
  }
};

export default {
  state,
  mutations,
  actions
};
