<template>
  <NuxtLink :to="to" class="text-current hover:text-accent dark:hover:text-accent transition-colors duration-200"
    :class="[
      isMobile ? 'block py-2' : '',
      isScrolled ? 'text-gray-700 dark:text-gray-300' : 'text-white'
    ]">
    <slot></slot>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  to: string;
  isMobile?: boolean;
}>();

const isScrolled = inject('isScrolled', ref(false));
</script>