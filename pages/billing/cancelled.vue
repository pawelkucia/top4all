<template>
  <TextPage title="Payment Cancelled" hero-image="/images/bg-header-1.jpg">
    <div class="prose lg:prose-xl text-center">
      <p>Your payment was cancelled and you have not been charged.</p>
      <p>If something went wrong or you need help, please contact us at
        <span class="text-accent">biuro@top4all.pl</span>.</p>
      <div class="flex flex-wrap justify-center gap-4 mt-6">
        <NuxtLink to="/contact" class="btn-primary inline-block">Contact Us</NuxtLink>
        <NuxtLink to="/" class="btn-primary inline-block">Back to Home</NuxtLink>
      </div>
    </div>
  </TextPage>
</template>

<script setup>
const meta = useMetaTags({
  title: 'Payment Cancelled',
  description: 'Your payment to TOP4ALL was cancelled. You have not been charged.',
  keywords: 'payment, billing, TOP4ALL',
  image: '/images/bg-header-1.jpg'
})
meta.meta.push({ name: 'robots', content: 'noindex, nofollow' })
useHead(meta)
</script>
