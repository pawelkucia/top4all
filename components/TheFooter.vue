<template>
  <footer class="relative text-white py-12">
    <div class="absolute inset-0">
      <img src="/images/footer-bg.jpg" alt="" class="w-full h-full object-cover" aria-hidden="true">
      <div class="absolute inset-0 bg-black bg-opacity-10"></div>
    </div>
    <div class="container relative">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
        <div>
          <div class="mb-4">
            <img src="/images/logo-white-orange.png" alt="Top4All" class="h-12">
          </div>
          <SocialLinks :social-links="socialLinks" />
        </div>

        <div>
          <h3 class="text-xl font-bold mb-4">Contact</h3>

          <p class="flex items-center gap-2">
            <i class="fas fa-phone"></i>
            <span>+48 693 430 284</span>
          </p>
          <p class="flex items-center gap-2">
            <i class="fas fa-phone"></i>
            <span>+48 698 949 152</span>
          </p>
          <p class="flex items-center gap-2">
            <i class="fas fa-envelope"></i>
            <span>biuro@top4all.pl</span>
          </p>
          <p>Poland</p>
        </div>

        <div>
          <h3 class="text-xl font-bold mb-4">Links</h3>
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
  </footer>
</template>

<script setup>
import { useSocialLinks } from '~/composables/useSocialLinks';
import SocialLinks from '~/components/common/SocialLinks.vue';

const { socialLinks } = useSocialLinks();
</script>