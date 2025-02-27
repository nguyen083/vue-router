<script setup lang="ts">
import type { Product } from '@/model/product'
import SkeletonProductCard from '@/components/SkeletonProductCard.vue'
import { Button } from '@/components/ui/button'
import { useImage } from '@vueuse/core'
import { useRouter } from 'vue-router'

interface Props {
  product: Product
}

const props = defineProps<Props>()
const router = useRouter()
const { isLoading } = useImage({ src: props.product.thumbnail })
function formatPrice(price: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
}

function handleGoToItem() {
  router.push({ name: 'ProductDetail', params: { id: props.product.id } })
}
</script>

<template>
  <SkeletonProductCard v-if="isLoading" />
  <div v-else>
    <img
      :src="props.product.thumbnail" :alt="props.product.title"
      class="w-full object-cover"
    >
    <div class="p-4">
      <h2 class="text-lg font-semibold mb-2">
        {{ props.product.title }}
      </h2>
      <p class="text-gray-600">
        {{ formatPrice(props.product.price) }}
      </p>
      <Button
        class-name="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        @click="handleGoToItem"
      >
        Go to Item
      </Button>
    </div>
  </div>
</template>
