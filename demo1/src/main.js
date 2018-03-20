// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './http'
import vuewechattitle from 'vue-wechat-title'
import 'element-ui/lib/theme-chalk/index.css'
import Element from 'element-ui'

Vue.use(Element)
Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.use(vuewechattitle)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
