'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const data = await this.ctx.service.cnode.getTopics()
    console.log(data)
    this.ctx.body = data;
    // await this.ctx.render('index.njk', {html:data});
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
