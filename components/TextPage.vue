<template>
  <main>
    <div class="h-[400px] bg-cover bg-center" :style="{ backgroundImage: `url(${heroImage})` }">
      <div class="container h-full flex items-center">
        <h1 class="text-white">{{ title }}</h1>
      </div>
    </div>
    
    <div class="container py-20">
      <div class="max-w-3xl mx-auto">
        <slot></slot>
      </div>
    </div>
  </main>
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