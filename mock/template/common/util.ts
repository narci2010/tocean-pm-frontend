/*
 * @Description: 工具类
 * @Author: Narci.Lee(narci2010@qq.com)
 * @Date: 2019-07-02 10:08:59
 * @LastEditTime: 2019-07-03 15:59:58
 * @LastEditors: Please set LastEditors
 */

import qs from 'qs'

/**
 * @description:将url转换成rest api（主要是路径接口）
 * @param {string,any}
 * @return:
 */
function convertRESTAPI(url: string, opts: any) {
  if (!opts || !opts.path) {
    return url
  }

  const pathKeys = Object.keys(opts.path)
  let newUrl: string = url

  pathKeys.forEach(key => {
    const r = new RegExp('(:' + key + '|{' + key + '})', 'g')
    newUrl = newUrl.replace(r, opts.path[key])
  })

  return newUrl
}
// Spring MVC @RequestBody 前端就不用stringify转换，否则需要转换
// qs.stringify(opts, { allowDots: true, arrayFormat: 'repeat'}
/**
 * @description: 将对象深层次转化了queryString
 * @param {string}
 * @return:
 */
function joinQueryStr(queryObject: any) {
  let queryStr = qs.stringify(queryObject, {
    allowDots: true,
    arrayFormat: 'repeat'
  })
  if (queryStr.length > 0) {
    return '?' + queryStr
  } else {
    return ''
  }
}

//判断字符是否为空的方法
/**
 * @description:
 * @param {string} obj
 * @return:
 */
function isEmpty(obj: string) {
  if (typeof obj == 'undefined' || obj == null || obj.trim() == '') {
    return true
  } else {
    return false
  }
}

export { convertRESTAPI, joinQueryStr, isEmpty }
