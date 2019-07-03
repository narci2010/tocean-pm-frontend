var convertUrl = (exports.convertUrl = function (url) {
  // /restful/:id/:list/{id} -> restful_id_list_id
  // /restful/:id/:list/{id}.json -> restful_id_list_id
  var _url = url
    .replace(/:|{|}/g, '')
    .replace(/-/g, '_')
    .split('/')
    .filter(value => !!value)
    .join('_')
  _url = _url.split('.')[0]
  var moduleName = url.split(/\//)[1]
  moduleName = moduleName + '_'
  _url = _url.replace(moduleName, '')
  return _url
})

exports.convertMethod = function (mock) {
  // 防止重名
  // restful_id_list_id => restful_id_list_id_g
  // or
  // restful_id_list_id => restful_id_list_id_p
  return convertUrl(mock.url) + '_' + mock.method.toLowerCase()
}

exports.joinUrl = function () {
  // https://www.easy-mock.com//mock/.... => https://www.easy-mock.com/mock/....
  var url = [].slice.call(arguments, 0).join('/')
  url = url.replace(/:\//g, '://')
  url = url.replace(/([^:\s\%\3\A])\/+/g, '$1/')
  return url
}

exports.isREST = function (url) {
  return /(:|{|})/.test(url)
}

exports.getModule = function (mock) {
  return mock.url.split(/\//)[1]
}
exports.getImportName = function (str) {
  return str.replace(/[\.\'\"\\\/\b\f\n\r\t]/g, '')
}
