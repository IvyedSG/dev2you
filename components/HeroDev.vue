<template>
  <div class="relative min-h-screen overflow-hidden hero bg-dark">
    <!-- Elementos de diseño de fondo mejorados -->
    <div class="absolute top-0 left-0 w-64 h-64 rounded-full bg-accent/10 filter blur-3xl"></div>
    <div class="absolute bottom-0 right-0 rounded-full w-96 h-96 bg-accent/10 filter blur-3xl"></div>
    <div class="absolute rounded-full top-1/3 right-1/4 w-72 h-72 bg-primary/5 filter blur-2xl"></div>
    
    <!-- Elementos decorativos flotantes -->
    <div class="absolute inset-0 hidden pointer-events-none lg:block">
      <div v-for="(particle, index) in particles" :key="index"
           class="absolute rounded-full opacity-30"
           :class="`bg-${particle.color}`"
           :style="`width: ${particle.size}px; height: ${particle.size}px; top: ${particle.top}%; left: ${particle.left}%; animation: float ${particle.duration}s ease-in-out infinite ${particle.delay}s;`">
      </div>
      
      <!-- Líneas de código abstractas animadas -->
      <div class="absolute font-mono text-xs top-20 left-10 opacity-20 text-accent">
        <div v-for="(line, index) in codeLines" :key="index"
             class="transition-opacity duration-1000"
             :style="`opacity: ${(index % 3 === activeCodeLine) ? '0.9' : '0.3'}; transform: translateY(${index * 1.5}rem);`">
          {{ line }}
        </div>
      </div>
    </div>
    
    <div class="flex flex-col gap-12 hero-content lg:flex-row-reverse">
      <!-- Componente visual: Baraja de proyectos -->
      <div class="relative w-full card-stack lg:w-2/5 h-80 lg:h-96">
        <div v-for="(card, index) in cards" :key="index" 
             class="absolute w-full h-full overflow-hidden transition-all duration-500 border shadow-lg bg-dark border-accent/20 rounded-xl"
             :style="cardStyle(index)">
          <img :src="card.image" alt="Card image" class="w-full h-full object-cover rounded-xl" />
        </div>
        
        <!-- Indicadores de tecnología alrededor de las tarjetas -->
        <div class="absolute hidden text-2xl lg:block -bottom-8 -left-8 text-accent/60 animate-pulse-slow">
          <i class="fab fa-react"></i>
        </div>
        <div class="absolute hidden text-2xl lg:block -top-8 -right-8 text-accent/60 animate-pulse-slow animation-delay-500">
          <i class="fab fa-vuejs"></i>
        </div>
        <div class="absolute hidden text-2xl lg:block top-1/2 -right-8 text-accent/60 animate-pulse-slow animation-delay-1000">
          <i class="fab fa-node-js"></i>
        </div>
      </div>
      
      <!-- Contenido de texto -->
      <div class="w-full text-left lg:w-3/5">
        <div class="mb-4">
          <span class="px-4 py-1 text-sm font-medium rounded-full bg-accent/10 text-accent">Impulsamos tu éxito</span>
        </div>
        
        <h1 class="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          <span class="text-light">Soluciones </span>
          <span class="text-accent">Digitales</span>
          <span class="text-light"> que transforman</span>
        </h1>
        <p class="mb-8 text-xl leading-relaxed text-light/80">
          Creamos experiencias únicas que combinan diseño, tecnología y estrategia para llevar tu negocio al siguiente nivel.
        </p>
        
        <div class="flex flex-wrap gap-4 mt-8">
          <a href="#proyectos" class="font-bold btn btn-primary btn-lg text-dark">
            Explorar proyectos
            <i class="ml-2 fas fa-arrow-right"></i>
          </a>
          <a href="#contacto" class="btn btn-outline btn-lg btn-primary group">
            Contáctanos
            <i class="ml-2 transition-transform fas fa-comment group-hover:translate-x-1"></i>
          </a>
        </div>
      </div>
    </div>
    
    <div class="absolute bottom-12 animate-bounce">
      <a href="#nosotros" class="transition-colors text-accent/80 hover:text-accent">
        <i class="text-2xl fas fa-chevron-down"></i>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Tarjetas con imágenes
const cards = [
  { image: 'image1.jpg' },
  { image: 'image2.jpg' },
  { image: 'image3.jpg' },
  { image: 'image4.jpg' },
  { image: 'image5.jpg' }
];

// Para animar la baraja de tarjetas
const currentIndex = ref(0);
let interval;
let codeInterval;

// Estilo de cada tarjeta en la baraja
const cardStyle = (index) => {
  const diff = (index - currentIndex.value + cards.length) % cards.length;
  const zIndex = cards.length - diff;
  
  // Posición de las tarjetas
  let transform = '';
  let opacity = 1;
  
  if (diff === 0) {
    transform = 'translateX(0) translateY(0) rotate(0deg) scale(1)';
  } else if (diff === 1) {
    transform = 'translateX(20%) translateY(-5%) rotate(5deg) scale(0.95)';
    opacity = 0.8;
  } else if (diff === 2) {
    transform = 'translateX(40%) translateY(-10%) rotate(10deg) scale(0.9)';
    opacity = 0.6;
  } else {
    transform = 'translateX(60%) translateY(-15%) rotate(15deg) scale(0.85)';
    opacity = 0.4;
  }

  return {
    zIndex,
    transform,
    opacity
  };
};

// Partículas flotantes para el fondo
const particles = [
  { top: 15, left: 10, size: 6, color: 'accent', duration: 8, delay: 0 },
  { top: 25, left: 25, size: 8, color: 'primary', duration: 12, delay: 1 },
  { top: 60, left: 70, size: 4, color: 'accent', duration: 10, delay: 0.5 },
  { top: 80, left: 30, size: 7, color: 'primary', duration: 9, delay: 2 },
  { top: 40, left: 80, size: 5, color: 'accent', duration: 11, delay: 1.5 },
  { top: 70, left: 85, size: 6, color: 'primary', duration: 7, delay: 0.7 },
  { top: 55, left: 15, size: 4, color: 'accent', duration: 13, delay: 2.5 },
  { top: 30, left: 60, size: 8, color: 'primary', duration: 6, delay: 1.2 }
];

// Líneas de código para efecto visual
const codeLines = [
  'const app = createApp(App);',
  'app.use(router).use(store);',
  'app.mount("#app");',
  'function optimize() {',
  '  return performance++;',
  '}'
];

const activeCodeLine = ref(0);

// Rotar las tarjetas automáticamente
onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % cards.length;
  }, 3000);
  
  // Animación de líneas de código
  codeInterval = setInterval(() => {
    activeCodeLine.value = (activeCodeLine.value + 1) % 3;
  }, 2000);
});

onBeforeUnmount(() => {
  clearInterval(interval);
  clearInterval(codeInterval);
});
</script>

<style scoped>
.card-stack {
  perspective: 1000px;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-pulse-slow {
  animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animation-delay-500 {
  animation-delay: 0.5s;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}
</style>

