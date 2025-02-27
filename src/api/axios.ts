import type { AxiosInstance, AxiosResponse } from 'axios'
import axios from 'axios'

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 3000,
})

instance.interceptors.response.use(
  (response: AxiosResponse) => response.data,
)

export default instance
