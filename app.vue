<template>
  <div data-theme="dev2you">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <WhatsAppButton />
  </div>
</template>

<script setup>
// Configurar metadatos globales del sitio
useHead({
  titleTemplate: 'Dev2You',
  meta: [
    { name: 'description', content: 'Creamos productos digitales únicos con enfoque en diseño y experiencia de usuario.' }
  ],
  link: [
    { 
      rel: 'stylesheet', 
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
      integrity: 'sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==',
      crossorigin: 'anonymous',
      referrerpolicy: 'no-referrer'
    }
  ]
})
</script>