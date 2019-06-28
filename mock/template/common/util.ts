import qs from 'qs'
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

export { convertRESTAPI, joinQueryStr }
