import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import https from './utils/request'
import timeFormat from './utils/timeFormat'
import dateFormat from './utils/dataFormat'
import resetSetItem from './utils/resetSetItem'
//导入全局样式表
import './assets/css/global.css'
//导入jquery
import $ from 'jquery'

//取消提示
Vue.config.productionTip = false;

//原型链挂载
Vue.prototype.$http = https;
Vue.prototype.$ = $;
Vue.prototype.resetSetItem = resetSetItem


//全局过滤器
Vue.filter('timeFormat',timeFormat)

Vue.filter('dateFormat',dateFormat)



new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
