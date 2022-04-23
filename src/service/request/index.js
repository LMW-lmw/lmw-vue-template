import axios from 'axios'

class LmwAxios {
  constructor(config) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    // 全局请求拦截
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        console.log(err)
      }
    )
    // 全局响应拦截
    this.instance.interceptors.response.use(
      (res) => {
        return res
      },
      (err) => {
        if (err && err.response) {
          switch (err.response.status) {
            case 400:
              console.log('请求错误')
              break
            case 401:
              console.log('未授权访问')
              break
            default:
              console.log('其他错误信息')
          }
        }
        return err
      }
    )
  }
  request(config) {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      this.instance
        .request(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
          return err
        })
    })
  }
  get(config) {
    return this.request({ ...config, method: 'GET' })
  }
  post(config) {
    return this.request({ ...config, method: 'POST' })
  }
  delete(config) {
    return this.request({ ...config, method: 'DELETE' })
  }
  patch(config) {
    return this.request({ ...config, method: 'PATCH' })
  }
}
export default LmwAxios
