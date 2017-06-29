import serverConfig from '../config/server.config'

export default new class Server {
  readonly baseUrl: string

  constructor() {
    this.baseUrl = serverConfig.baseUrl.replace(/\/+$/, '') + '/';
  }

  ajax(path:string, settings: any): JQueryXHR {

    if (path === null) {
      return jQuery.ajax(settings);
    } else {
      return jQuery.ajax(this.url(path), settings);
    }
  }

  url(path: string): string {
    path = path.replace(/^\/+/, '');
    return this.baseUrl + path;
  }
};
