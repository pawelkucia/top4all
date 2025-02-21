<template>    
  <div class="min-h-screen bg-white dark:bg-dark text-gray-900 dark:text-gray-100">
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