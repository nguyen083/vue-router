<script setup lang="ts">
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { Switch } from '@/components/ui/switch'
import { useColorMode } from '@vueuse/core'
import { Home, Menu } from 'lucide-vue-next'
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const isDark = ref<boolean>(false)
const mode = useColorMode()
// Menu items.
const items = [
  {
    title: 'Trang chủ',
    url: '/home',
    icon: Home,
  },
  {
    title: 'Danh sách sản phẩm',
    url: '/products',
    icon: Menu,
  },
]

function changeTheme() {
  isDark.value = !isDark.value
  mode.value = mode.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <Sidebar>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel class="text-xl ">
          Shop Shoe
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu class="flex flex-col gap-4">
            <SidebarMenuItem v-for="item in items" :key="item.title">
              <SidebarMenuButton as-child>
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
    <SidebarFooter class="flex justify-center items-center gap-2">
      <Switch :model-value="isDark" @update:model-value="changeTheme">
        <template #thumb>
          <Icon v-if="isDark" icon="lucide:moon" class="size-3" />
          <Icon v-else icon="lucide:sun" class="size-3" />
        </template>
      </Switch>
    </SidebarFooter>
  </Sidebar>
</template>
