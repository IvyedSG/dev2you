<template>
  <section id="proceso" class="relative py-24 overflow-hidden bg-dark">
    <!-- Fondo decorativo -->
    <div class="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-dark to-transparent opacity-80"></div>
    <div class="absolute rounded-full -top-20 right-20 w-72 h-72 bg-accent/10 filter blur-3xl"></div>
    <div class="absolute rounded-full bottom-40 left-20 w-80 h-80 bg-accent/5 filter blur-3xl"></div>

    <div class="container px-4 mx-auto">
      <!-- Título -->
      <div class="mb-20 text-center">
        <p class="mb-2 font-semibold tracking-widest uppercase text-accent">Nuestro Trabajo</p>
        <h2 class="mb-4 text-4xl font-bold md:text-5xl">
          <span class="text-light">Nuestro </span><span class="text-accent">Proceso de Trabajo</span>
        </h2>
        <div class="w-24 h-1 mx-auto mb-8 bg-accent"></div>
        <p class="max-w-2xl mx-auto text-lg text-light/70">
          Conoce los pasos que seguimos para garantizar el éxito de cada proyecto.
        </p>
      </div>

      <!-- Línea vertical (timeline) -->
      <div class="relative space-y-16 before:absolute before:inset-y-0 before:left-1/2 before:w-[1px] before:bg-accent before:-translate-x-1/2">
        <template v-for="(paso, index) in pasos" :key="index">
          <div class="relative flex flex-col items-center gap-8 md:grid md:grid-cols-2 md:gap-8">
            <!-- Tarjeta izquierda (PC) o centrada (móvil) -->
            <div
              class="w-full max-w-md transition transform hover:-translate-y-2 hover:scale-[1.02] hover:border-accent hover:shadow-[0_0_25px_rgba(0,255,200,0.3)] mx-auto md:mx-0"
              :class="index % 2 === 0 ? 'md:col-start-1 md:justify-self-end' : 'md:col-start-2'"
            >
              <div class="p-6 border rounded-lg shadow-xl bg-gray-800/50 backdrop-blur-sm border-gray-700/40 hover:border-accent hover:shadow-[0_0_20px_rgba(0,255,200,0.3)]">
                <h3 class="mb-3 text-2xl font-bold text-accent">{{ paso.titulo }}</h3>
                <p class="text-white/80">{{ paso.descripcion }}</p>
              </div>
            </div>

            <!-- Ícono central -->
            <div
              class="relative z-10 flex flex-col items-center justify-center w-full -mt-8 md:mt-0 md:absolute"
              :class="{
                '-translate-x-1/2 left-1/2': index % 2 === 0,
                'translate-x-1/2 right-1/2': index % 2 !== 0,
              }"
            >
              <div class="p-4 bg-gray-900 border-4 rounded-full shadow-lg text-accent shadow-emerald-400/20 hover:scale-110 transition-transform">
                <component :is="paso.icon" class="w-8 h-8 text-accent" />
              </div>
              <div class="mt-2 text-5xl font-extrabold text-emerald-900/10">
                {{ (index + 1).toString().padStart(2, '0') }}
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup>
import { MessageCircle, Lightbulb, Code2, CheckCircle2 } from 'lucide-vue-next';

const pasos = [
  {
    titulo: 'Reunión inicial',
    descripcion: 'Nos reunimos contigo para entender tus necesidades, objetivos y visión del proyecto.',
    icon: MessageCircle,
  },
  {
    titulo: 'Diseño y prototipado',
    descripcion: 'Creamos prototipos interactivos que te permiten visualizar el resultado antes del desarrollo.',
    icon: Lightbulb,
  },
  {
    titulo: 'Desarrollo y pruebas',
    descripcion: 'Desarrollamos tu solución con tecnologías modernas y aplicamos pruebas exhaustivas.',
    icon: Code2,
  },
  {
    titulo: 'Entrega y soporte',
    descripcion: 'Te entregamos un producto final estable y ofrecemos soporte técnico continuo.',
    icon: CheckCircle2,
  },
];
</script>