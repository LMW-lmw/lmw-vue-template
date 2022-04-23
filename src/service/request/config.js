// const BASE_URL = 'http://120.27.144.169:3000/'
// const BASE_URL = 'http://localhost:3000/'
const TIME_OUT = 10000
let BASE_URL
if (process.env.NODE_ENV === 'development') {
  // 开发环境url
  BASE_URL = 'http://localhost:3002/'
} else if (process.env.NODE_ENV === 'production') {
  // 生产环境接口url
  BASE_URL = ''
} else if (process.env.NODE_ENV === 'test') {
  // 测试环境url
  BASE_URL = ''
}
export { BASE_URL, TIME_OUT }
