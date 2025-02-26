<script setup lang="ts">
import { Skeleton } from '@/components/ui/skeleton'
</script>

<template>
  <div class="flex items-start space-x-4">
    <Skeleton class="h-[752px] w-[752px] rounded-none" />
    <div class="space-y-5 w-96">
      <Skeleton class="h-10 w-full" />
      <Skeleton class="h-10 !w-full" />
      <Skeleton class="h-10 !w-full" />
    </div>
  </div>
</template>
