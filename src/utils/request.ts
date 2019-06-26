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
      // for (const key in res) {
      //   console.log(res.additionalProp1)
      // }
      if (response.status === 200) {
        console.log(
          '返回数据格式不符合框架规定，请检查mock数据真实性或后台接口返回数据是符合公司约定规则。'
        )
      } else {
        return Promise.reject(new Error('error with code: ' + res.code))
      }
    }
  },
  error => {
    Message({
      message: error.msg,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
