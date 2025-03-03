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
import { Icon } from '@iconify/vue'
import { useColorMode } from '@vueuse/core'
import { Home, Menu } from 'lucide-vue-next'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const isDark = ref<boolean>(false)
const mode = useColorMode()
// Menu items.
const items = [
  {
    title: 'Home',
    url: '/home',
    icon: Home,
  },
  {
    title: 'List_product',
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
        <SidebarGroupLabel class="text-xl flex justify-between items-center">
          Shop Shoe
          <TranslateDropdown />
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu class="flex flex-col gap-4">
            <SidebarMenuItem v-for="item in items" :key="item.title">
              <SidebarMenuButton as-child>
                <RouterLink :to="item.url" :class="route.path === item.url ? '!text-green-500' : ''">
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
    <SidebarFooter class="flex justify-center items-center ">
      <Switch :model-value="isDark" @update:model-value="changeTheme">
        <template #thumb>
          <Icon v-if="isDark" icon="lucide:moon" class="size-3" />
          <Icon v-else icon="lucide:sun" class="size-3" />
        </template>
      </Switch>
    </SidebarFooter>
  </Sidebar>
</template>
