/*
 * @Description: 模块内api集合
 * @Author: Narci.Lee(narci2010@qq.com)
 * @Date: 2019-06-11 10:39:04
 * @LastEditTime: 2019-07-03 16:31:25
 * @LastEditors: Please set LastEditors
 */

import { convertRESTAPI, joinQueryStr, isEmpty } from '../../util'
import { baseUrl } from '../config'
import request from '@/utils/request'
import qs from 'qs'

<% _.forEach(data.mocks, function(mock){ %>/** {{mock.description}} */
function {{$$.convertMethod(mock)}}(opts: any= '', queryObject: any= '') {
  if (!isEmpty(baseUrl)) {
    request.defaults.baseURL = baseUrl
  }
  return request({
    method: '{{mock.method}}',
    url: <% if($$.isREST(mock.url)) {%>convertRESTAPI('{{mock.url}}', opts)<%if(mock.method=='post' || mock.method=='put'){%> + joinQueryStr(queryObject)<%}} else {%> '{{mock.url}}'<%if(mock.method=='post' || mock.method=='put'){%> + joinQueryStr(queryObject)<%}} %>,
    <% if(mock.method!='post' && mock.method!='put') {%>params: opts,
    paramsSerializer: params => {
        return qs.stringify(params, { allowDots: true, arrayFormat: 'repeat' })
      }<%} else {%>data:  opts<% } %>
  });
}

<% }) %>export {<% _.forEach(data.mocks, function(mock, i){ %>
  {{$$.convertMethod(mock)}}<% if(data.mocks.length - 1 !== i) { %>,<% } %><% }) %>
};
