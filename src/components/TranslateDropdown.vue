<script lang="ts" setup>
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { setI18nLanguage } from '@/plugins/i18n'
import { useStorage } from '@vueuse/core'
import { Languages } from 'lucide-vue-next'
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })
const lang = useStorage('lang', 'en')
watch(lang, async () => {
  setI18nLanguage(lang.value)
})
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" class="dark:hover:bg-slate-600">
        <Languages class="text-black dark:text-white" :size="25" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-fit">
      <DropdownMenuLabel>
        {{ t('choose_language') }}
      </DropdownMenuLabel>
      <hr class="border-t border-gray-300">
      <DropdownMenuSeparator />
      <DropdownMenuRadioGroup v-model="lang">
        <DropdownMenuRadioItem value="en">
          English
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="vi">
          Tiếng việt
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
