import api from "../../shared/api";

export default async function getTasks() {
    console.log('render getTasks method');
    
    const tasks = await api.get('/tasks')
    console.log(tasks);
    
}