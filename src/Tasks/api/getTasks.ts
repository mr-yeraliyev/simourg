import { AxiosResponse } from 'axios'
import api from '../../shared/api'
import { CustomResponse } from '../../shared/types'
import { formatResponse } from '../../shared/utils'
import { Task } from '../types'

export default async function getTasks(
  title?: string
): Promise<CustomResponse<Task[]>> {
  const response: AxiosResponse<Task[]> = await api.get(
    `/tasks${title ? '?title=' + title : ''}`
  )

  return formatResponse(response)
}
