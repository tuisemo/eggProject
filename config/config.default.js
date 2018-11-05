'use strict';

module.exports = appInfo => {
  const exports = {};

  // use for cookie sign key, should change to your own and keep security
  exports.keys = appInfo.name + '_1541398920146_4382';
  
  exports.accesstoken = 'bfa08244-b855-4cb9-b339-f729ce2c00dd';

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
    host:'https://cnodejs.org/api/v1'
  }

  return exports;
};
