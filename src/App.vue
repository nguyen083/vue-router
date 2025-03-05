<script setup lang="ts">
import AppSidebar from '@/components/AppSidebar.vue'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
import { Notification, NotificationProgress, Notivue, NotivueSwipe } from 'notivue'
import { RouterView } from 'vue-router'
</script>

<template>
  <Notivue v-slot="item">
    <NotivueSwipe :item="item">
      <Notification :item="item">
        <NotificationProgress :item="item" />
      </Notification>
    </NotivueSwipe>
  </Notivue>
  <SidebarProvider>
    <AppSidebar />
    <main class="w-full px-5 pt-5">
      <VueQueryDevtools />
      <SidebarTrigger />
      <RouterView />
    </main>
  </SidebarProvider>
</template>
