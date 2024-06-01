export type Task = {
  id: number | string
  title: string
  description: string
  dueDate: string | Date
  completed: boolean
}

export * from './store'
