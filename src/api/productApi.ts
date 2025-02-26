import api from '@/api/axiosInstance'
import type { Product } from '@/model/product'
type ProductAPI = Promise<{ products: Product[]; limit: number; skip: number; total: number }>
export function getAllWithLimitAndSkip(params: { limit: string; page: string }): ProductAPI {
  const param = {
    limit: params.limit,
    skip: (parseInt(params.page) * parseInt(params.limit)).toString(),
  }
  const urlParam = new URLSearchParams(param).toString()
  return api.get(`https://dummyjson.com/products?${urlParam}`)
}

export function getById(id: string): Promise<Product> {
  return api.get(`https://dummyjson.com/products/${id}`)
}

export function getByKeywork(params: { limit: string; page: string; q: string }): ProductAPI {
  const param = {
    q: params.q,
    limit: params.limit,
    skip: (parseInt(params.page) * parseInt(params.limit)).toString(),
  }
  const urlParam = new URLSearchParams(param).toString()
  return api.get(`https://dummyjson.com/products/search?${urlParam}`)
}
