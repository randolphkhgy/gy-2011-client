import Vue from 'vue'
import App from './components/App.vue'
import store from './store/index'
import router from './router'

new Vue({
  store,
  router,
  render: h => h(App),
  // mounted () {
    // this.$store.dispatch("loadLotteries");
    // this.$store.dispatch('loadShuzi');
    // this.$store.dispatch('loadShuzivn');
  // }
}).$mount('#app');
