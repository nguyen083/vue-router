<script setup lang="ts">
import type { ProductInput } from '@/model/product'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useAddProductMutation } from '@/composables/use-product'
import { toTypedSchema } from '@vee-validate/zod'
import { Loader2, Plus } from 'lucide-vue-next'
import { push } from 'notivue'
import { useForm } from 'vee-validate'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import * as z from 'zod'

const isOpen = ref<boolean>(false)
const { t } = useI18n()
const productMutation = useAddProductMutation()
const formSchema = toTypedSchema(z.object({
  title: z.string().min(2).max(50),
  description: z.string().min(2).max(100),
  price: z.number().min(0),
}))
const { handleSubmit, resetForm } = useForm({
  validationSchema: formSchema,
})

const onSubmit = handleSubmit((values: ProductInput) => {
  productMutation.mutate(values, {
    onSuccess: () => {
      resetForm()
      isOpen.value = false
      push.success({ message: 'Thêm mới sản phẩm thành công', title: 'Thành công' })
    },
    onError: (error) => {
      console.error(error)
    },
  })
})
</script>

<template>
  <Dialog v-model:open="isOpen">
    <DialogTrigger as-child>
      <Button variant="outline" class="border-gray-500" @click=" isOpen = true ">
        <Plus class="w-4 h-4 mr-2" /> {{ t('Add_product') }}
      </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{{ t('Add_product') }}</DialogTitle>
        <DialogDescription>
          {{ t('Add_new_product') }}
        </DialogDescription>
      </DialogHeader>
      <form :validation-schema="formSchema" @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="title">
          <FormItem>
            <FormLabel>{{ t('Title') }}</FormLabel>
            <FormControl>
              <Input type="text" :placeholder="t('Title_of_product')" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="description">
          <FormItem>
            <FormLabel>{{ t('Description') }}</FormLabel>
            <FormControl>
              <Input type="text" :placeholder="t('Description_of_product')" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="price">
          <FormItem>
            <FormLabel>{{ t('Price') }}</FormLabel>
            <FormControl>
              <Input type="number" placeholder="0.00" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <DialogFooter class="fex justify-end gap-3 mt-5">
          <DialogClose as-child>
            <Button
              type="button" variant="outline" class="border-gray-500"
            >
              {{ t('Close') }}
            </Button>
          </DialogClose>
          <Button
            :disabled="productMutation.isPending.value"
            type="submit" variant="default"
          >
            <Loader2 v-if="productMutation.isPending.value" class="w-4 h-4 mr-2 animate-spin" />
            {{ t('Add') }}
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
