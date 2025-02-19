<template>
  <main>
    <HeroSlider />

    <!-- About Section -->
    <section class="py-20">
      <div class="container">
        <h2 class="text-center">About Us</h2>
        <p class="text-center max-w-3xl mx-auto">
          We are a digital marketing agency specializing in SEO, Google Ads, and comprehensive digital marketing audits.
        </p>
      </div>
    </section>

    <ServicesSlider />

    <QuoteSection
      quote="On the way to the top of search engines, the journey itself is what matters most. Our experience is the story of many successful expeditions."
      author="Pawel Kucia, TOP4ALL" background-image='/images/bg-header-2.jpg' avatar="/images/pawel-kucia.jpg"
      url="/contact" />

    <!-- One Column Section -->
    <section class="py-20">
      <div class="container">
        <h2 class="text-center mb-12">Why Choose Us</h2>
        <p class="text-center max-w-3xl mx-auto">At our SEO agency, we don't just boost your rankings – we grow your
          business. With tailored strategies, transparent reporting, and a team of dedicated experts, we deliver real
          results that drive traffic and conversions. Choose us for a partner committed to your success.
        </p>
      </div>
    </section>

    <TestimonialsSection />

    <QuoteSection
      quote="We support our clients in all areas of digital marketing. Day by day. Until the goal is achieved."
      author="Radek Mentel, TOP4ALL" background-image='/images/bg-header-3.jpg' avatar="/images/radek-mentel.jpg"
      url="/contact" />

    <!-- Call to Action -->
    <CallToActionSection
      title="Ready to Grow Your Business?"
      description="Contact us today for a free consultation"
      url="/contact" 
      urlLabel="Get Started"
    />
  </main>
</template>

<script setup>
import HeroSlider from '~/components/home/HeroSlider.vue';
import ServicesSlider from '~/components/home/ServicesSlider.vue';
import TestimonialsSection from '~/components/home/TestimonialsSection.vue';
import QuoteSection from '~/components/home/QuoteSection.vue';
import CallToActionSection from '~/components/home/CallToActionSection.vue';

useHead(useMetaTags({
  title: 'Digital Marketing Agency',
  description: 'TOP4ALL is a leading digital marketing agency specializing in SEO, Google Ads, and digital marketing audits. We help businesses grow their online presence and achieve sustainable results.',
  keywords: 'digital marketing agency, SEO services, Google Ads management, digital marketing audit, online marketing, TOP4ALL',
  image: '/images/hero-1-mood-seo.jpg'
}))
</script>