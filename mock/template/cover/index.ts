import { convertRESTAPI,joinQueryStr } from '../util';
import request from '@/utils/request'
import qs from 'qs'


<% _.forEach(data.mocks, function(mock){ %>/** {{mock.description}} */
function {{$$.convertMethod(mock)}}(opts: any= '', queryObject: any= '') {
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
