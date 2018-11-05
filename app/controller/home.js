'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, egg';
  }
  async list(){
    // const dataList = {
    //   list: [
    //     { id: 1, title: 'this is news 1', url: '/news/1' },
    //     { id: 2, title: 'this is news 2', url: '/news/2' }
    //   ]
    // };
    // 从service获取数据
    const list = await this.ctx.service.news.list()
    await this.ctx.render('index.njk', {list});
  }
}

module.exports = HomeController;
