<template>
  <div dir="rtl" :class="{'dark !bg-slate-800': theme === 'dark'}" class="h-screen transition-all">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  import { useThemeStore } from '@/composables/useTheme';
  import "@/node_modules/vazirmatn/Vazirmatn-font-face.css"
  import { storeToRefs } from "pinia"


  const themeStore = useThemeStore()
  const { theme } = storeToRefs(themeStore)
</script>

<style>
body {
  font-family: Vazirmatn, sans-serif;
}
</style>