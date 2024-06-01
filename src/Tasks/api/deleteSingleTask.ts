import { AxiosResponse } from 'axios'
import api from '../../shared/api'
import { CustomResponse } from '../../shared/types'
import { formatResponse } from '../../shared/utils'

export default async function deleteSingleTask(
  taskId: string
): Promise<CustomResponse<null>> {
  const response: AxiosResponse<null> = await api.delete(`/tasks/${taskId}`)

  return formatResponse(response)
}
