import api from '../../shared/api'
import { CustomResponse } from '../../shared/types'
import { Task } from '../types'

export default async function putSingleTask(
  task: Task
): Promise<CustomResponse<Task>> {
  const { data, status, statusText } = await api.put(`/tasks/${task.id}`, task)
  const ok = status >= 200 && status < 300
  return {
    data: data,
    status: ok,
    message: statusText,
  }
}
