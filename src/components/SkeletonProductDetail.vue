<script setup lang="ts">
import {
  Card,
  CardContent,
} from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
</script>

<template>
  <Card class="flex">
    <div class="mb-8 md:mb-0">
      <Skeleton class="w-[554px] h-[554px] object-cover rounded-lg" />
    </div>
    <CardContent class="border-l w-full pt-6">
      <Skeleton class="w-9/12 h-8 mb-4 mt-1 " />
      <Skeleton class="h-8 w-44 mb-2" />
      <Skeleton class="w-full h-12 mb-4" />
      <Skeleton class="!w-[163px] h-9" />
    </CardContent>
  </Card>
</template>
