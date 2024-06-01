import api from '../../shared/api'
import { CustomResponse } from '../../shared/types'
import { Task } from '../types'

export default async function getTasks(): Promise<CustomResponse<Task[]>> {
  const response = await api.get('/tasks')

  return {
    data: response.data,
    status: response.status >= 200 || response.status < 300,
    message: response.statusText,
  }
}
