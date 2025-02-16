<template>
  <!-- Skip to main content link -->
  <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white dark:bg-dark p-4 z-50">
    Skip to main content
  </a>
  
  <div class="min-h-screen bg-white dark:bg-dark text-gray-900 dark:text-gray-100">
    <SchemaOrg />
    <TheHeader />
    <main id="main-content">
      <NuxtPage />
    </main>
    <TheFooter />
  </div>
</template>