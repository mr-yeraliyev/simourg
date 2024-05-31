export type Task = {
    id: number,
    title: string,
    description: string,
    dueDate: string | Date,
    completed: boolean
}

export * from './store'