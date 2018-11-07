'use strict';

const Controller = require('egg').Controller;

class ApiController extends Controller {
    async getTopics() {
        // 使用this.ctx.query获取请求参数
        var req = this.ctx.query
        console.log(req)
        const res = await this.ctx.service.cnode.getTopics(req)
        this.ctx.body = res;
    }
}

module.exports = ApiController;