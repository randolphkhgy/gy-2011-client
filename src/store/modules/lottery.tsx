import Vuex from 'vuex'
import lotteryServ from '../../services/lottery'

const state = {
  lotteries: []
};

const mutations: Vuex.MutationTree<any> = {
  /**
   * 设定彩种列表
   * @param state 
   * @param lotteries 
   */
  setLotteries(state: any, lotteries: Array<any>) {
    state.lotteries = lotteries;
  }
};

const actions: Vuex.ActionTree<any, any> = {
  loadLotteries({ commit }) {
    var jqxhr: JQueryXHR = lotteryServ.index();

    jqxhr.then((response: any) => {
      commit("setLotteries", response.data);
    });

    return jqxhr;
  }
};

export default {
  state,
  mutations,
  actions
}