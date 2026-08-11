<template>
  <div class="min-h-screen bg-white dark:bg-dark text-gray-900 dark:text-gray-100">
    <!-- GTM noscript fallback -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P6TFC4R" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <ClientOnly>
      <SchemaOrg />
    </ClientOnly>
    <TheHeader />
    <main id="main-content">
      <NuxtPage />
    </main>
    <TheFooter />
  </div>
</template>