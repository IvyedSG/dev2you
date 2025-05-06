<template>
  <div class="flex flex-col min-h-screen bg-dark text-light">
    <Header />
    <main class="flex-grow pt-16">
      <slot />
    </main>

    <!-- Footer -->
    <FooterDev />
  </div>
</template>

<script setup>
import FooterDev from "~/components/FooterDev.vue";
import Header from "~/components/headerdev.vue";
</script>
