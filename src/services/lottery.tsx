import Vue from 'vue'
import Server from './Server'

export default new class Lottery {

  index(): JQueryXHR {
    return Server.ajax('/lotteries', {
      dataType: 'json'
    });
  }

  shuzi(): JQueryXHR {
    return Server.ajax('/lotteries/shuzi', {
      dataType: 'json'
    });
  }

  shuzivn(): JQueryXHR {
    return Server.ajax('/lotteries/shuzivn', {
      dataType: 'json'
    });
  }
}