<template>
  <a 
    :href="`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`" 
    target="_blank" 
    rel="noopener noreferrer"
    class="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110"
    aria-label="Contáctanos por WhatsApp"
  >
    <i class="fab fa-whatsapp text-3xl"></i>
  </a>
</template>

<script setup>
// WhatsApp phone number in international format without + or spaces
const phoneNumber = "51987654321";
const message = "Hola, estoy interesado en sus servicios de desarrollo. ¿Podemos hablar?";
</script>