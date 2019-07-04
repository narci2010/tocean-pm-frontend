/*
 * @Description: 授权相关接口
 * @Author: Narci.Lee(narci2010@qq.com)
 * @Date: 2019-06-11 10:39:04
 * @LastEditTime: 2019-07-04 14:54:33
 * @LastEditors: Please set LastEditors
 */

import { getItem, setItem, removeItem } from '@/utils/common'

const TokenKey = 'tocean-pm'

export const getToken = () => {
  return getItem(TokenKey)
}

export const setToken = (token: string) => {
  setItem(TokenKey, token)
}

export const removeToken = () => {
  removeItem(TokenKey)
}
