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
export { convertRESTAPI }
