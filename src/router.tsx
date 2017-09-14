import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

export default new VueRouter({
  // mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/shuzi',
      name: 'shuzi',
      component: require('./pages/ShuziLotteries.vue'),
    },
    {
      path: '/shuzivn',
      name: 'shuzivn',
      component: require('./pages/ShuzivnLotteries.vue'),
    },
    {
      path: '/elevenfive',
      name: 'elevenfive',
      component: require('./pages/ElevenFiveLotteries.vue'),
    }
  ]
});