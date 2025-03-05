<script setup lang="ts">
import { Card, CardDescription, CardTitle } from '@/components/ui/card'
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'

const { t } = useI18n()
const properties = {
  style: 'background: rgb(32,32,32); background: linear-gradient(-45deg, rgba(32,32,32,1) 0%, rgba(131,131,131,1) 61%, rgba(205,205,205,1) 100%);',
}
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <main class="flex-grow">
      <Card
        v-bind="properties"
        class="py-20 rounded-none shadow-md "
      >
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            {{ t('welcome') }}
          </h2>
          <p class="text-xl text-gray-400 mb-8">
            {{ t('discover') }}
          </p>
          <RouterLink to="" class-name="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            {{ t('get_started') }}
          </RouterLink>
        </div>
      </Card>

      <section class="py-20">
        <div class="container mx-auto px-4">
          <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center">
            {{ t('our_features') }}
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            <Card class=" p-6 rounded shadow-md dark:bg-gray-600 dark:border-none">
              <CardTitle>
                <h4 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {{ t('feature', ['1']) }}
                </h4>
              </CardTitle>
              <CardDescription>
                <p class="text-gray-400">
                  {{ t('description_feature', { msg: '1' }) }}
                </p>
              </CardDescription>
            </Card>
            <Card class=" p-6 rounded dark:bg-gray-600 dark:border-none shadow-md ">
              <CardTitle>
                <h4 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {{ t('feature', ['2']) }}
                </h4>
              </CardTitle>
              <CardDescription>
                <p class="text-gray-400">
                  {{ t('description_feature', { msg: '2' }) }}
                </p>
              </CardDescription>
            </Card>
            <Card class="p-6 rounded dark:border-none dark:bg-gray-600 shadow-md">
              <CardTitle>
                <h4 class="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {{ t('feature', ['3']) }}
                </h4>
              </CardTitle>
              <CardDescription>
                <p class="text-gray-400">
                  {{ t('description_feature', { msg: '3' }) }}
                </p>
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-gray-600 text-white py-8">
      <div class="container mx-auto px-4 text-center">
        <p>&copy; 2025 My Website. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>
