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

  elevenfive(): JQueryXHR {
    return Server.ajax('/lotteries/elevenfive', {
      dataType: 'json'
    });
  }

  draw(lotteryid:number, date: Date): JQueryXHR {
    var dd = date.getDate();
    var mm = date.getMonth()+1;
    var yyyy = date.getFullYear();
    var dateString = [yyyy, mm, dd].join('-');

    return Server.ajax('/issue/drawdate', {
      type: 'POST',
      dataType: 'json',
      data: {lotteryid, date: dateString}
    });
  }
}