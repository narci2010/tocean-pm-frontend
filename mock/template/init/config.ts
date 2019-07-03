/*
 * @Description: 局部后台api地址设置，如果这里配置值为空，则采用全局配置
 * @Author: Narci.Lee(narci2010@qq.com)
 * @Date: 2019-06-11 10:39:04
 * @LastEditTime: 2019-07-03 16:06:53
 * @LastEditors: Please set LastEditors
 */

import { env } from '@/utils/config'

const baseUrlObject: { [s: string]: string } = {
  mock:
    '{{$$.joinUrl(config.host, "mock", data.project._id, data.project.url)}}',
  dev: '',
  pre: '',
  prod: ''
}

export const baseUrl = baseUrlObject[env || 'mock']
