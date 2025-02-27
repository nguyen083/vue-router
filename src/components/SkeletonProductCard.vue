<script setup lang="ts">
import { Skeleton } from '@/components/ui/skeleton'
</script>

<template>
  <div>
    <Skeleton
      class="w-full h-[358px] object-cover"
    />
    <div class="p-4">
      <Skeleton class="w-full h-7 mb-2" />
      <Skeleton class="w-11 h-6" />
      <Skeleton class="mt-4 h-5 py-2 px-4 w-[100px]" />
    </div>
  </div>
</template>
