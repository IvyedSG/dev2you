<template>
  <section id="faq" class="py-24 bg-gray-dark text-light">
    <div class="container px-4 mx-auto">
      <!-- Título -->
      <h2 class="mb-4 text-4xl font-bold text-center">
        <span class="text-light">Preguntas </span><span class="text-accent">Frecuentes</span>
      </h2>
      <div class="w-24 h-1 mx-auto mb-8 bg-accent"></div>
      <p class="max-w-2xl mx-auto mb-12 text-center text-light/70">
        Resolvemos las dudas más comunes sobre nuestros servicios y procesos.
      </p>

      <!-- Acordeón -->
      <div class="space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="overflow-hidden border rounded-lg border-gray-700/40"
        >
          <button
            class="flex items-center justify-between w-full px-6 py-4 text-left transition-colors bg-dark hover:bg-gray-800"
            @click="toggleFAQ(index)"
          >
            <span class="font-medium text-light">{{ faq.question }}</span>
            <i
              :class="[
                'fas',
                faq.open ? 'fa-chevron-up' : 'fa-chevron-down',
                'text-accent'
              ]"
            ></i>
          </button>
          <div
            v-if="faq.open"
            class="px-6 py-4 bg-gray-800 text-light/70"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue';

const faqs = reactive([
  {
    question: '¿Cuánto tiempo toma desarrollar un proyecto?',
    answer:
      'El tiempo depende de la complejidad del proyecto. Por lo general, un sitio web básico puede tomar entre 2 y 4 semanas, mientras que proyectos más complejos pueden requerir más tiempo.',
    open: false,
  },
  {
    question: '¿Qué tecnologías utilizan?',
    answer:
      'Trabajamos con tecnologías modernas como Vue.js, Tailwind CSS, Node.js, y bases de datos como MySQL y MongoDB, entre otras.',
    open: false,
  },
  {
    question: '¿Cómo es el proceso de trabajo?',
    answer:
      'Nuestro proceso incluye una reunión inicial para entender tus necesidades, diseño y prototipado, desarrollo, pruebas y entrega final con soporte incluido.',
    open: false,
  },
  {
    question: '¿Ofrecen soporte después de la entrega?',
    answer:
      'Sí, ofrecemos soporte técnico para garantizar que tu proyecto funcione correctamente después de la entrega.',
    open: false,
  },
]);

const toggleFAQ = (index) => {
  faqs[index].open = !faqs[index].open;
};
</script>

<style scoped>
/* Estilo para el acordeón */
button {
  outline: none;
}
</style>