<script setup lang="ts">
import type { Product } from '@/model/product'
import { Button } from '@/components/ui/button'
import { useRouter } from 'vue-router'
//* **Define props of component
interface Props {
  product: Product
}

const props = defineProps<Props>()
const router = useRouter()
function formatPrice(price: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price)
}

function handleGoToItem() {
  router.push({ name: 'product-detail', params: { id: props.product.id } })
}
</script>

<template>
  <div>
    <img
      :src="props.product.thumbnail" :alt="props.product.title" width="{300}" height="{200}"
      className="w-full h-48 object-cover"
    >
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2">
        {{ props.product.title }}
      </h2>
      <p className="text-gray-600">
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
