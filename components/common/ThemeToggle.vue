<template>
  <button
    @click="themeStore.toggleTheme"
    class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    :title="themeStore.isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <i
      class="text-xl"
      :class="themeStore.isDark ? 'fas fa-sun text-grey-400' : 'fas fa-moon text-gray-600'"
    ></i>
  </button>
</template>

<script setup lang="ts">
import { useThemeStore } from '~/stores/theme';

const themeStore = useThemeStore();
</script>