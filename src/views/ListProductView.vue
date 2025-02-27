<script setup lang="ts">
import AddProductDialog from '@/components/AddProductDialog.vue'
import ProductCard from '@/components/ProductCard.vue'
import SearchInput from '@/components/SearchInput.vue'
import SkeletonProductCard from '@/components/SkeletonProductCard.vue'
import {
  Button,
} from '@/components/ui/button'
import {
  Pagination,
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
} from '@/components/ui/pagination'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useProduct } from '@/composables/use-product'
import { useRouteQuery } from '@vueuse/router'
import { nextTick, ref, watch } from 'vue'

const limit = useRouteQuery('limit', '12', { transform: Number })
const page = useRouteQuery('page', '1', { transform: Number })
const q = useRouteQuery<string>('q', '')
const productParam = ref<{ limit: number, page: number, q?: string }>(
  { limit: limit.value, page: page.value - 1, q: q.value },
)
const { data: productPaging, isPending, isError, error } = useProduct(productParam)

watch(page, () => {
  productParam.value.page = page.value - 1
})
watch(limit, () => {
  productParam.value = { ...productParam.value, limit: limit.value, page: 0 }
  page.value = 1
})
watch(q, () => {
  productParam.value = { limit: 12, page: 0, q: q.value }
  nextTick()
  page.value = 1
  limit.value = 12
})
</script>

<template>
  <div class="container mx-auto px-4 py-8 flex flex-col gap-6 h-screen !w-full">
    <h1 class="text-3xl font-bold mb-6 text-center">
      Danh sách sản phẩm
    </h1>
    <div class="pb-2 flex justify-between">
      <SearchInput />
      <AddProductDialog />
    </div>
    <!-- Display Skeleton when loading  -->
    <div v-if="isPending">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        <div v-for="index in 12" :key="index" class="bg-white rounded-lg shadow-md overflow-hidden">
          <SkeletonProductCard />
        </div>
      </div>
    </div>
    <!-- Display Error -->
    <div v-if="isError">
      {{ error }}
    </div>
    <!-- Display products -->
    <div v-else>
      <div v-if="productPaging">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          <div v-for="(product) in productPaging.products" :key="product.id" class="bg-white rounded-lg shadow-md overflow-hidden">
            <ProductCard :product="product" />
          </div>
        </div>
        <!-- Pagination list product -->
        <div class="w-full flex items-center justify-center pt-7 pb-10 gap-10">
          <Pagination
            v-model:page="page" :items-per-page="limit" :total="productPaging?.total" :sibling-count="1" show-edges
            :default-page="1"
          >
            <PaginationList v-slot="{ items }" class="flex items-center gap-1">
              <PaginationFirst />
              <PaginationPrev />
              <template v-for="(item, index) in items">
                <PaginationListItem v-if="item.type === 'page'" :key="index" :value="item.value" as-child>
                  <Button class="w-10 h-10 p-0" :variant="item.value === page ? 'default' : 'outline'">
                    {{ item.value }}
                  </Button>
                </PaginationListItem>
                <PaginationEllipsis v-else :key="item.type" :index="index" />
              </template>

              <PaginationNext />
              <PaginationLast />
            </PaginationList>
          </Pagination>
          <Select v-model="limit">
            <SelectTrigger class="w-20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem :value="8">
                  8
                </SelectItem>
                <SelectItem :value="12">
                  12
                </SelectItem>
                <SelectItem :value="16">
                  16
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div v-else>
        Không có sản phẩm
      </div>
    </div>
  </div>
</template>
