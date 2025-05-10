<script setup>
import { ref, computed, onMounted, onUnmounted, watchEffect } from 'vue'

const baseProyectos = [
  {
    id: 'ecommerce',
    title: 'Repify',
    year: '2024',
    description: 'Repify es un puente entre estudiantes y proyectos interesantes.',
    badges: ['Next.js', 'Tailwind', 'Shadcn', 'Amplify'],
    image: '/repify.png'
  },
  {
    id: 'delivery',
    title: 'Attendance Superlearner',
    year: '2023',
    description: 'Página para tomar asistencia de estudiantes con gestión de sesiones y cursos.',
    badges: ['ViteJs', 'React', 'Cloud', 'Docker', 'Material UI'],
    image: '/superlearnerr.png'
  },
  {
    id: 'educational',
    title: 'Forua',
    year: '2024',
    description: 'Foro creado para estudiantes con la función de ver y calificar profesores.',
    badges: ['HTML5', 'CSS3', 'JavaScript', 'Boostrap'],
    image: '/foruaa.png'
  },
  {
    id: 'portfolio',
    title: 'Nutrias',
    year: '2024',
    description: 'Una Página sobre Nutrias.',
    badges: ['HTML', 'CSS', 'JavaScript'],
    image: '/nutrias.png'
  },
  {
    id: 'app',
    title: 'Landing Page - Repify',
    year: '2025',
    description: 'Landing page para Repify, un puente entre estudiantes y proyectos interesantes.',
    badges: ['Next.js', 'TypeScript', 'Tailwind', 'Shadcn', 'Motion'],
    image: '/landingrepi.png'
  },
  {
    id: 'website',
    title: 'TM Cositas',
    year: '2024',
    description: 'Pagina web hecha para TM Cositas.',
    badges: ['Astro', 'Tailwind'],
    image: '/tmcositas.png'
  }
]

const visibleProjects = ref(3)
const currentProject = ref(baseProyectos.length)
const proyectosDuplicados = computed(() => [...baseProyectos, ...baseProyectos, ...baseProyectos])
const wrapperRef = ref(null)

// Responsive logic
const updateVisibleProjects = () => {
  const width = window.innerWidth
  if (width < 768) {
    visibleProjects.value = 1
  } else if (width < 1024) {
    visibleProjects.value = 2
  } else {
    visibleProjects.value = 3
  }
}

onMounted(() => {
  updateVisibleProjects()
  window.addEventListener('resize', updateVisibleProjects)
  startAutoSlide()
})

onUnmounted(() => {
  window.removeEventListener('resize', updateVisibleProjects)
  stopAutoSlide()
})

// Navegación
const nextProject = () => {
  currentProject.value++
  if (currentProject.value >= baseProyectos.length * 2) {
    setTimeout(() => {
      currentProject.value = baseProyectos.length
    }, 500)
  }
}
const prevProject = () => {
  currentProject.value--
  if (currentProject.value < baseProyectos.length) {
    setTimeout(() => {
      currentProject.value = baseProyectos.length * 2 - 1
    }, 500)
  }
}

// Táctil
let startX = 0
const startTouch = (e) => {
  startX = e.touches[0].clientX
}
const onTouchMove = (e) => {
  if (!startX) return
  const deltaX = e.touches[0].clientX - startX
  if (deltaX > 60) {
    prevProject()
    startX = 0
  } else if (deltaX < -60) {
    nextProject()
    startX = 0
  }
}
const endTouch = () => {
  startX = 0
}

// Auto slide
let autoSlideInterval = null
const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    nextProject()
  }, 5000)
}
const stopAutoSlide = () => {
  clearInterval(autoSlideInterval)
}
</script>

<template>
  <section id="proyectos" class="relative py-24 overflow-hidden bg-dark">
    <div class="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-dark to-transparent opacity-80 animate-pulse-slow"></div>
    <div class="absolute rounded-full -top-40 right-20 w-72 h-72 bg-accent/10 blur-3xl animate-bg-float"></div>
    <div class="absolute rounded-full bottom-40 left-20 w-80 h-80 bg-accent/5 blur-3xl animate-bg-float delay-10000"></div>

    <div class="container relative z-10 px-4 mx-auto">
      <div class="mb-20 text-center">
        <p class="mb-2 font-semibold tracking-widest uppercase text-accent">Nuestro Trabajo</p>
        <h2 class="mb-4 text-4xl font-bold md:text-5xl">
          <span class="text-light">Proyectos </span><span class="text-accent">Destacados</span>
        </h2>
        <div class="w-24 h-1 mx-auto mb-8 bg-accent"></div>
        <p class="max-w-2xl mx-auto text-lg text-light/70">
          Soluciones digitales personalizadas que combinan diseño excepcional y desarrollo de alta calidad.
        </p>
      </div>

      <!-- Carrusel -->
      <div class="relative">
        <div
          class="overflow-hidden"
          ref="carouselRef"
          @touchstart="startTouch"
          @touchmove="onTouchMove"
          @touchend="endTouch"
        >
          <div
            class="flex transition-transform duration-500"
            :style="{ transform: `translateX(-${currentProject * (100 / visibleProjects)}%)` }"
            ref="wrapperRef"
          >
            <div
              v-for="(proyecto, index) in proyectosDuplicados"
              :key="index"
              class="flex-shrink-0 px-4"
              :style="{ width: `${100 / visibleProjects}%` }"
            >
              <div class="overflow-hidden transition-all duration-500 transform group hover:-translate-y-2 hover:shadow-lg hover:shadow-accent/30 rounded-xl backdrop-blur-md bg-dark/70">
                <div class="h-full card">
                  <div class="relative w-full h-64 overflow-hidden">
                    <img
                      :src="proyecto.image"
                      :alt="proyecto.title"
                      class="absolute inset-0 object-cover w-full h-full"
                    />
                  </div>
                  <div class="p-4">
                    <div class="flex items-center justify-between mb-2">
                      <h3 class="text-xl font-semibold text-light">{{ proyecto.title }}</h3>
                      <span class="text-xs text-light/50">{{ proyecto.year }}</span>
                    </div>
                    <p class="mb-4 text-light/70">{{ proyecto.description }}</p>
                    <div class="flex flex-wrap gap-2">
                      <span
                        v-for="(tech, i) in proyecto.badges"
                        :key="i"
                        class="flex items-center gap-1 px-3 py-1 text-xs border rounded-full border-accent text-accent bg-dark/50"
                      >
                        <i class="text-[12px] fas fa-code"></i> {{ tech }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Botones -->
        <div class="absolute inset-0 flex items-center justify-between pointer-events-none">
          <button
            class="pointer-events-auto text-accent p-3 rounded-full hover:text-accent/80 z-30 -translate-x-16"
            @click="prevProject"
          >
            <i class="fas fa-chevron-left text-2xl"></i>
          </button>
          <button
            class="pointer-events-auto text-accent p-3 rounded-full hover:text-accent/80 z-30 translate-x-16"
            @click="nextProject"
          >
            <i class="fas fa-chevron-right text-2xl"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes bg-float {
  0%, 100% {
    transform: translateY(0px) translateX(0px);
  }
  50% {
    transform: translateY(20px) translateX(-10px);
  }
}
.animate-bg-float {
  animation: bg-float 45s ease-in-out infinite;
}
</style>

