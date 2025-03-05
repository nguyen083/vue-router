<script setup lang="ts">
import products from '@/api/product-api'
import SkeletonProductDetail from '@/components/SkeletonProductDetail.vue'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'
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
  <SkeletonProductDetail v-if="status === 'pending'" />
  <div v-else>
    <Card v-if="status === 'success'" class="flex">
      <div class="md:w-1/2 mb-8 md:mb-0">
        <img :src="data?.thumbnail" :alt="data?.title" class="w-full h-auto object-cover rounded-lg">
      </div>
      <CardContent class="border-l pt-6">
        <CardTitle>
          <h1 class="text-3xl font-bold mb-4 ">
            {{ data?.title }}
          </h1>
        </CardTitle>
        <CardDescription>
          <p class="text-2xl font-semibold text-orange-400 mb-2">
            {{ price }}
          </p>
        </CardDescription>
        <CardDescription class="mb-4">
          <span class="text-base  text-gray-400 ">
            <span class="font-bold">
              {{ t('description') }}:
            </span>
            {{ data?.description }}
          </span>
        </CardDescription>
        <Button>
          {{ t('add_to_cart') }}
        </Button>
      </CardContent>
    </Card>
    <div v-else class="text-center text-2xl text-gray-600">
      {{ error }}
    </div>
  </div>
</template>
