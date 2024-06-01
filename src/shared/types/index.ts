export type CustomResponse<T> = {
  data: T | null
  message: string
  status: boolean
}
