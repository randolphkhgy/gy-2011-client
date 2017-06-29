import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import lotteryServ from './services/lottery'

new Vue({
  el: '#app',
  store,
  render: h => h(App),
  mounted () {
    var jqxhr: JQueryXHR = lotteryServ.index();

    jqxhr.then((response) => {
      console.dir(response);
      // this.$store.commit("setLotteries", );
    });
  }
});

(function ($) {
  function getIssues() {
    return $.ajax({
      url: 'http://gy-2011-server.app/issues',
      dataType: 'json'
    });
  }
})(jQuery);