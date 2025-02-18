<template>
  <section class="relative text-white py-20">
    <div class="absolute inset-0">
      <img :src="backgroundImage" alt="" class="w-full h-full object-cover" aria-hidden="true">
      <div class="absolute inset-0 bg-black bg-opacity-10"></div>
    </div>
    <div class="container relative">
      <p class="text-center text-2xl italic font-thin max-w-3xl mx-auto mb-8">
        {{ quote }}
      </p>
      <div class="flex justify-center items-center gap-4">
        <NuxtLink v-if="url && avatar" :to="url">
          <img :src="avatar" alt="avatar" class="w-16 h-16 rounded-full object-cover cursor-pointer hover:scale-110 transition-all duration-200">  
        </NuxtLink>
        <img v-if="!url && avatar" :src="avatar" alt="avatar" class="w-16 h-16 rounded-full object-cover transition-all duration-200">        
        <span class="text-center block">{{ author }}</span>
      </div>
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
  avatar: {
    type: String,
    required: false
  },
  url: {
    type: String,
    required: false
  }
});
</script>