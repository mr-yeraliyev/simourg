import { defineStore } from 'pinia'
import {
  TaskActions,
  TaskGetters,
  TaskState,
  TaskStoreName,
  Task,
} from '../types'
import { deleteSingleTask, getTasks, putSingleTask, postNewTask } from '../api'

const useTasks = defineStore<
  TaskStoreName,
  TaskState,
  TaskGetters,
  TaskActions
>('useTasks', {
  actions: {
    async fetchTasks(title?: string) {
      const { data } = await getTasks(title)
      data && this.setTasks(data)
    },
    async addTask(newTask: Omit<Task, 'id'>) {
      const { status } = await postNewTask(newTask)
      status && this.fetchTasks()
    },
    async deleteTask(taskId: string) {
      const { status } = await deleteSingleTask(taskId)
      status && this.fetchTasks()
    },
    async editTask(task: Task) {
      const { status } = await putSingleTask(task)
      status && this.fetchTasks()
    },

    setTasks(tasks: Task[]) {
      this.tasks = [...tasks]
    },
    setSingleTask(task: Task | null) {
      this.singleTask = task ? { ...task } : null
    },
  },

  state() {
    return {
      tasks: [],
      singleTask: null,
    }
  },
})

export default useTasks
