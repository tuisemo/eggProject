'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
    async list() {
        // read config
        const { host } = this.config.proxys;
    
        // use build-in http client to GET hacker-news api
        const { data: res } = await this.ctx.curl(`${host}/newsList`, {
          data: {
            // orderBy: '"$key"'
          },
          dataType: 'json',
        });
    
        // parallel GET detail
        const newsList = await Promise.all(
            res.map(el => {
            const url = `${host}/newsDetail/${el.id}`;
            return this.ctx.curl(url, { dataType: 'json' });
          })
        );
        return newsList.map(res => res.data);
      }
}

module.exports = NewsService;
