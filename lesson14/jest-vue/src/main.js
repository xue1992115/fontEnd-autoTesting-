import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import TodoList from './container/TodoList/TodoList.vue'
import NotFoundPage from './container/NotFoundPage/index.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
const app = createApp(App)

const routes = [
  {
    path: '/404',
    component: NotFoundPage
  },
  {
    path: '/',
    component: TodoList
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
app.use(router).use(store).mount('#app')
