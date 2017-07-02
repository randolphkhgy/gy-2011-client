import Vuex from 'vuex'

const mutations: Vuex.MutationTree<any> = {
  changeTitle(state, title: string) {
    state.title = title;
  }
};

export default mutations