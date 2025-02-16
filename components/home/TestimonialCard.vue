<template>
  <div class="bg-white dark:bg-dark-200 p-8 rounded-lg shadow-md">
    <div class="mb-6">
      <div class="flex justify-center mb-4">
        <span class="text-4xl text-primary">
          <i class="fas fa-quote-left"></i>
        </span>
      </div>
      <p class="text-xl text-gray-700 dark:text-gray-300 italic mb-6">{{ text }}</p>
    </div>
    <div class="flex items-center justify-center">
      <div class="text-center">
        <p class="font-semibold text-lg text-gray-900 dark:text-white">{{ author }}</p>
        <p class="text-gray-600 dark:text-gray-400">{{ position }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  }
});
</script>