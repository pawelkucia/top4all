<template>
  <div v-if="isOpen" class="md:hidden mt-4 pb-4">
    <NavLink to="/seo" is-mobile>SEO</NavLink>
    <NavLink to="/google-ads" is-mobile>Google Ads</NavLink>
    
    <ServicesDropdown 
      :is-mobile="true"
      :is-open="isServicesOpen"
      @toggle="toggleServices"
    />
    
    <NavLink to="/contact" is-mobile>Contact</NavLink>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  isOpen: boolean;
}>();

const isServicesOpen = ref(false);
const toggleServices = () => {
  isServicesOpen.value = !isServicesOpen.value;
};
</script>