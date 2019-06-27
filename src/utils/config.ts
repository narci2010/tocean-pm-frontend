export const isUseToken: boolean = true // 是否使用token

export const isUseLogin: boolean = true // 设置为false时，验证码随便输入即可登陆
export const env: string = 'dev' // 当前使用那个环境服务器

// export const baseUrl: string = 'https://devos.toceansoft.com' // 请求域名
export const baseUrl: string = {
  mock: 'http://devos.toceansoft.com:7300/mock/5cfe30523505c600844d19a7/devos',
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
