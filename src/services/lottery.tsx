import Vue from 'vue'

export default {
  index(): JQueryXHR {
    return jQuery.ajax({
      url: 'http://gy-2011-server.app/lotteries',
      dataType: 'json'
    });
  }
}