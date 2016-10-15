// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router/index.js'
import App from './App'

/* eslint-disable no-new */

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
