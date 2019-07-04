import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/scss/common.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/icons'
// import SvgIcon from '_c/common/SvgIcon.vue' // svg组件
import VueLogger from 'vuejs-logger'
import VueI18n from 'vue-i18n'
// Internationalization
import i18n from './lang'
import { setItem } from '@/utils/common'

Vue.config.productionTip = false
// Vue.use(ElementUI)
Vue.use(ElementUI, {
  size: 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

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
  i18n,
  render: h => h(App)
}).$mount('#app')

window.logger = instance.$log
setItem('language', 'en') // 设置语言为中文 en则英文
