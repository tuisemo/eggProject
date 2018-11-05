'use strict';

module.exports = appInfo => {
  const exports = {};

  // use for cookie sign key, should change to your own and keep security
  exports.keys = appInfo.name + '_1541398920146_4382';

  // 配置需要的中间件，数组顺序即为中间件的加载顺序
  exports.middleware = ['access'];

  // 页面模板引擎
  exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.njk': 'nunjucks',
    },
  };

  // 静态数据代理服务
  exports.proxys={
    host:'http://localhost:3000'
  }

  return exports;
};
