<template>
  <section class="bg-gray-100 dark:bg-dark-100 py-20" aria-label="Our Services">
    <div class="container">
      <h2 class="text-center mb-12 text-gray-900 dark:text-white">Our Services</h2>
      <ClientOnly>
        <Swiper
          :modules="[SwiperAutoplay, SwiperPagination]"
          :slides-per-view="1"
          :space-between="30"
          :pagination="{ clickable: true }"
          :autoplay="{ delay: 3000 }"
          :breakpoints="{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }"
        >
          <SwiperSlide v-for="service in services" :key="service.id">
            <div class="bg-white dark:bg-dark-200 p-8 rounded-lg text-center shadow-md hover:shadow-lg transform transition-all duration-200 hover:scale-110">
              <div class="w-16 h-16 mx-auto mb-4">
                <img 
                  :src="service.icon" 
                  :alt="service.title"
                  loading="lazy"
                  width="64"
                  height="64"
                  class="w-full h-full transition-all duration-200 transform hover:scale-110"
                >
              </div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">{{ service.title }}</h3>
              <p class="text-gray-600 dark:text-gray-400">{{ service.description }}</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </ClientOnly>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const services = [
  {
    id: 1,
    title: "SEO Services",
    description: "Improve your search engine rankings and drive organic traffic",
    icon: "/images/seo-icon.svg"
  },
  {
    id: 2,
    title: "Google Ads",
    description: "Targeted advertising campaigns that deliver results",
    icon: "/images/google-ads-icon.svg"
  },
  {
    id: 3,
    title: "Digital Audits",
    description: "Comprehensive analysis of your digital marketing strategy",
    icon: "/images/audit-icon.svg"
  }
];

const SwiperAutoplay = Autoplay;
const SwiperPagination = Pagination;
</script>

<style scoped>
:deep(.swiper-pagination-bullet) {
  @apply bg-primary opacity-50;
}

:deep(.swiper-pagination-bullet-active) {
  @apply opacity-100;
}
</style>