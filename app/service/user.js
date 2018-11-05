'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getUser(name) {
        // 获取主题首页
        // read config
        const { host } = this.config.proxys;
    
        // use build-in http client to GET cnode api
        const { data: res } = await this.ctx.curl(`${host}/user/${name}`, {
          method: 'GET',
          data: {
            page: params.page,
            tab: params.tab,
            limit: params.limit,
            mdrender: params.mdrender,
          },
          dataType: 'json',
        });
    
        return res;    
  }
  async postAccesstoken(accesstoken) {
        // read config
        const { host } = this.config.proxys;
    
        // use build-in http client to GET cnode api
        const { data: res } = await this.ctx.curl(`${host}/accesstoken`, {
          method: 'POST',
          data: {
            accesstoken: accesstoken
          },
          dataType: 'json',
        });
    
        return res;    
  }
}

module.exports = UserService;
