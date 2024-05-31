import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import taskRoutes from '../Tasks/routes';


const routes: Array<RouteRecordRaw> = [
    ...taskRoutes
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;