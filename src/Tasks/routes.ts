import { RouteRecordRaw } from "vue-router";
import TaskPage from "./pages/TaskPage.vue";

const taskRoutes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "TasksPage",
        component: TaskPage
    }
];

export default taskRoutes