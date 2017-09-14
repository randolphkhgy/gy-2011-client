var window = require("window");

var config = window.gy2011clientConfig || {};

export default {
  baseUrl: config.baseUrl || "http://gy-2011-server.app"
}