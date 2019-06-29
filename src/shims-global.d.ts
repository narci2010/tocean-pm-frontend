import Vue from 'vue'
import Log from './types/log'

declare module '*.ts' {
  export default Vue
}

// 声明全局方法
declare module 'vue/types/vue' {
  interface Vue {
    $Message: any
    $Modal: any
    $log: Log
  }
}

declare global {
  var logger: Log
  interface Window {
    logger: Log
  }
}
