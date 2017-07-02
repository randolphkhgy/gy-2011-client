import Vuex from 'vuex'
import lotteryServ from '../../services/lottery'

const state = {
  lotteries: [],
  selected: []
};

const mutations: Vuex.MutationTree<any> = {
  /**
   * 设定彩种列表
   * @param state 
   * @param lotteries 
   */
  setLotteries(state: any, lotteries: Array<any>) {
    state.lotteries = lotteries;
  },

  setSelectedLotteries(state, lotteries) {
    state.selected = lotteries;
  }
};

const actions: Vuex.ActionTree<any, any> = {
  loadLotteries({ commit }) {
    var jqxhr: JQueryXHR = lotteryServ.index();

    jqxhr.then((response: any) => {
      commit("setLotteries", response.data);
    });

    return jqxhr;
  },
  loadShuzi({ commit }) {
    var jqxhr: JQueryXHR = lotteryServ.shuzi();

    jqxhr.then((response: any) => {
      commit("setLotteries", response.data);
    });
  },
  loadShuzivn({ commit }) {
    var jqxhr: JQueryXHR = lotteryServ.shuzivn();

    jqxhr.then((response: any) => {
      commit("setLotteries", response.data);
    });
  }
};

export default {
  state,
  mutations,
  actions
}