'use strict';

const Service = require('egg').Service;

class CnodeService extends Service {
    async getTopics(params = {}) {
        // 获取主题首页
        // read config
        const {
            host
        } = this.config.proxys;

        // use build-in http client to GET cnode api
        const {
            data: res
        } = await this.ctx.curl(`${host}/topics`, {
            method: 'GET',
            data: {
                page: params.page || 1,
                tab: params.tab || 'good',
                limit: params.limit || 10,
                mdrender: params.mdrender || 'true',
            },
            dataType: 'json',
        });

        return res;
    }
    async getTopicDetail(id, params) {
        // 获取主题详情
        // read config
        const {
            host
        } = this.config.proxys;

        // use build-in http client to GET cnode api
        const {
            data: res
        } = await this.ctx.curl(`${host}/topic/${id}`, {
            method: 'GET',
            data: {
                mdrender: params.mdrender,
                accesstoken: params.accesstoken
            },
            dataType: 'json',
        });

        return res;
    }
}

module.exports = CnodeService;