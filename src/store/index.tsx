import Vue from 'vue'
import Vuex from 'vuex'
import lotteryServ from '../services/lottery'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: 'Ha!',
    lotteries: []
  },
  mutations: {
    /**
     * 设定彩种列表
     * @param state 
     * @param lotteries 
     */
    setLotteries(state: any, lotteries: Array<any>) {
      state.lotteries = lotteries;
    }
  },
  actions: {
    loadLotteries({ commit }) {
      var jqxhr: JQueryXHR = lotteryServ.index();

      jqxhr.then((response: any) => {
        commit("setLotteries", response.data);
      });

      return jqxhr;
    }
  },

  // 严格模式，禁止直接修改 state
  strict: true
});