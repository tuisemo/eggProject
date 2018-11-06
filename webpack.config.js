'use strict';
module.exports = {
  egg: true,
  framework: 'vue',
  entry: {
    app: 'app/web/page/app/index.js'
  },
  alias: {
    components: 'app/web/components',
    framework: 'app/web/framework',
    store: 'app/web/store',
    vue: 'vue/dist/vue.esm.js',
  },
  dll: ['vue', 'axios', 'vue-router', 'vuex', 'vuex-router-sync'],
  loaders: {},
  plugins: {
    copy: [{
      from: 'app/web/assets/css/bootstrap.min.css',
      to: 'assets/css/bootstrap.min.css'
    }]
  },
  done() {

  }
};