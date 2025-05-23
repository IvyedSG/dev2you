<template>
  <section id="faq" class="relative py-24 overflow-hidden bg-dark">
    <!-- Fondo decorativo -->
    <div class="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-dark to-transparent opacity-80"></div>
    <div class="absolute rounded-full -top-20 right-20 w-72 h-72 bg-accent/10 filter blur-3xl"></div>
    <div class="absolute rounded-full bottom-40 left-20 w-80 h-80 bg-accent/5 filter blur-3xl"></div>

    <div class="container relative z-10 px-4 mx-auto">
      <!-- Título -->
      <div class="mb-20 text-center">
        
        <h2 class="mb-4 text-4xl font-bold md:text-5xl">
          <span class="text-light">Preguntas </span><span class="text-accent">Frecuentes</span>
        </h2>
        <div class="w-24 h-1 mx-auto mb-8 bg-accent"></div>
        <p class="max-w-2xl mx-auto text-lg text-light/70">
          Resolvemos las dudas más comunes sobre nuestros servicios y procesos.
        </p>
      </div>

      <!-- Preguntas Frecuentes -->
      <div class="max-w-3xl mx-auto space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="p-6 transition-all duration-300 border rounded-xl bg-dark/70 border-gray-700/40 shadow-md hover:border-accent hover:shadow-[0_0_25px_rgba(0,255,200,0.3)] hover:scale-[1.02]"
        >
          <button
            class="flex items-center justify-between w-full text-left transition-colors px-2 py-2 rounded-md"
            @click="toggleFAQ(index)"
            :aria-expanded="openIndex === index"
            :aria-controls="`faq-answer-${index}`"
          >
            <span class="text-lg font-medium text-light">{{ faq.question }}</span>
            <div class="flex items-center justify-center w-8 h-8 transition-transform duration-300 rounded-full text-accent">
              <Icon
                :name="openIndex === index ? 'lucide:chevron-up' : 'lucide:chevron-down'"
                class="w-5 h-5"
              />
            </div>
          </button>
          <div
            :id="`faq-answer-${index}`"
            class="overflow-hidden transition-all duration-300 ease-in-out"
            :class="openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'"
          >
            <div class="px-2 pt-4 text-light/80 leading-relaxed border-t border-gray-700/40">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const openIndex = ref<number | null>(null)

const faqs = [
  {
    question: "¿Cuánto tiempo toma desarrollar un proyecto?",
    answer:
      "El tiempo depende de la complejidad del proyecto. Por lo general, un sitio web básico puede tomar entre 2 y 4 semanas, mientras que proyectos más complejos como aplicaciones web o e-commerce pueden requerir de 1 a 3 meses.",
  },
  {
    question: "¿Qué tecnologías utilizan?",
    answer:
      "Trabajamos con tecnologías modernas como Vue.js, React, Next.js, Tailwind CSS, Vite, Astro, TypeScript, Django, Docker, Express, FastApi y bases de datos como MySQL, MariaDb, PostgreSQL, SQL Server y MongoDB.",
  },
  {
    question: "¿Cómo es el proceso de trabajo?",
    answer:
      "Nuestro proceso incluye una reunión inicial, diseño, desarrollo, pruebas y entrega final. Mantenemos comunicación constante para asegurar calidad.",
  },
  {
    question: "¿Ofrecen soporte después de la entrega?",
    answer:
      "Sí, ofrecemos planes de soporte técnico con mantenimiento, corrección de errores, actualizaciones y asesoramiento continuo.",
  },
  {
    question: "¿Cuánto cuesta desarrollar un sitio web o aplicación?",
    answer:
      "El costo varía según los requerimientos. Ofrecemos presupuestos personalizados luego de entender completamente tu proyecto.",
  },
]

const toggleFAQ = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>
