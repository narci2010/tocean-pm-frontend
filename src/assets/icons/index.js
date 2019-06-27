import Vue from 'vue'
import SvgIcon from '@/components/common/SvgIcon.vue' // svg组件

// 全局注册
// 貌似这个入口配置性质的js不能改为ts
Vue.component('svg-icon', SvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)
