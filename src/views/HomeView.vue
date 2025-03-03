<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { RouterLink } from 'vue-router'

const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <main class="flex-grow">
      <section class="bg-gray-100 py-20">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-4xl font-bold text-gray-800 mb-4">
            {{ t('Welcome') }}
          </h2>
          <p class="text-xl text-gray-600 mb-8">
            {{ t('Discover') }}
          </p>
          <RouterLink to="" class-name="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Get Started
          </RouterLink>
        </div>
      </section>

      <section class="py-20">
        <div class="container mx-auto px-4">
          <h3 class="text-2xl font-bold text-gray-800 mb-8 text-center">
            {{ t('Our_features') }}
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded shadow">
              <h4 class="text-xl font-semibold text-gray-800 mb-2">
                {{ t('Feature', ['1']) }}
              </h4>
              <p class="text-gray-600">
                {{ t('Description_feature', { msg: '1' }) }}
              </p>
            </div>
            <div class="bg-white p-6 rounded shadow">
              <h4 class="text-xl font-semibold text-gray-800 mb-2">
                {{ t('Feature', ['2']) }}
              </h4>
              <p class="text-gray-600">
                {{ t('Description_feature', { msg: '2' }) }}
              </p>
            </div>
            <div class="bg-white p-6 rounded shadow">
              <h4 class="text-xl font-semibold text-gray-800 mb-2">
                Feature 3
              </h4>
              <p class="text-gray-600">
                {{ t('Description_feature', { msg: '3' }) }}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto px-4 text-center">
        <p>&copy; 2025 My Website. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>
