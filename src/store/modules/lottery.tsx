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
  loadLotteries({ commit, dispatch }) {
    var jqxhr: JQueryXHR = lotteryServ.index();

    dispatch("startLoading");

    jqxhr.then((response: any) => {
      dispatch("stopLoading");
      commit("setLotteries", response.data);
    });

    return jqxhr;
  },
  loadShuzi({ commit, dispatch }) {
    var jqxhr: JQueryXHR = lotteryServ.shuzi();

    dispatch("startLoading");

    jqxhr.then((response: any) => {
      dispatch("stopLoading");
      commit("setLotteries", response.data);
    });
  },
  loadShuzivn({ commit, dispatch }) {
    var jqxhr: JQueryXHR = lotteryServ.shuzivn();

    dispatch("startLoading");

    jqxhr.then((response: any) => {
      dispatch("stopLoading");
      commit("setLotteries", response.data);
    });
  },
  loadElevenFive({ commit, dispatch }) {
    var jqxhr: JQueryXHR = lotteryServ.elevenfive();

    dispatch("startLoading");

    jqxhr.then((response: any) => {
      dispatch("stopLoading");
      commit("setLotteries", response.data);
    });
  }
};

export default {
  state,
  mutations,
  actions
}