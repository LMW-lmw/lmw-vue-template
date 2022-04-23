import { createRouter, createWebHistory } from 'vue-router'

// 动态加载路由
const routerFiles = require.context('@/views', true, /router\.js$/)
const routes = routerFiles.keys().map((key) => {
  const view = require('@/views' + key.replace('.', ''))
  return view.default
})
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
