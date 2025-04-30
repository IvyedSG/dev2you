<template>
  <section id="proyectos" class="py-24 bg-dark relative overflow-hidden">
    <!-- Elementos de diseño de fondo -->
    <div class="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-dark to-transparent opacity-80"></div>
    <div class="absolute -top-20 right-20 w-72 h-72 bg-accent/10 rounded-full filter blur-3xl"></div>
    <div class="absolute bottom-40 left-20 w-80 h-80 bg-accent/5 rounded-full filter blur-3xl"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <!-- Encabezado de sección -->
      <div class="text-center mb-20">
        <p class="text-accent uppercase tracking-widest font-semibold mb-2">Nuestro Trabajo</p>
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          <span class="text-light">Proyectos </span>
          <span class="text-accent">Destacados</span>
        </h2>
        <div class="h-1 w-24 bg-accent mx-auto mb-8"></div>
        <p class="max-w-2xl mx-auto text-light/70 text-lg">
          Soluciones digitales personalizadas que combinan diseño excepcional y desarrollo de alta calidad
          para transformar ideas en experiencias memorables.
        </p>
      </div>
      
      <!-- Filtros de proyecto con diseño mejorado -->
      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button 
          class="btn btn-sm" 
          :class="activeFilter === 'all' ? 'btn-accent' : 'btn-ghost text-light hover:text-accent'"
          @click="applyFilter('all')">
          Todos
        </button>
        <button 
          class="btn btn-sm" 
          :class="activeFilter === 'web' ? 'btn-accent' : 'btn-ghost text-light hover:text-accent'"
          @click="applyFilter('web')">
          Web
        </button>
        <button 
          class="btn btn-sm" 
          :class="activeFilter === 'movil' ? 'btn-accent' : 'btn-ghost text-light hover:text-accent'"
          @click="applyFilter('movil')">
          Móvil
        </button>
        <button 
          class="btn btn-sm" 
          :class="activeFilter === 'uiux' ? 'btn-accent' : 'btn-ghost text-light hover:text-accent'"
          @click="applyFilter('uiux')">
          UI/UX
        </button>
        <button 
          class="btn btn-sm" 
          :class="activeFilter === 'ecommerce' ? 'btn-accent' : 'btn-ghost text-light hover:text-accent'"
          @click="applyFilter('ecommerce')">
          E-commerce
        </button>
      </div>
      
      <!-- Grid de proyectos con transiciones mejoradas -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Proyectos filtrados y paginados -->
        <div 
          v-for="proyecto in proyectosPaginados" 
          :key="proyecto.id" 
          class="group">
          <div class="card bg-dark overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-md shadow-accent/5 h-full">
            <figure class="relative overflow-hidden h-64">
              <div class="w-full h-full bg-gradient-to-tr" :class="proyecto.gradientClass">
                <i :class="`${proyecto.icon} text-7xl text-accent group-hover:scale-110 transition-all duration-300`" class="flex items-center justify-center h-full"></i>
              </div>
              <div class="absolute inset-0 bg-accent/80 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                <button class="btn btn-circle bg-dark border-0 text-accent hover:bg-dark/80 mx-2 hover:scale-105 transition-transform">
                  <i class="fas fa-external-link-alt"></i>
                </button>
                <button class="btn btn-circle bg-dark border-0 text-accent hover:bg-dark/80 mx-2 hover:scale-105 transition-transform" @click="openModal(proyecto.id)">
                  <i class="fas fa-search-plus"></i>
                </button>
              </div>
            </figure>
            <div class="card-body">
              <div class="flex justify-between items-center mb-2">
                <h3 class="card-title text-xl text-light group-hover:text-accent transition-colors">{{ proyecto.title }}</h3>
                <span class="text-xs text-light/50">{{ proyecto.year }}</span>
              </div>
              <p class="text-light/70 mb-4">{{ proyecto.description }}</p>
              <div class="card-actions justify-end">
                <span v-for="(tech, i) in proyecto.badges" :key="i" class="badge badge-outline text-accent border-accent">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Paginación -->
      <div class="flex justify-center mt-12 gap-2">
        <button 
          class="btn btn-circle"
          :class="currentPage === 1 ? 'btn-disabled' : 'btn-accent'" 
          @click="prevPage"
          :disabled="currentPage === 1">
          <i class="fas fa-arrow-left"></i>
        </button>
        
        <div class="join">
          <button 
            v-for="page in totalPages" 
            :key="page"
            class="join-item btn" 
            :class="page === currentPage ? 'btn-accent' : 'btn-ghost'" 
            @click="changePage(page)">
            {{ page }}
          </button>
        </div>
        
        <button 
          class="btn btn-circle" 
          :class="currentPage === totalPages ? 'btn-disabled' : 'btn-accent'"
          @click="nextPage" 
          :disabled="currentPage === totalPages">
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
    
    <!-- Modal para detalles de proyecto -->
    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/80 backdrop-blur-sm">
      <div class="bg-gray-dark rounded-xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto overflow-x-hidden">
        <div class="p-6">
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-2xl font-bold text-light">{{ modalContent.title }}</h3>
            <button class="btn btn-circle btn-sm" @click="closeModal">
              <i class="fas fa-times"></i>
            </button>
          </div>
          
          <div class="mb-6 flex justify-center">
            <div class="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center">
              <i :class="`${modalContent.icon} text-5xl text-accent`"></i>
            </div>
          </div>
          
          <p class="text-light/70 mb-6">{{ modalContent.description }}</p>
          
          <div class="mb-6">
            <h4 class="text-xl font-semibold mb-3 text-light">Características principales</h4>
            <ul class="space-y-2">
              <li v-for="(feature, idx) in modalContent.features" :key="idx" class="flex items-start">
                <i class="fas fa-check-circle text-accent mt-1 mr-2"></i>
                <span class="text-light/70">{{ feature }}</span>
              </li>
            </ul>
          </div>
          
          <div class="mb-6">
            <h4 class="text-xl font-semibold mb-3 text-light">Tecnologías utilizadas</h4>
            <div class="flex flex-wrap gap-2">
              <span v-for="(tech, idx) in modalContent.technologies" :key="idx" 
                 class="badge badge-outline text-accent border-accent py-3 px-4">
                {{ tech }}
              </span>
            </div>
          </div>
          
          <div class="flex justify-end mt-8">
            <button class="btn btn-primary" @click="closeModal">
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue';

// Estado para filtros y paginación
const activeFilter = ref('all');
const currentPage = ref(1);
const proyectosPorPagina = 3;

// Estado para modal
const showModal = ref(false);
const modalContent = ref({});

// Definición de proyectos
const proyectos = reactive([
  {
    id: 'ecommerce',
    title: 'E-commerce Artesanías',
    year: '2023',
    description: 'Plataforma integral para artesanos locales con sistema de gestión, pagos online y análisis de ventas.',
    icon: 'fas fa-store',
    gradientClass: 'from-amber-900/60 to-gray-dark',
    badges: ['Vue.js', 'Nuxt', 'Stripe'],
    categories: ['web', 'ecommerce']
  },
  {
    id: 'delivery',
    title: 'App Delivery Restaurant',
    year: '2023',
    description: 'Solución móvil multiplataforma con seguimiento GPS, notificaciones push y sistema de reseñas.',
    icon: 'fas fa-utensils',
    gradientClass: 'from-rose-900/60 to-gray-dark',
    badges: ['React Native', 'Firebase', 'Maps API'],
    categories: ['movil']
  },
  {
    id: 'educational',
    title: 'Plataforma Educativa',
    year: '2024',
    description: 'Sistema integral de aprendizaje con streaming de video, foros interactivos y seguimiento personalizado.',
    icon: 'fas fa-graduation-cap',
    gradientClass: 'from-emerald-900/60 to-gray-dark',
    badges: ['Laravel', 'Vue', 'WebRTC'],
    categories: ['web']
  },
  {
    id: 'dashboard',
    title: 'Dashboard Analytics',
    year: '2024',
    description: 'Panel de análisis de datos con visualizaciones interactivas y reportes personalizados en tiempo real.',
    icon: 'fas fa-chart-pie',
    gradientClass: 'from-blue-900/60 to-gray-dark',
    badges: ['React', 'D3.js', 'Node.js'],
    categories: ['web', 'uiux']
  },
  {
    id: 'finance',
    title: 'App Finanzas Personales',
    year: '2024',
    description: 'Aplicación intuitiva para control de gastos, inversiones y metas financieras con análisis predictivo.',
    icon: 'fas fa-wallet',
    gradientClass: 'from-green-900/60 to-gray-dark',
    badges: ['Flutter', 'Firebase', 'ML Kit'],
    categories: ['movil', 'uiux']
  },
  {
    id: 'marketplace',
    title: 'Marketplace Multi-vendor',
    year: '2024',
    description: 'Plataforma completa para múltiples vendedores con sistema de comisiones, chat integrado y análisis de rendimiento.',
    icon: 'fas fa-shopping-cart',
    gradientClass: 'from-purple-900/60 to-gray-dark',
    badges: ['Next.js', 'MongoDB', 'GraphQL'],
    categories: ['web', 'ecommerce']
  }
]);

// Datos para los modales de proyectos
const projectDetails = reactive({
  ecommerce: {
    title: 'E-commerce Artesanías',
    icon: 'fas fa-store',
    description: 'Plataforma e-commerce completa desarrollada para una asociación de artesanos locales, permitiéndoles vender sus productos a nivel nacional e internacional con una experiencia de usuario excepcional.',
    features: [
      'Sistema de gestión de inventario personalizado',
      'Pasarelas de pago múltiples (Stripe, PayPal, tarjeta)',
      'Panel de administración intuitivo para vendedores',
      'Análisis de métricas de venta y comportamiento de usuarios',
      'Integración con sistemas logísticos para envíos'
    ],
    technologies: ['Vue.js', 'Nuxt', 'Node.js', 'MongoDB', 'Stripe API', 'AWS S3']
  },
  delivery: {
    title: 'App Delivery Restaurant',
    icon: 'fas fa-utensils',
    description: 'Aplicación móvil multiplataforma para cadena de restaurantes que permite a los usuarios realizar pedidos, seguir su entrega en tiempo real y gestionar sus preferencias gastronómicas.',
    features: [
      'Sistema de pedidos con personalización de productos',
      'Seguimiento en tiempo real con GPS del repartidor',
      'Notificaciones push sobre estado de la orden',
      'Sistema de reseñas y calificaciones',
      'Historial y favoritos para pedidos frecuentes'
    ],
    technologies: ['React Native', 'Firebase', 'Google Maps API', 'Node.js', 'Stripe', 'OneSignal']
  },
  educational: {
    title: 'Plataforma Educativa',
    icon: 'fas fa-graduation-cap',
    description: 'Sistema integral de gestión educativa para una institución local, permitiendo la administración de cursos, interacción entre estudiantes y profesores, y seguimiento del aprendizaje.',
    features: [
      'Gestión de cursos y contenidos multimedia',
      'Videoconferencias integradas para clases en vivo',
      'Foros de discusión y mensajería interna',
      'Sistema de evaluación y calificaciones automatizado',
      'Generación de informes de rendimiento personalizado'
    ],
    technologies: ['Laravel', 'Vue', 'MySQL', 'WebRTC', 'AWS', 'Socket.io']
  },
  dashboard: {
    title: 'Dashboard Analytics',
    icon: 'fas fa-chart-pie',
    description: 'Panel de control analítico para empresa del sector retail que permite visualizar y analizar datos de ventas, inventario y comportamiento de clientes en tiempo real.',
    features: [
      'Visualizaciones interactivas personalizables',
      'Sistema de reportes automatizados',
      'Predicciones de ventas basadas en IA',
      'Integración con múltiples fuentes de datos',
      'Alertas y notificaciones configurables'
    ],
    technologies: ['React', 'D3.js', 'Node.js', 'GraphQL', 'TensorFlow.js', 'AWS']
  },
  finance: {
    title: 'App Finanzas Personales',
    icon: 'fas fa-wallet',
    description: 'Aplicación móvil para gestión financiera personal que ayuda a los usuarios a controlar gastos, establecer metas de ahorro y mejorar sus hábitos financieros.',
    features: [
      'Seguimiento automático de gastos e ingresos',
      'Establecimiento y seguimiento de metas financieras',
      'Análisis predictivo de tendencias de gasto',
      'Integración con cuentas bancarias (lectura)',
      'Reportes personalizados y consejos de ahorro'
    ],
    technologies: ['Flutter', 'Firebase', 'ML Kit', 'Node.js', 'Plaid API', 'Google Cloud']
  },
  marketplace: {
    title: 'Marketplace Multi-vendor',
    icon: 'fas fa-shopping-cart',
    description: 'Plataforma tipo marketplace que permite a múltiples vendedores ofrecer sus productos en un solo lugar, con gestión independiente de tiendas y sistema de comisiones.',
    features: [
      'Sistema de tiendas independientes para vendedores',
      'Gestión de comisiones y pagos automatizados',
      'Chat integrado entre compradores y vendedores',
      'Sistema de reseñas y valoraciones',
      'Analíticas detalladas para vendedores y administradores'
    ],
    technologies: ['Next.js', 'MongoDB', 'GraphQL', 'Redis', 'AWS', 'Stripe Connect']
  }
});

// Computed properties para filtrado y paginación
const proyectosFiltrados = computed(() => {
  if (activeFilter.value === 'all') {
    return proyectos;
  }
  return proyectos.filter(proyecto => proyecto.categories.includes(activeFilter.value));
});

const totalPages = computed(() => {
  return Math.ceil(proyectosFiltrados.value.length / proyectosPorPagina);
});

const proyectosPaginados = computed(() => {
  const inicio = (currentPage.value - 1) * proyectosPorPagina;
  const fin = inicio + proyectosPorPagina;
  return proyectosFiltrados.value.slice(inicio, fin);
});

// Métodos para manejar filtros y paginación
const applyFilter = (filter) => {
  activeFilter.value = filter;
  currentPage.value = 1; // Reiniciar a primera página al cambiar el filtro
};

const changePage = (page) => {
  currentPage.value = page;
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

// Watch para asegurarse que la página actual existe después de filtrar
watch(proyectosFiltrados, () => {
  if (currentPage.value > totalPages.value) {
    currentPage.value = totalPages.value || 1;
  }
});

// Métodos para modales
const openModal = (project) => {
  modalContent.value = projectDetails[project];
  showModal.value = true;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  showModal.value = false;
  document.body.style.overflow = 'auto';
};
</script>

<style scoped>
/* Transiciones para la paginación */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>