<template>
  <section id="proceso" class="relative py-24 overflow-hidden" :class="isDarkMode ? 'bg-dark' : 'bg-light'">
    <div class="container px-4 mx-auto">
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
