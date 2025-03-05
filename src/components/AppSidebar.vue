<script setup lang="ts">
import TranslateDropdown from '@/components/TranslateDropdown.vue'
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
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const isDark = ref<boolean>(localStorage.getItem('vueuse-color-scheme') !== 'light' || false)
const mode = useColorMode()
// Menu items.
const items = [
  {
    title: 'home',
    url: '/home',
    icon: Home,
  },
  {
    title: 'list_product',
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
        <SidebarGroupLabel class="text-xl flex justify-between items-center h-24">
          Shop Shoe
          <TranslateDropdown />
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu class="flex flex-col gap-8">
            <SidebarMenuItem v-for="item in items" :key="item.title">
              <SidebarMenuButton as-child>
                <RouterLink :to="item.url" :class="route.path === item.url ? '!text-[#22C55E]' : ''">
                  <component :is="item.icon" />
                  <span class="text-lg">
                    {{ t(`${item.title}`) }}</span>
                </RouterLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter class="flex-row justify-center items-center text-xs">
      <span class="font-bold">{{ t('light') }}</span>
      <Switch :model-value="isDark" @update:model-value="changeTheme" />
      <span class="font-bold">{{ t('dark') }}</span>
    </SidebarFooter>
  </Sidebar>
</template>
