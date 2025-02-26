<script setup lang="ts">
import type { Product } from '@/model/product'
import products from '@/api/product-api'
import SkeletonProductDetail from '@/components/SkeletonProductDetail.vue'
import { Button } from '@/components/ui/button'
import { useRouteParams } from '@vueuse/router'
import { computed, onMounted, ref } from 'vue'

const loading = ref<boolean>(false)

const product = ref<Product>()
onMounted(async () => {
  try {
    loading.value = true
    const id = useRouteParams('id', '0')
    product.value = await products.getById(id.value)
  }
  catch {
    console.error('lỗi')
  }
  finally {
    loading.value = false
  }
})
const price = computed(() => formatPrice(product.value?.price || 0))
function formatPrice(price: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
}
</script>

<template>
  <SkeletonProductDetail v-if="loading" />
  <div v-else class="container mx-auto px-4 py-8">
    <div v-if="product" class="flex flex-col md:flex-row">
      <div class="md:w-1/2 mb-8 md:mb-0">
        <img :src="product.thumbnail" :alt="product.title" class="w-full h-auto object-cover rounded-lg shadow-lg">
      </div>
      <div class="md:w-1/2 md:pl-8">
        <h1 class="text-3xl font-bold mb-4">
          {{ product.title }}
        </h1>
        <p class="text-2xl font-semibold text-gray-700 mb-4">
          {{ price }}
        </p>
        <p class="text-gray-600 mb-6">
          Product ID: {{ product.id }}
        </p>
        <Button>
          Add to Cart
        </Button>
      </div>
    </div>
    <div v-else class="text-center text-2xl text-gray-600">
      Product not found
    </div>
  </div>
</template>
