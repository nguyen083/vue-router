<script setup lang="ts">
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
import ProductCard from '@/components/ProductCard.vue'
import { onMounted, ref, watch } from 'vue'
import { useRouteQuery } from '@vueuse/router'
import type { Product } from '@/model/product';
import { getAllWithLimitAndSkip, getByKeywork } from '@/api/productApi';
import SearchInput from '@/components/SearchInput.vue'



const products = ref<Product[]>([]);
const limit = useRouteQuery('limit', '12', { transform: Number })
const page = useRouteQuery('page', "1", { transform: Number })
const q = useRouteQuery('q', '')
const total = ref<number>(0)

async function getAllProductByPageAndLimit() {
  const productApi = await getAllWithLimitAndSkip({ limit: limit.value.toString(), page: (page.value - 1).toString() })
  products.value = productApi.products;
  total.value = productApi.total
}
async function getProductByKeywork() {
  const productApi = await getByKeywork({ q: q.value, page: (page.value - 1).toString(), limit: limit.value.toString() })
  total.value = productApi.total
  products.value = productApi.products
}

function fetchProduct() {
  if (!q.value)
    getAllProductByPageAndLimit();
  else
    getProductByKeywork();
}

watch(page, () => {
  fetchProduct()
})
watch(limit, () => {

  if (page.value !== 1) {
    handleChangePage(1)
  } else {
    fetchProduct()
  }
})

watch(q, () => {
  if (page.value !== 1) {
    handleChangePage(1)
  } else {
    fetchProduct()
  }
})

function handleChangePage(newPage: number) {
  page.value = newPage;
};


onMounted(async () => {
  if (q.value)
    getProductByKeywork();
  else {
    getAllProductByPageAndLimit();
  }
})
</script>

<template>
  <div className="container mx-auto px-4 py-8 flex flex-col gap-6 h-screen !w-full">
    <h1 className="text-3xl font-bold mb-6 text-center">Danh sách sản phẩm</h1>
    <div class="pb-2">
      <SearchInput />
    </div>
    <div v-if="products.length !== 0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        <div v-for="(product) in products" v-bind:key="product.id"
          className="bg-white rounded-lg shadow-md overflow-hidden">
          <ProductCard :product="product" />
        </div>
      </div>
      <!-- Pagination list product -->
      <div class="w-full flex items-center justify-center pt-7 pb-10 gap-10">
        <Pagination :items-per-page="limit" :total="total" :sibling-count="1" show-edges :default-page="1"
          v-model:page="page">
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
      Không tìm thấy sản
    </div>
  </div>


</template>
