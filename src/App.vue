<script setup lang="ts">
import AppSidebar from '@/components/AppSidebar.vue'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
import { RouterView } from 'vue-router'
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <main class="w-full">
      <VueQueryDevtools />
      <SidebarTrigger />
      <RouterView />
    </main>
  </SidebarProvider>
</template>
