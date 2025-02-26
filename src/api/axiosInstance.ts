import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'

const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:5173',
  timeout: 10000, // 10 giây timeout
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

api.interceptors.request.use(
  function (config) {
    return config
  },
  function (err) {
    return Promise.reject(err)
  },
)

api.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error) => {
    if (error.response) {
      // bắt status và in ra lỗi
      console.error(`Error ${error.response.status}: ${error.response.statusText}`)
      console.error('Response data:', error.response.data)
    } else {
      console.error('Network or server error:', error.message)
    }
    return Promise.reject(error)
  },
)

export default api
