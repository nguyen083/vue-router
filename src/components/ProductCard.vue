<script setup lang="ts">
import { useRouter } from 'vue-router';

//***Define props of component
type Product = { id: number, name: string, price: number, image: string }
interface Props {
  product: Product
}

const router = useRouter();
const props = defineProps<Props>();

function handleGoToItem() {
  router.push({ name: 'product-detail', params: { id: props.product.id } })
}
</script>
<template>
  <img :src="props.product.image" :alt="props.product.name" width={300} height={200}
    className="w-full h-48 object-cover" />
  <div className="p-4">
    <h2 className="text-lg font-semibold mb-2">{{ props.product.name }}</h2>
    <p className="text-gray-600">{{ props.product.price.toFixed(2) }}</p>
    <button @click="handleGoToItem"
      className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
      Go to Item
    </button>
  </div>
</template>
