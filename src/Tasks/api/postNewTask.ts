import { AxiosResponse } from 'axios'
import api from '../../shared/api'
import { CustomResponse } from '../../shared/types'
import { formatResponse } from '../../shared/utils'
import { Task } from '../types'

export default async function postNewTask(
  newTask: Omit<Task, 'id'>
): Promise<CustomResponse<Task>> {
  const response: AxiosResponse<Task> = await api.post('/tasks', newTask)

  return formatResponse(response)
}
