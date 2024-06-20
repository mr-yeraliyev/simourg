import { RouteRecordRaw } from 'vue-router'
import TaskPage from './pages/TaskPage.vue'
import SecondVersionPage from './pages/SecondVersionPage.vue'

const taskRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'SecondVersionPage',
    component: SecondVersionPage,
  },
  {
    path: '/task',
    name: 'TasksPage',
    component: TaskPage,
  },
]

export default taskRoutes
