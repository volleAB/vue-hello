let userConfig = {
  baseURL: '/api',
  timeout: 5000, //请求超过5秒即超时返回错误
  headers: { 'Content-Type': 'application/json;charset=UTF-8' },
}

let movieConfig = {
  // baseURL: '/movieapi',
  timeout: 5000, //请求超过5秒即超时返回错误
  headers: { 'Content-Type': 'application/json;charset=UTF-8' }
}

module.exports = {
  userConfig,
  movieConfig
}
