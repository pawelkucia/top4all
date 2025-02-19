<template>
  <footer class="relative text-white py-12">
    <div class="absolute inset-0">
      <img src="/images/footer-bg.jpg" alt="" class="w-full h-full object-cover" aria-hidden="true">
      <div class="absolute inset-0 bg-black bg-opacity-10"></div>
    </div>
    <div class="container relative">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
        <div class="text-center md:text-left">
          <h3 class="text-2xl font-light mb-4">Contact</h3>

          <p class="flex items-center justify-center md:justify-start gap-2">
            <i class="fas fa-phone"></i>
            <span>+48 693 430 284</span>
          </p>
          <p class="flex items-center justify-center md:justify-start gap-2">
            <i class="fas fa-phone"></i>
            <span>+48 698 949 152</span>
          </p>
          <p class="flex items-center justify-center md:justify-start gap-2">
            <i class="fas fa-envelope"></i>
            <span>biuro@top4all.pl</span>
          </p>
          <p>Poland</p>
        </div>

        <div class="text-center">
          <h3 class="text-2xl font-light mb-4">Find us</h3>
          <SocialLinks :social-links="socialLinks" />
        </div>

        <div class="text-center md:text-right">
          <h3 class="text-2xl font-light mb-4">Links</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/privacy-policy" class="hover:text-primary transition-colors">Privacy Policy</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="hover:text-primary transition-colors">Contact</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container relative">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-center border-t border-solid border-white border-opacity-30 pt-8 md:pt-4">
        <div class="flex items-center justify-center md:justify-start gap-4">
          <img src="/images/logo-white-orange.png" alt="Top4All" class="h-12">
        </div>
        <div class="text-center">
          <span>&copy; {{ year }} TOP4ALL. All rights reserved.</span>
        </div>
        <div class="flex items-center justify-center md:justify-end gap-4">
          <span>Design:</span>
          <img src="/images/logo-frog.svg" alt="Frogriot" class="h-6">
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useSocialLinks } from '~/composables/useSocialLinks';
import SocialLinks from '~/components/common/SocialLinks.vue';

const { socialLinks } = useSocialLinks();
const year = new Date().getFullYear();
</script>