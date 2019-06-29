import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/scss/common.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/icons'
import VueLogger from 'vuejs-logger'

// import SvgIcon from '_c/common/SvgIcon.vue' // svg组件

Vue.config.productionTip = false
Vue.use(ElementUI)

// 全局注册
// Vue.component('svg-icon', SvgIcon)

// logLevels :  ['debug', 'info', 'warn', 'error', 'fatal']
const isProduction = process.env.NODE_ENV === 'production'

const options = {
  isEnabled: true,
  logLevel: isProduction ? 'error' : 'debug',
  stringifyArguments: false,
  showLogLevel: true,
  showMethodName: true,
  separator: '|',
  showConsoleColors: true
}

Vue.use(VueLogger, options)

const instance = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// instance.$log.debug('test2222222')
// console.logger = instance.$log

// tslint:disable-next-line:no-var-keyword
// var logger = () => {
//   console.log('aaaa')
// }
// logger()

window.logger = instance.$log
