import Vue from 'vue'
import App from './App.vue'
import store from './store/index'

new Vue({
  el: '#app',
  store,
  render: h => h(App),
  mounted () {
    this.$store.dispatch("loadLotteries");
  }
});
