import { Task } from "."

export type TaskStoreName = 'useTasks'

export type TaskState = {
  tasks: Task[]
}

export type TaskGetters = Record<string, never>

export type TaskActions = {
  fetchTasks(): void
  setTasks(tasks: Task[]): void
}