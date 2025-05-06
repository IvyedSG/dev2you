<template>
  <div class="relative min-h-screen overflow-hidden hero bg-dark">
    <!-- Fondos abstractos -->
    <div class="absolute top-0 left-0 w-64 h-64 rounded-full bg-accent/10 filter blur-3xl"></div>
    <div class="absolute bottom-0 right-0 rounded-full w-96 h-96 bg-accent/10 filter blur-3xl"></div>
    <div class="absolute rounded-full top-1/3 right-1/4 w-72 h-72 bg-primary/5 filter blur-2xl"></div>

    <div class="flex flex-col gap-12 hero-content lg:flex-row-reverse">
      <!-- Tarjetas -->
      <div class="relative w-full card-stack lg:w-2/5 h-80 lg:h-96">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="absolute w-full h-full p-6 space-y-3 transition-all duration-500 border shadow-2xl border-accent/20 rounded-2xl bg-dark/90 backdrop-blur-md text-light"
          :style="cardStyle(index)"
        >
          <h3 class="text-xl font-semibold leading-tight text-accent">
            {{ card.title }}
          </h3>

          <p class="text-sm leading-relaxed text-light/90 line-clamp-3">
            {{ card.mainText }}
          </p>

          <p v-if="card.hoverText" class="text-xs text-gray-light line-clamp-2">
            {{ card.hoverText }}
          </p>

          <div class="flex flex-wrap mt-2 space-x-2 text-accent-dark">
            <component
              v-for="icon in card.icons"
              :is="icon"
              :key="icon"
              class="w-5 h-5"
            />
          </div>
        </div>
      </div>

      <!-- Contenido de texto -->
      <div class="w-full text-left lg:w-3/5">
        <div class="mb-4">
          <span class="px-4 py-1 text-sm font-medium rounded-full bg-accent/10 text-accent">Impulsamos tu éxito</span>
        </div>

        <h1 class="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          <span class="text-light">Creamos soluciones</span>
          <span class="text-accent"> Digitales</span>
          <span class="text-light"> a tu medida</span>
        </h1>
        <p class="mb-8 text-xl leading-relaxed text-light/80">
          Diseñamos soluciones digitales personalizadas que combinan creatividad y tecnología para impulsar tus proyectos.
        </p>

        <div class="flex flex-wrap gap-4 mt-8">
          <!-- Botón "Explorar proyectos" -->
          <a
            href="#proyectos"
            class="hidden px-5 py-2 text-sm font-semibold tracking-wide transition-transform duration-300 rounded-lg shadow-md lg:inline-block bg-accent text-dark hover:scale-105 hover:shadow-lg"
          >
            Explorar proyectos
          </a>
          <!-- Botón "Contáctanos" -->
          <a
            href="#contacto"
            class="hidden px-5 py-2 text-sm font-semibold tracking-wide transition-transform duration-300 rounded-lg shadow-md lg:inline-block bg-accent text-dark hover:scale-105 hover:shadow-lg"
          >
            Contáctanos
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
import { ref, onMounted, onBeforeUnmount } from 'vue'

// Íconos (asegúrate de tener instalado `lucide-vue-next`)
import {
  LayoutDashboard, ClipboardList, School,
  BarChart2, Activity, PieChart,
  Settings2, Repeat, Workflow,
  UserCheck, ShieldCheck, LockKeyhole,
  Boxes, FolderCog, Building2
} from 'lucide-vue-next'

const cards = [
  {
    title: '🧠 Sistemas de gestión personalizados',
    mainText: 'Creamos plataformas adaptadas a tu organización para gestionar información, flujos de trabajo y usuarios de forma eficiente.',
    hoverText: 'Desde entornos educativos hasta soluciones empresariales, desarrollamos herramientas hechas a medida para mejorar tu operación.',
    icons: [LayoutDashboard, ClipboardList, School]
  },
  {
    title: '📊 Dashboards interactivos',
    mainText: 'Diseñamos paneles visuales que te permiten visualizar tus métricas más importantes en tiempo real.',
    hoverText: 'Convierte tus datos en decisiones con gráficos, filtros y reportes completamente adaptados a tus necesidades.',
    icons: [BarChart2, Activity, PieChart]
  },
  {
    title: '⚙️ Automatización de procesos',
    mainText: 'Eliminamos tareas repetitivas con soluciones digitales que agilizan tu día a día.',
    hoverText: 'Automatiza flujos internos, generación de documentos o integraciones con sistemas externos. Tu tiempo vale más.',
    icons: [Settings2, Repeat, Workflow]
  },
  {
    title: '🔒 Gestión de accesos y usuarios',
    mainText: 'Creamos sistemas seguros con roles personalizados, permisos granulares y autenticación integrada.',
    hoverText: 'Controla qué puede ver o hacer cada usuario. Seguridad, escalabilidad y claridad desde el inicio.',
    icons: [UserCheck, ShieldCheck, LockKeyhole]
  },
  {
    title: '📦 Sistemas internos a medida',
    mainText: 'Digitalizamos tus procesos internos para que trabajes de forma más ordenada, ágil y profesional.',
    hoverText: 'Cada empresa es única. Creamos herramientas que se ajustan a cómo tú operas, sin depender de soluciones genéricas.',
    icons: [Boxes, FolderCog, Building2]
  }
]

const currentIndex = ref(0)
let interval
let codeInterval

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

const particles = [
  { top: 15, left: 10, size: 6, color: 'accent', duration: 8, delay: 0 },
  { top: 25, left: 25, size: 8, color: 'primary', duration: 12, delay: 1 },
  { top: 60, left: 70, size: 4, color: 'accent', duration: 10, delay: 0.5 },
  { top: 80, left: 30, size: 7, color: 'primary', duration: 9, delay: 2 },
  { top: 40, left: 80, size: 5, color: 'accent', duration: 11, delay: 1.5 },
  { top: 70, left: 85, size: 6, color: 'primary', duration: 7, delay: 0.7 },
  { top: 55, left: 15, size: 4, color: 'accent', duration: 13, delay: 2.5 },
  { top: 30, left: 60, size: 8, color: 'primary', duration: 6, delay: 1.2 }
]

const codeLines = [
  'const app = createApp(App);',
  'app.use(router).use(store);',
  'app.mount("#app");',
  'function optimize() {',
  '  return performance++;',
  '}'
]

const activeCodeLine = ref(0)

onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % cards.length
  }, 3000)

  codeInterval = setInterval(() => {
    activeCodeLine.value = (activeCodeLine.value + 1) % 3
  }, 2000)
})

onBeforeUnmount(() => {
  clearInterval(interval)
  clearInterval(codeInterval)
})
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
</style>