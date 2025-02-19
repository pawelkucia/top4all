<template>
  <section class="py-20">
      <div class="container text-center">
        <h2 class="mb-6">{{ title }}</h2>
        <p class="mb-8">{{ description }}</p>
        <NuxtLink v-if="url" :to="url"
          class="bg-primary transition-colors text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-600 duration-200">
          {{ urlLabel }}
        </NuxtLink>
      </div>
    </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: false
  }, 
  urlLabel: {
    type: String,
    required: false,
    default: 'Get Started'
  }
});
</script>