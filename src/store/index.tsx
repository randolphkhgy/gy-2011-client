import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lotteries: []
  },
  mutations: {
    setLotteries(state, lotteries: Array<object>) {
      state.lotteries = lotteries;
    }
  },

  // 严格模式，禁止直接修改 state
  strict: true
});