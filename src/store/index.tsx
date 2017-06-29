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
    setLotteries(state, lotteries: Array<object>) {
      state.lotteries = lotteries;
    }
  },
  actions: {
    loadLotteries({ commit }) {
      var jqxhr: JQueryXHR = lotteryServ.index();

      jqxhr.then((response) => {
        commit("setLotteries", response.data);
      });

      return jqxhr;
    }
  },

  // 严格模式，禁止直接修改 state
  strict: true
});