import type { Product, ProductInput } from '@/model/product'
import http from '@/api/axios'

interface ProductPaging {
  products: Product[]
  limit: number
  skip: number
  total: number
}

interface ProductResponse {
  id: number
  title: string
  description: string
  price: number
}

const products = {
  getById(id: string): Promise<Product> {
    return http.get(`/products/${id}`)
  },

  getAll(params: { limit: number, page: number, q?: string }): Promise<ProductPaging> {
    const pagingParams = {
      limit: params.limit.toString(),
      skip: (params.page * params.limit).toString(),
    }

    if (params.q) {
      const urlParam = new URLSearchParams({ q: params.q, ...pagingParams }).toString()
      return http.get(`/products/search?${urlParam}`)
    }

    const urlParam = new URLSearchParams(pagingParams).toString()
    return http.get(`/products?${urlParam}`)
  },
  create(params: ProductInput): Promise<ProductResponse> {
    return http.post('products/add', params)
  },
}
export default products
