<template>
  <section class="relative text-white py-20">
    <div class="absolute inset-0">
      <img 
        :src="backgroundImage" 
        alt="" 
        class="w-full h-full object-cover"
        aria-hidden="true"
      >
      <div class="absolute inset-0 bg-black bg-opacity-10"></div>
    </div>
    <div class="container relative">
      <p class="text-center text-2xl italic font-thin max-w-3xl mx-auto mb-8">
        {{ quote }}
      </p>
      <span class="text-center block">{{ author }}</span>
    </div>        
  </section>
</template>

<script setup>
defineProps({
  quote: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  backgroundImage: {
    type: String,
    required: true
  },
});
</script>