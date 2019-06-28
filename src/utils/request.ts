import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import { getToken } from '@/utils/auth'
import { baseUrl, isUseToken } from './config'

let UserModule: any
const service = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
  withCredentials: !isUseToken
})

// Request interceptors
service.interceptors.request.use(
  config => {
    // Add X-Token header to every request, you can add other custom headers here
    if (getToken() && isUseToken) {
      // 让每个请求携带token-- ['token']为自定义key 请根据实际情况自行修改
      const token = getToken()
      config.headers.token = token
      config.withCredentials = false
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// Response interceptors
service.interceptors.response.use(
  response => {
    // Some example codes here:
    // code == 0: 成功
    // code == 200: 成功
    // code == 500: 服务器错误
    // code == 401: 没有权限
    // code == 50008: invalid token
    // code == 50012: already login in other place
    // code == 50014: token expired
    // code == 60204: account or password is incorrect
    // You can change this part for your own usage.
    const res = response.data
    if (res === undefined || res.code === undefined) {
      console.log(
        '返回数据格式不符合框架规定，请检查mock数据真实性或后台接口返回数据是符合公司约定规则。'
      )
      Message({
        message: '后台返回数据格式不符合公司规范。',
        type: 'error',
        duration: 5 * 1000
      })
    }
    if (res.code === 0 || res.code === 200) {
      return res
    } else {
      if (res.code === 500 || res.code === 503) {
        Message({
          message: res.msg,
          type: 'error',
          duration: 5 * 1000
        })
      } else if (res.code === 401) {
        MessageBox.confirm(
          '你已被登出，可以取消继续留在该页面，或者重新登录',
          '确定登出',
          {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: 'warning'
          }
        ).then(() => {
          UserModule.FedLogOut().then(() => {
            location.reload() // To prevent bugs from vue-router
          })
        })
      }

      // return Promise.reject(new Error('error with code: ' + response.status))
    }
  },
  error => {
    // for (const key in error.response) {
    //   console.log(key)
    // }
    // console.log(error)
    // let errorStr = error.toString()
    // console.log(errorStr)
    let msg: string

    if (error.response.status >= 100 && error.response.status < 200) {
      msg = '需要请求者继续执行操作。'
    } else if (error.response.status >= 300 && error.response.status < 400) {
      msg = '重定向，需要进一步的操作以完成请求。'
    } else if (error.response.status >= 400 && error.response.status < 500) {
      msg = '客户端错误，请求包含语法错误或无法完成请求。'
      if (error.response.status === 404) {
        msg = '访问资源（接口）不存在。'
      } else if (error.response.status === 403) {
        msg = '服务器禁止跨域访问。'
      } else if (error.response.status === 401) {
        msg = '服务器禁止访问该资源。'
      }
    } else if (error.response.status >= 500 && error.response.status < 600) {
      msg = '服务器错误，服务器在处理请求的过程中发生了错误。'
    } else {
      msg = '未知错误，请联系管理员。'
    }
    console.log(error.message)
    Message({
      message: msg,
      type: 'error',
      duration: 5 * 1000
    })
  }
)

export default service
