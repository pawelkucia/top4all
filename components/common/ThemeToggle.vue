<template>
  <button @click="themeStore.toggleTheme" class="p-2 rounded-lg transition-colors"
    :title="themeStore.isDark ? 'Switch to light mode' : 'Switch to dark mode'">
    <i class="text-xl hover:text-accent dark:hover:text-accent" :class="[
      themeStore.isDark ? 'fas fa-sun' : 'fas fa-moon',
      isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
    ]"></i>
  </button>
</template>

<script setup lang="ts">
import { useThemeStore } from '~/stores/theme';

const themeStore = useThemeStore();
const isScrolled = inject('isScrolled', ref(false));
</script>