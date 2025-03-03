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
import { Languages } from 'lucide-vue-next'
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n({ useScope: 'global' })
watch(locale, () => {
  localStorage.setItem('lang', locale.value)
})
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost">
        <Languages class="text-black" :size="20" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-fit">
      <DropdownMenuLabel>
        {{ t('Choose_language') }}
      </DropdownMenuLabel>
      <hr class="border-t border-gray-300">
      <DropdownMenuSeparator />
      <DropdownMenuRadioGroup v-model="locale">
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
