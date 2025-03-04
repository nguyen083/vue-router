<script setup lang="ts">
import products from '@/api/product-api'
import SkeletonProductDetail from '@/components/SkeletonProductDetail.vue'
import { Button } from '@/components/ui/button'
import { useQuery } from '@tanstack/vue-query'
import { useRouteParams } from '@vueuse/router'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const id = useRouteParams('id', '0')
const { t } = useI18n()
const { status, data, error } = useQuery({
  queryKey: ['product', id],
  queryFn: async () => {
    return products.getById(id.value)
  },
})

const price = computed(() => formatPrice(data.value?.price || 0))
function formatPrice(price: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
}
</script>

<template>
  <SkeletonProductDetail v-if="status === 'pending' " />
  <div v-else class="container mx-auto px-4 py-8">
    <div v-if="status === 'success'" class="flex flex-col md:flex-row">
      <div class="md:w-1/2 mb-8 md:mb-0">
        <img :src="data?.thumbnail" :alt="data?.title" class="w-full h-auto object-cover rounded-lg shadow-lg">
      </div>
      <div class="md:w-1/2 md:pl-8">
        <h1 class="text-3xl font-bold mb-4">
          {{ data?.title }}
        </h1>
        <p class="text-2xl font-semibold text-gray-700 mb-4">
          {{ price }}
        </p>
        <p class="text-gray-600 mb-6">
          Product ID: {{ data?.id }}
        </p>
        <Button>
          {{ t('Add_to_cart') }}
        </Button>
      </div>
    </div>
    <div v-else class="text-center text-2xl text-gray-600">
      {{ error }}
    </div>
  </div>
</template>
