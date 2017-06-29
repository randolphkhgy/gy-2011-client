import Vue from 'vue'
import Server from './Server'

export default {
  index(): JQueryXHR {
    return Server.ajax('/lotteries', {
      dataType: 'json'
    });
  }
}