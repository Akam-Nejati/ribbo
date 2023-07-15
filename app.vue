<template>
  <div dir="rtl" :class="{ 'dark !bg-slate-800': theme === 'dark' }" class="transition-all text-right pb-1">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { useThemeStore } from './composables/useTheme';
import "@/node_modules/vazirmatn/Vazirmatn-font-face.css"
import { storeToRefs } from "pinia"


const themeStore = useThemeStore()
const { theme } = storeToRefs(themeStore)
</script>

<style>
*::-webkit-scrollbar {
  @apply w-0 sm:w-1;
}

*::-webkit-scrollbar-track {
  @apply bg-slate-100 dark:sm:bg-slate-500 rounded-full;
}

*::-webkit-scrollbar-thumb {
  @apply rounded-full bg-slate-950;
}


body {
  font-family: Vazirmatn, sans-serif;
}
</style>