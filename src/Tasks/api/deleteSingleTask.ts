import api from '../../shared/api'
import { CustomResponse } from '../../shared/types'

export default async function deleteSingleTask(
  taskId: string
): Promise<CustomResponse<null>> {
  const { status, statusText } = await api.delete(`/tasks/${taskId}`)
  const ok = status >= 200 && status < 300
  return {
    data: null,
    status: ok,
    message: statusText,
  }
}
