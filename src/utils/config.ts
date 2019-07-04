/*
 * @Description: 全局配置信息
 * @Author: Narci.Lee(narci2010@qq.com)
 * @Date: 2019-06-11 10:39:04
 * @LastEditTime: 2019-07-04 14:12:29
 * @LastEditors: Please set LastEditors
 */

export const isUseToken: boolean = true // 是否使用token
export const isUseLogin: boolean = true // 设置为false时，验证码随便输入即可登陆
export let env: string = 'dev'

switch (process.env.NODE_ENV) {
  case 'development':
    env = 'dev' // 当前使用那个环境服务器
    break
  case 'mock':
    env = 'mock' // mock环境
    break
  case 'production':
    env = 'prod' // 生产环境
    break
  case 'alpha':
    env = 'pre' // 预发环境
    break
}

// export const baseUrl: string = 'https://devos.toceansoft.com' // 请求域名
// 全局设置后台api地址
export const baseUrl: string = {
  mock: 'http://devos.toceansoft.com:7300/mock/5d146c6b3505c600844d1a74/devos2',
  dev: 'http://192.168.1.188/', // 开发环境
  pre: '', // 预发环境
  prod: '' // 生产环境
}[env || 'mock']

/**
 * 请求的公共参数
 */
export const conmomPrams: any = {}

/**
 * @description token在Cookie中存储的天数，默认1天
 */
export const cookieExpires: number = 1
