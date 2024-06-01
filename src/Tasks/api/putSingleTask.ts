import { AxiosResponse } from 'axios'
import api from '../../shared/api'
import { CustomResponse } from '../../shared/types'
import { formatResponse } from '../../shared/utils'
import { Task } from '../types'

export default async function putSingleTask(
  task: Task
): Promise<CustomResponse<Task>> {
  const response: AxiosResponse<Task> = await api.put(`/tasks/${task.id}`, task)

  return formatResponse(response)
}
