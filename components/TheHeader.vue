<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" :class="[
    isScrolled || isMobileMenuOpen
      ? 'bg-white/95 backdrop-blur-sm dark:bg-dark-100/95 shadow-lg'
      : 'bg-transparent',
    isMobileMenuOpen ? 'bottom-0' : ''
  ]">
    <div class="container py-2">
      <nav class="flex items-center justify-between">
        <NuxtLink to="/" class="text-primary flex items-center">
          <img :src="logoSrc" alt="Top4All" class="h-[72px] transform origin-left" height="72" width="193">
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
          <button class="bhover:text-primary dark:hover:text-primary transition-colors duration-200" :class="[
            isScrolled || isMobileMenuOpen ? 'text-gray-700 dark:text-gray-300' : 'text-white'
          ]" @click="toggleMobileMenu" title="Toggle Menu">
            <i class="fas fa-bars text-xl"></i>
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
  if (themeStore.isDark) {
    return '/images/logo-white-orange.png';
  }
  return (isScrolled.value || isMobileMenuOpen.value)
    ? '/images/logo.png'
    : '/images/logo-white-orange.png';
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