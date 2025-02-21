<template>
  <section>
    <div class="relative h-[400px] bg-dark-100 bg-cover bg-center">

      <div class="absolute inset-0">
        <NuxtImg :src="heroImage" alt="" class="w-full h-full object-cover" aria-hidden="true" placeholder />
      </div>

      <div class="container relative h-full flex items-center justify-center">
        <h1 class="text-white font-semibold">{{ title }}</h1>
      </div>
    </div>
    <div class="container py-20">
      <div class="max-w-3xl mx-auto">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  heroImage: {
    type: String,
    required: true
  }
});
</script>