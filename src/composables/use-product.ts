import type { ProductInput } from '@/model/product'
import type { Ref } from 'vue'
import productAPI from '@/api/product-api'
import { useNProgress } from '@/lib/nprogress'
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'
import { toValue } from 'vue'
import 'nprogress/nprogress.css'

const nprogress = useNProgress()

export function useProduct(pRef: Ref<{ limit: number, page: number, q?: string }>) {
  return useQuery({
    queryKey: ['products', pRef],
    queryFn: () => {
      nprogress.start()
      const result = productAPI.getAll(toValue(pRef))
      nprogress.done()
      return result
    },
  })
}

export function useAddProductMutation() {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (params: ProductInput) => productAPI.create(params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] })
    },
  })
  return mutation
}
