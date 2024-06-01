import { AxiosResponse } from 'axios'
import { CustomResponse } from '../types'

export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }
  return new Date(dateString).toLocaleDateString('ru-RU', options)
}
//generic function that formats axios response to our custom response
export const formatResponse = <T>(
  response: AxiosResponse<T, any>
): CustomResponse<T> => {
  const { data, status, statusText } = response

  const ok = status >= 200 || status < 300
  return {
    data: data,
    status: ok,
    message: statusText,
  }
}
