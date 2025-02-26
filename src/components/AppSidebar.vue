<script setup lang="ts">
import { Home, Menu } from "lucide-vue-next"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { RouterLink, useRoute } from "vue-router";
const route = useRoute();
// Menu items.
const items = [
  {
    title: "Trang chủ",
    url: "/home",
    icon: Home,
  },
  {
    title: "Danh sách sản phẩm",
    url: "/products",
    icon: Menu,
  },
];
</script>

<template>
  <Sidebar>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel class="text-xl ">Shop Shoe</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu class="flex flex-col gap-4">
            <SidebarMenuItem v-for="item in items" :key="item.title">
              <SidebarMenuButton asChild>
                <RouterLink :to="item.url" :class="route.path === item.url ? '!text-green-500' : ''">
                  <component :is="item.icon" />
                  <span class="text-lg">{{ item.title
                  }}</span>
                </RouterLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</template>
