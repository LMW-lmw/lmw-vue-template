import { createStore } from 'vuex'

const modules = {}
// 深度读取当前文件夹下的index.js
const modulesFiles = require.context('./', true, /index\.js/)
modulesFiles
  .keys()
  .filter((key) => {
    // 去除当前文件
    if (key === './index.js') return false
    return true
  })
  .map((key) => {
    // 将路径的./modules/替换成''
    const path = key.replace('./modules/', '')
    // 将路径的/index.js替换成''
    // 此时name只剩模块的文件夹名字
    const name = path.replace('/index.js', '')
    // 获取模块
    const module = require(`${key}`)
    // 将模块写入modules
    modules[`${name}`] = module.default
  })
const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: modules,
})
export default store
