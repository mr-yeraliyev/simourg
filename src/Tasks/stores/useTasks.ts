
import { defineStore } from 'pinia'
import { TaskActions, TaskGetters, TaskState, TaskStoreName, Task } from '../types'
import { getTasks } from '../api'


const useTasks = defineStore<TaskStoreName, TaskState, TaskGetters, TaskActions>('useTasks', {
  actions: {
    async fetchTasks() {
        console.log('render fetchTasks method');
        
        await getTasks()

    },
    setTasks(tasks: Task[]) {
        this.tasks = tasks
    }
  },

  state () {
    return {
      tasks: []
    }
  }
})

export default useTasks