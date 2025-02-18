<template>
  <main>
    <!-- Hero Image -->
    <div class="h-[400px] bg-cover bg-center" style="background-image: url('/images/bg-header-4.jpg')">
      <div class="container h-full flex items-center">
        <h1 class="text-white">Contact Us</h1>
      </div>
    </div>

    <!-- Team Section -->
    <section class="py-20">
      <div class="container">
        <h2 class="text-center mb-12">Our Team</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div v-for="member in team" :key="member.id" class="text-center">
            <img :src="member.image" :alt="member.name" class="w-48 h-48 rounded-full mx-auto mb-4">
            <h3 class="text-xl font-semibold">{{ member.name }}</h3>
            <p class="text-gray-600 dark:text-gray-200 mb-4">{{ member.position }}</p>
            <div class="flex justify-center space-x-4">
              <a v-for="social in member.social" :key="social.platform" :href="social.url"
                class="text-gray-600 hover:text-blue-600" target="_blank">
                <i :class="social.icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const team = [
  {
    id: 1,
    name: "Paweł Kucia",
    position: "Software Engineer",
    image: "/images/pawel-kucia.jpg",
    social: [
      { platform: "facebook", url: "https://www.facebook.com/pawelkucia.dev", icon: "fab fa-facebook" },
      { platform: "twitter", url: "https://x.com/PawelKucia", icon: "fab fa-twitter" },
      { platform: "instagram", url: "https://www.instagram.com/pawelkucia/", icon: "fab fa-instagram" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/pawelkucia/", icon: "fab fa-linkedin" }
    ]
  },
  {
    id: 2,
    name: "Radosław Mentel",
    position: "Certified SEO Specialist",
    image: "/images/radek-mentel.jpg",
    social: [
      { platform: "facebook", url: "https://www.facebook.com/mradek", icon: "fab fa-facebook" },
      { platform: "twitter", url: "https://x.com/RadekMentel", icon: "fab fa-twitter" },
      { platform: "instagram", url: "https://www.instagram.com/radoslaw.mentel/", icon: "fab fa-instagram" },
      { platform: "linkedin", url: "https://www.linkedin.com/in/radoslawmentel/", icon: "fab fa-linkedin" }
    ]
  }
];

useHead(useMetaTags({
  title: 'Contact Us',
  description: 'Get in touch with TOP4ALL\'s digital marketing experts. We\'re here to help you grow your business with professional SEO and Google Ads services.',
  keywords: 'contact TOP4ALL, digital marketing team, SEO experts, Google Ads specialists, marketing consultation',
  image: '/images/bg-header-4.jpg'
}))</script>