<script setup lang="ts">
import { RouterView } from 'vue-router';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar.vue";

</script>

<template>
  <!-- <div class="layout grid grid-cols-6 h-screen">
    <div class="col-span-1 ">
      <nav className="bg-gray-800 !w-full text-white h-screen !mt-0 !ml-0">
        <div className="p-4">
          <ul className="space-y-4">
            <li class="w-full">
              <RouterLink to="/home" :class="route.path === '/home' ? 'bg-gray-900' : ''">
                Trang chủ
              </RouterLink>
            </li>
            <li class="w-full">
              <RouterLink to="/products">
                Danh sách sản phẩm
              </RouterLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="content col-span-5">
      <RouterView />
    </div>
  </div> -->
  <SidebarProvider>
    <AppSidebar />
    <main class="w-full">
      <SidebarTrigger />
      <RouterView />
    </main>
  </SidebarProvider>
</template>

<style scoped>
/*  */
</style>
