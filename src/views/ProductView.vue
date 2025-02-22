<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="product" class="flex flex-col md:flex-row">
      <div class="md:w-1/2 mb-8 md:mb-0">
        <img :src="product.image" :alt="product.name" class="w-full h-auto object-cover rounded-lg shadow-lg" />
      </div>
      <div class="md:w-1/2 md:pl-8">
        <h1 class="text-3xl font-bold mb-4">{{ product.name }}</h1>
        <p class="text-2xl font-semibold text-gray-700 mb-4">
          {{ price }}
        </p>
        <p class="text-gray-600 mb-6">
          Product ID: {{ product.id }}
        </p>
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
    <div v-else class="text-center text-2xl text-gray-600">
      Product not found
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRouteParams } from '@vueuse/router'


type Product = { id: number, name: string, price: number, image: string }
const products: Product[] = [
  { id: 1, name: "Shoes 1", price: 29.99, image: "https://i.pinimg.com/236x/8c/51/27/8c5127219ba14427df68fdf027439278.jpg" },
  { id: 2, name: "Shoes 2", price: 59.99, image: "https://i.pinimg.com/236x/da/4e/cb/da4ecb35e5659f9431e0dd4bafc41725.jpg" },
  { id: 3, name: "Shoes 3", price: 89.99, image: "https://i.pinimg.com/236x/40/7d/3d/407d3de86e1f273e71979ff89eacedf9.jpg" },
  { id: 4, name: "Shoes 4", price: 39.99, image: "https://i.pinimg.com/474x/4c/13/9b/4c139b201ca5228e94c111ea0012b23d.jpg" },
  { id: 5, name: "Shoes 5", price: 49.99, image: "https://i.pinimg.com/236x/b1/04/92/b104922e7814bb022156edda8318bc67.jpg" },
  { id: 6, name: "Shoes 6", price: 129.99, image: "https://i.pinimg.com/236x/89/9a/83/899a83773781d467c63ab33a164787c6.jpg" },
  { id: 7, name: "Shoes 7", price: 79.99, image: "https://i.pinimg.com/736x/db/4c/37/db4c3785fb691a1d7a14de7d7eb7c33a.jpg" },
  { id: 8, name: "Shoes 8", price: 99.99, image: "https://i.pinimg.com/736x/99/48/a4/9948a48780d0f03fbd3ab92b0734a5c2.jpg" },
  { id: 9, name: "Shoes 9", price: 109.99, image: "https://i.pinimg.com/736x/a6/a6/6c/a6a66c913d1926f12aec3fa3c6c1bf13.jpg" },
  { id: 10, name: "Shoes 10", price: 149.99, image: "https://i.pinimg.com/736x/a4/c4/d8/a4c4d8a126b80b3c622da904a21db49d.jpg" },
  { id: 11, name: "Shoes 11", price: 199.99, image: "https://i.pinimg.com/736x/5b/bc/3d/5bbc3d26f58ba02efc07a65845ed71a1.jpg" },
  { id: 12, name: "Shoes 12", price: 89.99, image: "https://i.pinimg.com/736x/a7/fe/af/a7feaf94743bb3c2c7a5a761c06c9409.jpg" },
  { id: 13, name: "Shoes 13", price: 59.99, image: "https://i.pinimg.com/736x/5c/e9/f5/5ce9f5f82991c90e977db8f8c8a7a8a2.jpg" },
  { id: 14, name: "Shoes 14", price: 129.99, image: "https://i.pinimg.com/736x/13/ad/02/13ad027c6e1d0ecdfaba4e40bb32316d.jpg" },
  { id: 15, name: "Shoes 15", price: 169.99, image: "https://i.pinimg.com/736x/9a/17/fe/9a17fe4e5dbfdf26907afb616f68152c.jpg" },
  { id: 16, name: "Shoes 16", price: 189.99, image: "https://i.pinimg.com/736x/d5/0f/76/d50f7668bfc909042628dab2892751f1.jpg" },
  { id: 17, name: "Shoes 17", price: 219.99, image: "https://i.pinimg.com/236x/42/c8/52/42c852999f90e9b5791f6fcaa4bb7465.jpg" },
  { id: 18, name: "Shoes 18", price: 79.99, image: "https://i.pinimg.com/736x/ea/5e/9c/ea5e9c1628e84f38fe5f33d53cd21a0a.jpg" },
  { id: 19, name: "Shoes 19", price: 99.99, image: "https://i.pinimg.com/236x/e5/27/47/e52747fd9ef8e486e57634aadb603439.jpg" },
  { id: 20, name: "Shoes 20", price: 139.99, image: "https://i.pinimg.com/236x/25/da/b7/25dab7f9abe301b5c0dfa10f3d354194.jpg" },
]
const product = ref<Product>()
onMounted(() => {
  const id = useRouteParams('id', '0', { transform: Number })
  products.forEach(element => {
    if (element.id === id.value) {
      product.value = element
    }
  });
})
const price = computed(() => formatPrice(product.value?.price || 0))
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price);
};
</script>
