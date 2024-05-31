<template>
  <div class="page">
    <!-- Header -->
    <AppHeader />

    <!-- Main -->
    <main class="page__main">
      <slot />
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>

  <!-- Modals -->
  <div id="modal" />
</template>

<script setup>
// useHead({
//   link: [{ rel: 'canonical', href: config.public.HOSTNAME + route.fullPath }]
// })
</script>

<style lang="scss" scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.page__main {
  flex-grow: 1;
  margin-top: 1.125rem;
  margin-bottom: 2rem;
}

@media only screen and (min-width: 640px) {
  .page__main {
    margin-bottom: 3rem;
  }
}

@media only screen and (min-width: 960px) {
  .page__main {
    margin-bottom: 3.75rem;
  }
}
</style>
