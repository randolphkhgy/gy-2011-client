import Vuex from 'vuex'

const state = {
  active: false,
  class: '',
  message: ''
};

const mutations: Vuex.MutationTree<any> = {
  alertSet(state, { message = '', classname = ''}) {
    state.message = message;
    state.class   = classname;
  },
  alertShow(state) {
    state.active = true;
  },
  alertHide(state) {
    state.active = false;
  },
  alertToggle(state) {
    state.active = !state.active;
  }
};

const actions: Vuex.ActionTree<any, any> = {
  alert({ commit }, payload) {
    commit("alertSet", payload);
    commit("alertShow");
  }
};

export default {
  state,
  mutations,
  actions
};