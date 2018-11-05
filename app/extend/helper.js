'use strict';
/**
 * 框架会把 app/extend/helper.js 中定义的对象与内置 helper 的 prototype 对象进行合并，
 * 在处理请求时会基于扩展后的 prototype 生成 helper 对象。
 */
const manba = require('manba');

module.exports = {
    formatDate(input, config = 'l') {
        // this 是 helper 对象，在其中可以调用其他 helper 方法
        // this.ctx => context 对象
        // this.app => application 对象
        return manba(input).format(config);
    },
};