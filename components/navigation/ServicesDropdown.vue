<template>
  <div class="relative" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <button 
      class="text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors duration-200 flex items-center"
      @click="toggleDropdown"
    >
      Services
      <span class="ml-1" :class="{ 'transform rotate-180': showDropdown }">▼</span>
    </button>
    
    <div 
      v-show="showDropdown"
      class="absolute left-0 top-full w-48 bg-white dark:bg-dark-100 shadow-lg rounded-md py-2 z-50"
      :class="{ 'relative top-0 mt-2': isMobile }"
    >
      <NuxtLink 
        v-for="link in serviceLinks" 
        :key="link.path"
        :to="link.path"
        class="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-200 hover:text-accent dark:hover:text-accent transition-colors duration-200"
        @click="closeDropdown"
      >
        {{ link.label }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useNavigationStore } from '~/stores/navigation';

const props = defineProps<{
  isMobile?: boolean;
  isOpen?: boolean;
}>();

const emit = defineEmits(['toggle']);

const { serviceLinks } = useNavigationStore();
const isHovered = ref(false);
const showDropdown = computed(() => props.isMobile ? props.isOpen : isHovered.value);

const handleMouseEnter = () => {
  if (!props.isMobile) {
    isHovered.value = true;
  }
};

const handleMouseLeave = () => {
  if (!props.isMobile) {
    isHovered.value = false;
  }
};

const toggleDropdown = () => {
  if (props.isMobile) {
    emit('toggle');
  }
};

const closeDropdown = () => {
  if (props.isMobile) {
    emit('toggle');
  }
  isHovered.value = false;
};
</script>