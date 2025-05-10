<template>
  <section id="proceso" class="relative py-24 overflow-hidden" :class="isDarkMode ? 'bg-dark' : 'bg-light'">
    <!-- Fondos decorativos -->
    <div
      class="absolute top-0 left-0 w-full h-40 z-0"
      :class="isDarkMode ? 'bg-gradient-to-b from-gray-dark to-transparent opacity-80' : 'bg-gradient-to-b from-gray-200 to-transparent opacity-80'"
    ></div>
    <div
      class="absolute rounded-full -top-20 right-20 w-72 h-72 filter blur-3xl z-0"
      :class="isDarkMode ? 'bg-accent/10' : 'bg-accent/20'"
    ></div>
    <div
      class="absolute rounded-full bottom-40 left-20 w-80 h-80 filter blur-3xl z-0"
      :class="isDarkMode ? 'bg-accent/5' : 'bg-accent/10'"
    ></div>

    <div class="container px-4 mx-auto relative z-10">
      <!-- Título -->
      <div class="mb-20 text-center">
        <h2 class="mb-4 text-4xl font-bold md:text-5xl">
          <span :class="isDarkMode ? 'text-light' : 'text-dark'">Nuestro </span>
          <span :class="isDarkMode ? 'text-accent' : 'text-accent-dark'">Proceso de Trabajo</span>
        </h2>
        <div class="w-24 h-1 mx-auto mb-8" :class="isDarkMode ? 'bg-accent' : 'bg-accent-dark'"></div>
        <p class="max-w-2xl mx-auto text-lg" :class="isDarkMode ? 'text-light/70' : 'text-dark/70'">
          Conoce los pasos que seguimos para garantizar el éxito de cada proyecto.
        </p>
      </div>

      <!-- Timeline -->
      <div
        class="relative space-y-14 before:absolute before:top-14 before:bottom-14 before:left-1/2 before:w-[3px] md:before:block before:hidden"
        :class="isDarkMode ? 'before:bg-accent' : 'before:bg-accent-dark'"
      >
        <template v-for="(paso, index) in pasos" :key="index">
          <div class="relative flex flex-col items-center gap-8 md:grid md:grid-cols-2 md:gap-8">
            <!-- Tarjeta -->
            <div
              class="relative z-20 w-full max-w-md transition transform hover:-translate-y-2 mx-auto md:mx-0"
              :class="index % 2 === 0 ? 'md:col-start-1 md:justify-self-end' : 'md:col-start-2'"
            >
              <div
                class="p-8 transition-all duration-300 border rounded-xl shadow-md hover:scale-[1.02]"
                :class="isDarkMode
                  ? 'bg-dark/70 border-gray-700/40 hover:border-accent hover:shadow-[0_0_25px_rgba(0,255,200,0.3)]'
                  : 'bg-white/80 border-gray-300 hover:border-accent-dark hover:shadow-[0_0_15px_rgba(0,255,200,0.15)]'"
              >
                <h3 class="mb-3 text-2xl font-bold" :class="isDarkMode ? 'text-accent' : 'text-accent-dark'">
                  {{ paso.titulo }}
                </h3>
                <p class="mb-4 text-sm text-light">
                  {{ paso.descripcion }}
                </p>
              </div>
            </div>

            <!-- Ícono central -->
            <div
              class="relative z-30 flex items-center justify-center w-full -mt-8 md:mt-0 md:absolute"
              :class="{
                '-translate-x-1/2 left-1/2': index % 2 === 0,
                'translate-x-1/2 right-1/2': index % 2 !== 0,
              }"
            >
              <div
                class="p-4 border-4 rounded-full shadow-lg hover:scale-110 transition-transform"
                :class="isDarkMode
                  ? 'bg-gray-900 text-accent border-accent shadow-emerald-400/20'
                  : 'bg-white text-accent-dark border-accent-dark shadow-gray-400/20'"
              >
                <component :is="paso.icon" class="w-8 h-8" :class="isDarkMode ? 'text-accent' : 'text-accent-dark'" />
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from 'vue'
import { MessageCircle, Lightbulb, Code2, CheckCircle2 } from 'lucide-vue-next'

const isDarkMode = ref(true)

const pasos = [
  {
    titulo: '1 Reunión inicial',
    descripcion: 'Nos reunimos contigo para entender tus necesidades, objetivos y visión del proyecto.',
    icon: MessageCircle,
  },
  {
    titulo: '2 Diseño y prototipado',
    descripcion: 'Creamos prototipos interactivos que te permiten visualizar el resultado antes del desarrollo.',
    icon: Lightbulb,
  },
  {
    titulo: '3 Desarrollo y pruebas',
    descripcion: 'Desarrollamos tu solución con tecnologías modernas y aplicamos pruebas exhaustivas.',
    icon: Code2,
  },
  {
    titulo: '4 Entrega y soporte',
    descripcion: 'Te entregamos un producto final estable y ofrecemos soporte técnico continuo.',
    icon: CheckCircle2,
  },
]
</script>
