<template>
  <section id="proyectos" class="relative py-24 overflow-hidden bg-dark">
    <!-- Fondo decorativo -->
    <div class="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-dark to-transparent opacity-80"></div>
    <div class="absolute rounded-full -top-20 right-20 w-72 h-72 bg-accent/10 filter blur-3xl"></div>
    <div class="absolute rounded-full bottom-40 left-20 w-80 h-80 bg-accent/5 filter blur-3xl"></div>

    <div class="container relative z-10 px-4 mx-auto">
      <!-- Título -->
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

      <!-- Grid de proyectos -->
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(proyecto, pIndex) in proyectos"
          :key="proyecto.id"
          class="overflow-hidden transition-all duration-500 transform group hover:-translate-y-2 hover:shadow-lg hover:shadow-accent/30 rounded-xl backdrop-blur-md bg-dark/70"
        >
          <div class="h-full card">
            <!-- Imagen única -->
            <div class="relative w-full h-64 overflow-hidden">
              <img
                :src="proyecto.image"
                :alt="proyecto.title"
                class="absolute inset-0 object-cover w-full h-full"
              />
            </div>

            <!-- Contenido -->
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
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const proyectos = reactive([
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
    year: '2022',
    description: 'Foro creado para estudiantes con la función de ver y calificar profesores.',
    badges: ['HTML5', 'CSS3', 'JavaScript', 'Boostrap'],
    image: '/forua/forua2.png'
  }
])
</script>