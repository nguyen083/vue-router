<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { useRouteQuery } from '@vueuse/router'
import { Search } from 'lucide-vue-next'
import { ref } from 'vue'

const q = useRouteQuery<string>('q', '')
const inputSearch = ref<string>(q.value)
function handleSearch() {
  q.value = inputSearch.value
}
</script>

<template>
  <div class="relative w-full max-w-sm items-center">
    <Input
      id="search" v-model="inputSearch" type="text" placeholder="Nhập tên sản phẩm cần tìm..." class="pl-10"
      @keyup.enter="handleSearch"
    />
    <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
      <Search class="size-6 text-muted-foreground" />
    </span>
  </div>
</template>
