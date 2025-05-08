<template>
  <div class="relative min-h-[90vh] overflow-hidden hero bg-dark pt-12 md:pt-16">
    <!-- Fondos abstractos -->
    <div class="absolute top-0 left-0 w-72 h-72 rounded-full bg-accent/10 filter blur-3xl"></div>
    <div class="absolute bottom-0 right-0 rounded-full w-[30rem] h-[30rem] bg-accent/10 filter blur-3xl"></div>
    <div class="absolute rounded-full top-1/3 right-1/4 w-80 h-80 bg-primary/5 filter blur-2xl"></div>

    <div class="flex flex-col lg:flex-row gap-16 hero-content mt-[-40px]">
      <!-- Contenido de texto -->
      <div class="w-full text-center lg:text-left lg:w-3/5 flex flex-col items-center lg:items-start">
        <div class="mb-6">
          <span class="px-6 py-2 text-base font-semibold tracking-widest rounded-full bg-accent/10 text-accent">
            Impulsamos tu éxito
          </span>
        </div>

        <h1 class="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          <span class="text-light">Creamos soluciones</span>
          <span class="text-accent"> Digitales</span>
          <span class="text-light"> a tu medida</span>
        </h1>
        <p class="mb-4 text-lg leading-relaxed text-light/80 md:text-xl">
          Diseñamos soluciones digitales personalizadas que combinan creatividad y tecnología para impulsar tus proyectos.
        </p>

        <div class="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
          <!-- Botón "Explorar proyectos" -->
          <a
            href="#proyectos"
            class="px-6 py-3 text-base font-semibold tracking-wide transition-transform duration-300 rounded-lg shadow-md bg-accent text-dark hover:scale-105 hover:shadow-lg"
          >
            Explorar proyectos
          </a>        
        </div>
      </div>

      <!-- Tarjetas -->
      <div class="relative w-full card-stack lg:w-2/5 h-[24rem] lg:h-[28rem] mt-10 lg:mt-0">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="absolute w-full h-full p-8 transition-all duration-500 border shadow-2xl border-accent/20 rounded-2xl bg-dark/90 backdrop-blur-md text-light"
          :style="cardStyle(index)"
        >
          <!-- Encabezado -->
          <div class="flex items-center gap-4 mb-6">
            <component :is="card.icon" class="w-8 h-8 text-accent" />
            <h3 class="text-xl font-semibold text-accent">{{ card.title }}</h3>
          </div>

          <!-- Descripción -->
          <p class="text-base text-light/70 mb-6">
            {{ card.description }}
          </p>

          <!-- Características -->
          <div class="mb-6">
            <h4 class="mb-3 text-base font-medium text-light/80">CARACTERÍSTICAS</h4>
            <ul class="space-y-2 text-base text-light/70">
              <li v-for="feature in card.features" :key="feature" class="flex items-center gap-3">
                <i class="fas fa-check text-accent"></i>
                {{ feature }}
              </li>
            </ul>
          </div>

          <!-- Beneficios (ocultos en móvil) -->
          <div class="hidden lg:block">
            <h4 class="mb-3 text-base font-medium text-light/80">BENEFICIOS</h4>
            <ul class="space-y-2 text-base text-light/70">
              <li v-for="benefit in card.benefits" :key="benefit" class="flex items-center gap-3">
                <i class="fas fa-star text-yellow-400"></i>
                {{ benefit }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-16 animate-bounce hidden lg:block">
      <a href="#proyectos" class="transition-colors text-accent/80 hover:text-accent">
        <i class="text-3xl fas fa-chevron-down"></i>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Box, Code, Database } from 'lucide-vue-next'

const cards = [
  {
    title: 'Sistemas a Medida',
    icon: Box,
    description: 'Soluciones personalizadas para cubrir las necesidades específicas de tu organización o empresa.',
    features: [
      'Desarrollo centrado en el cliente',
      'Arquitectura escalable y modular',
      'Mantenimiento y evolución continua',
    ],
    benefits: [
      'Mejor alineación con los procesos del negocio',
      'Reducción de costos a largo plazo',
      'Mayor control y flexibilidad',
    ],
  },
  {
    title: 'Automatización de Procesos',
    icon: Code,
    description: 'Aumenta la productividad automatizando tareas repetitivas y flujos de trabajo empresariales.',
    features: [
      'Integración con APIs y sistemas existentes',
      'Desarrollo de bots y scripts inteligentes',
      'Paneles de monitoreo y control',
    ],
    benefits: [
      'Ahorro de tiempo significativo',
      'Reducción de errores humanos',
      'Mayor enfoque en tareas estratégicas',
    ],
  },
  {
    title: 'Gestión de Datos',
    icon: Database,
    description: 'Organiza, almacena y analiza tus datos para tomar decisiones informadas con confianza.',
    features: [
      'Bases de datos optimizadas y seguras',
      'Dashboards de visualización en tiempo real',
      'Integración de fuentes de datos múltiples',
    ],
    benefits: [
      'Decisiones basadas en datos',
      'Mayor trazabilidad de la información',
      'Seguridad y cumplimiento normativo',
    ],
  },
]

const currentIndex = ref(0)
let interval

const cardStyle = (index) => {
  const diff = (index - currentIndex.value + cards.length) % cards.length
  const zIndex = cards.length - diff
  let transform = ''
  let opacity = 1

  if (diff === 0) {
    transform = 'translateX(0) translateY(0) rotate(0deg) scale(1)'
  } else if (diff === 1) {
    transform = 'translateX(20%) translateY(-5%) rotate(5deg) scale(0.95)'
    opacity = 0.8
  } else if (diff === 2) {
    transform = 'translateX(40%) translateY(-10%) rotate(10deg) scale(0.9)'
    opacity = 0.6
  } else {
    transform = 'translateX(60%) translateY(-15%) rotate(15deg) scale(0.85)'
    opacity = 0.4
  }

  return { zIndex, transform, opacity }
}

onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % cards.length
  }, 3500)
})

onBeforeUnmount(() => {
  clearInterval(interval)
})
</script>

<style scoped>
.card-stack {
  perspective: 1000px;
}
</style>