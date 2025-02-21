<template>
  <section class="relative h-[600px] bg-dark-100 dark:bg-dark-100">
      <Swiper
        :modules="[SwiperAutoplay, SwiperPagination]"
        :slides-per-view="1"
        :autoplay="{ delay: 5000 }"
        :pagination="{ clickable: true }"
        class="h-full"
      >
        <SwiperSlide v-for="slide in slides" :key="slide.id">
          <div 
            class="h-full bg-cover bg-center relative"
            :style="{ backgroundImage: `url(${slide.image})` }"
          >
            <div class="absolute inset-0 bg-black bg-opacity-10"></div>
            <div class="container relative h-full flex items-center" :class="{'justify-end': slide.right == true}">
              <div class="max-w-2xl text-white">
                <h2 class="text-5xl font-bold mb-4">{{ slide.title }}</h2>
                <p class="text-xl">{{ slide.description }}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>    
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import { useHeroSlides } from '~/composables/useHeroSlides';

const { slides } = useHeroSlides();
const SwiperAutoplay = Autoplay;
const SwiperPagination = Pagination;
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

:deep(.swiper-pagination-bullet) {
  width: 12px;
  height: 12px;
  background-color: white;
  opacity: 0.5;
}

:deep(.swiper-pagination-bullet-active) {
  opacity: 1;
}
</style>