<script setup lang="ts">
import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent, CardFooter } from './ui/card'
</script>

<template>
  <div>
    <Card class="rounded-lg">
      <Skeleton class="w-full h-[356px] object-cover " />
      <hr>
      <CardContent class="flex flex-col gap-4 py-3 ">
        <Skeleton class="h-[28px] truncate block w-full" />
        <Skeleton class=" h-6 w-1/3 " />
      </CardContent>
      <CardFooter class="flex justify-end w-full">
        <Skeleton
          class="py-2 px-4 rounded h-9 w-1/3"
        />
      </CardFooter>
    </Card>
  </div>
</template>
