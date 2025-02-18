<template>
  <div class="flex space-x-4">
    <a v-for="link in socialLinks" :key="link.platform" :href="link.url" :title="link.platform"
      class="text-current hover:text-primary transition-colors" target="_blank">
      <i :class="[link.icon, 'text-2xl']"></i>
    </a>
  </div>
</template>

<script setup>
defineProps({
  socialLinks: {
    type: Array,
    required: true
  }
});
</script>