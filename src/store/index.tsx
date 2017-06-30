import Vue from 'vue'
import Vuex from 'vuex'
import lottery from './modules/lottery'
import appAlert from './modules/appAlert'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: 'Hello world!',
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    lottery,
    appAlert
  },

  // 严格模式，禁止直接修改 state
  strict: true
});