/*
 * @Description: 导入多个后台项目api（后台单个项目时，导入项目目录下的index.ts即可）
 * @Author: Narci.Lee(narci2010@qq.com)
 * @Date: 2019-06-11 10:39:04
 * @LastEditTime: 2019-07-03 13:21:23
 * @LastEditors: Please set LastEditors
 */
<% _.forEach(config.projects, function(project){ %>
import * as {{$$.convertUrl(project.name)}} from './{{project.name}}'<% }) %>

export {<% _.forEach(config.projects, function(project, i){ %>
  {{$$.convertUrl(project.name)}}<% if(config.projects.length - 1 !== i) { %>,<% } %><% }) %>
};
