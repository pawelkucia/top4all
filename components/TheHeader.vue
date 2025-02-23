<template>
  <header class="fixed top-[5px] left-[5px] right-[5px] z-50 ">
    <div class="container py-2 px-2 transition-colors duration-300" :class="[
      isScrolled || isMobileMenuOpen
        ? 'bg-white/60 backdrop-blur-md dark:bg-dark-100/40 shadow-lg'
        : 'bg-transparent',
      isMobileMenuOpen ? 'rounded-2xl' : 'rounded-full'
    ]">
      <nav class="flex items-center justify-between">
        <NuxtLink to="/" class="text-primary flex items-center">
          <img :src="logoSrc" alt="Top4All" class="transition-all duration-300" :class="[isScrolled && !isMobileMenuOpen? 'h-[48px] rounded-full' : 'h-[72px]']" :height="isScrolled && !isMobileMenuOpen ? 48 : 72" :width="isScrolled && !isMobileMenuOpen ? 48 : 193">          
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class=" hidden md:flex items-center space-x-6">
          <NavLink to="/seo">SEO</NavLink>
          <NavLink to="/google-ads">Google Ads</NavLink>
          <ServicesDropdown />
          <NavLink to="/contact">Contact</NavLink>
          <ThemeToggle />
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button class="p-2 hover:text-primary dark:hover:text-primary transition-colors duration-200" :class="[
            isScrolled || isMobileMenuOpen ? 'text-gray-700 dark:text-gray-300' : 'text-white'
          ]" @click="toggleMobileMenu" title="Toggle Menu">
            <i class="fas text-xl" :class="[isMobileMenuOpen ? 'fa-close' : 'fa-bars']"></i>
          </button>
        </div>
      </nav>

      <!-- Mobile Menu -->
      <div v-show="isMobileMenuOpen" class="md:hidden mt-4 pb-4">
        <NavLink to="/seo" :is-mobile="true">SEO</NavLink>
        <NavLink to="/google-ads" :is-mobile="true">Google Ads</NavLink>
        <div class="py-2">
          <ServicesDropdown :is-mobile="true" :is-open="isServicesOpen" @toggle="toggleServices" />
        </div>
        <NavLink to="/contact" :is-mobile="true">Contact</NavLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import ThemeToggle from '~/components/common/ThemeToggle.vue';
import { useThemeStore } from '~/stores/theme';

const themeStore = useThemeStore();
const isMobileMenuOpen = ref(false);
const isServicesOpen = ref(false);
const isScrolled = ref(false);

const logoSrc = computed(() => {
  let logoUrl = '/images/logo-white-orange.png';

  if (isMobileMenuOpen.value) {
    logoUrl = themeStore.isDark ? '/images/logo-white-orange.png' : '/images/logo.png';
  } else if (isScrolled.value) {
    logoUrl = '/images/logo-short.jpg';
  } else {
    logoUrl = '/images/logo-white-orange.png';
  }

  return logoUrl;
});

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
  if (!isMobileMenuOpen.value) {
    isServicesOpen.value = false;
  }
};

const toggleServices = () => {
  isServicesOpen.value = !isServicesOpen.value;
};

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window && window.scrollY > 0;
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });
});

provide('isScrolled', computed(() => isScrolled.value || isMobileMenuOpen.value));
</script>