<template>
  <section class="bg-gray-100 dark:bg-dark-100 py-20">
    <div class="container">
      <h2 class="text-center mb-12 text-gray-900 dark:text-white">What Our Clients Say</h2>
      <ClientOnly>
        <Swiper
          :modules="[SwiperAutoplay, SwiperPagination]"
          :slides-per-view="1"
          :space-between="30"
          :pagination="{ clickable: true }"
          :autoplay="{ delay: 5000 }"
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
          class="testimonials-swiper"
        >
          <SwiperSlide v-for="testimonial in testimonials" :key="testimonial.id">
            <TestimonialCard
              :text="testimonial.text"
              :author="testimonial.author"
              :position="testimonial.position"
            />
          </SwiperSlide>
        </Swiper>
      </ClientOnly>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import TestimonialCard from './TestimonialCard.vue';

const SwiperAutoplay = Autoplay;
const SwiperPagination = Pagination;

const testimonials = [
  {
    id: 1,
    text: "Working with this team has transformed our online presence completely. Their strategic approach and attention to detail exceeded our expectations.",
    author: "John Doe",
    position: "CEO, Tech Solutions"
  },
  {
    id: 2,
    text: "Their expertise in SEO and Google Ads has helped us achieve remarkable growth. The results speak for themselves.",
    author: "Jane Smith",
    position: "Marketing Director, E-commerce Co."
  },
  {
    id: 3,
    text: "Professional, responsive, and results-driven team. They've been instrumental in our digital success story.",
    author: "Mike Johnson",
    position: "Business Owner, Retail Chain"
  },
  {
    id: 4,
    text: "Outstanding service and expertise. They helped us navigate the complex world of digital marketing with ease.",
    author: "Sarah Williams",
    position: "CMO, StartUp Inc."
  }
];
</script>

<style scoped>
.testimonials-swiper {
  padding-bottom: 50px !important;
}

.testimonials-swiper :deep(.swiper-pagination) {
  bottom: 0;
}

.testimonials-swiper :deep(.swiper-pagination-bullet) {
  @apply w-3 h-3 bg-primary opacity-50;
}

.testimonials-swiper :deep(.swiper-pagination-bullet-active) {
  @apply opacity-100;
}
</style>