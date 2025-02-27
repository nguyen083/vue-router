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
import { Loader2, MailOpen } from 'lucide-vue-next'
import { useForm } from 'vee-validate'
import { ref } from 'vue'
import * as z from 'zod'

const isOpen = ref<boolean>(false)
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
        <MailOpen class="w-4 h-4 mr-2" /> Thêm sản phẩm
      </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Thêm sản phẩm</DialogTitle>
        <DialogDescription>
          Thêm sản phẩm mới
        </DialogDescription>
      </DialogHeader>
      <form :validation-schema="formSchema" @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="title">
          <FormItem>
            <FormLabel>Tiêu đề</FormLabel>
            <FormControl>
              <Input type="text" placeholder="Tiêu đề sản phẩm" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="description">
          <FormItem>
            <FormLabel>Mô tả</FormLabel>
            <FormControl>
              <Input type="text" placeholder="Mô tả sản phẩm" v-bind="componentField" />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="price">
          <FormItem>
            <FormLabel>Giá tiền</FormLabel>
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
              Đóng
            </Button>
          </DialogClose>
          <Button
            :disabled="productMutation.isPending.value"
            type="submit" variant="default"
          >
            <Loader2 v-if="productMutation.isPending.value" class="w-4 h-4 mr-2 animate-spin" />
            Thêm
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>
