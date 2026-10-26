<template>
  <TextPage title="Payment Successful" hero-image="/images/bg-header-1.jpg">
    <div class="prose lg:prose-xl text-center">
      <p>Thank you for your payment! Your transaction has been completed successfully.</p>
      <p>A confirmation email with the receipt will be sent to you by Stripe shortly. We will contact you soon to
        discuss the next steps.</p>
      <p>If you have any questions, write to us at <span class="text-accent">biuro@top4all.pl</span>.</p>
      <NuxtLink to="/" class="btn-primary inline-block mt-6">Back to Home</NuxtLink>
    </div>
  </TextPage>
</template>

<script setup>
const meta = useMetaTags({
  title: 'Payment Successful',
  description: 'Your payment to TOP4ALL has been completed successfully.',
  keywords: 'payment, billing, TOP4ALL',
  image: '/images/bg-header-1.jpg'
})
meta.meta.push({ name: 'robots', content: 'noindex, nofollow' })
useHead(meta)
</script>
