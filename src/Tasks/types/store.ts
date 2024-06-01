import { Task } from '.'

export type TaskStoreName = 'useTasks'

export type TaskState = {
  tasks: Task[]
  singleTask: Task | null
}

export type TaskGetters = Record<string, never>

export type TaskActions = {
  fetchTasks(title?: string): void
  addTask(newTask: Omit<Task, 'id'>): void
  deleteTask(taskId: string): void
  editTask(task: Task): void

  setTasks(tasks: Task[]): void
  setSingleTask(task: Task | null): void
}
