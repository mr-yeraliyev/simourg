import api from '../../shared/api'
import { CustomResponse } from '../../shared/types'
import { Task } from '../types'

export default async function postNewTask(
  newTask: Omit<Task, 'id'>
): Promise<CustomResponse<Task>> {
  const { data, status, statusText } = await api.post('/tasks', newTask)
  const ok = status >= 200 && status < 300
  return {
    data: data,
    status: ok,
    message: statusText,
  }
}
