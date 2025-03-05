<script setup lang="ts">
import type { Product } from '@/model/product'
import SkeletonProductCard from '@/components/SkeletonProductCard.vue'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card'
import { useImage } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

interface Props {
  product: Product
}

const props = defineProps<Props>()
const router = useRouter()
const { t } = useI18n()
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

  <Card v-else class="rounded-lg border-none">
    <img
      :src="props.product.thumbnail" :alt="props.product.title"
      class="w-full object-cover rounded-t-lg"
    >
    <hr>
    <CardContent class="flex flex-col gap-4 py-3 bg-gray-200 dark:bg-gray-600">
      <CardTitle>
        <span :title="props.product.title" class="text-xl truncate block w-full">
          {{ props.product.title }}
        </span>
      </CardTitle>
      <CardDescription class="text-orange-400 text-base">
        {{ t('price') }}: {{ formatPrice(props.product.price) }}
      </CardDescription>
    </CardContent>
    <CardFooter class="flex justify-end w-full bg-gray-200 dark:bg-gray-600">
      <Button
        class-name=" w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        @click="handleGoToItem"
      >
        {{ t('go_to_item') }}
      </Button>
    </CardFooter>
  </Card>
</template>
