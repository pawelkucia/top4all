<template>
  <TextPage title="Thank You" hero-image="/images/bg-header-1.jpg">
    <div class="prose lg:prose-xl text-center">
      <p>Thank you for returning to TOP4ALL. If you have just completed a payment or updated your billing details,
        Stripe will email you a confirmation shortly.</p>
      <p v-if="sessionId" class="text-sm text-gray-600 dark:text-gray-200">
        Reference: <span class="font-mono break-all">{{ sessionId }}</span>
      </p>
      <p>If you have any questions, contact us at <span class="text-accent">biuro@top4all.pl</span>.</p>
      <NuxtLink to="/" class="btn-primary inline-block mt-6">Back to Home</NuxtLink>
    </div>
  </TextPage>
</template>

<script setup>
const route = useRoute()
const sessionId = computed(() => {
  const id = route.query.session_id
  return typeof id === 'string' ? id : ''
})

const meta = useMetaTags({
  title: 'Billing',
  description: 'Return page after completing a billing action with TOP4ALL.',
  keywords: 'billing, payment, TOP4ALL',
  image: '/images/bg-header-1.jpg'
})
meta.meta.push({ name: 'robots', content: 'noindex, nofollow' })
useHead(meta)
</script>
