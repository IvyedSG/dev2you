<template>
<div class="min-h-screen bg-dark">
    <!-- Sección de logros mejorada -->
    <section class="relative py-16 overflow-hidden bg-dark pt-28">
        <!-- Fondos decorativos mejorados -->
        <div class="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-900/50 to-transparent"></div>
        <div class="absolute rounded-full -top-20 right-20 w-96 h-96 bg-accent/10 filter blur-3xl animate-pulse-slow"></div>
        <div class="absolute rounded-full bottom-40 left-20 w-80 h-80 bg-accent/5 filter blur-3xl animate-pulse-slow delay-1000"></div>
        <div class="absolute rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/5 filter blur-2xl"></div>

        <div class="container relative z-10 px-4 mx-auto">
            <!-- Título de la sección mejorado -->
            <div class="mb-16 text-center">
                <!-- Badge superior -->
                <div class="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium bg-accent/10 border border-accent/20 rounded-full text-accent">
                    <i class="fas fa-trophy mr-2"></i>
                    GreenTech Challenge 2025 - Primer Lugar
                </div>
                
                <h2 class="mb-6 text-5xl font-bold md:text-6xl lg:text-7xl">
                    <span class="text-light">Nuestro </span>
                    <span class="text-accent bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent">Logro</span>
                </h2>
                <div class="w-32 h-1 mx-auto mb-8 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
                <p class="max-w-3xl mx-auto text-xl text-light/80 leading-relaxed">
                    ¡Ganamos el primer puesto en el GreenTech Challenge 2025! Una victoria que demuestra nuestro compromiso con la innovación tecnológica y el desarrollo sostenible.
                </p>
            </div>

            <!-- Grid principal mejorado -->
            <div class="grid gap-12 lg:grid-cols-2 items-start">
                <!-- Columna izquierda: Galería de imágenes / Slider en móvil -->
                <div class="space-y-6">
                    <!-- Slider para móvil (visible solo en móvil) -->
                    <div class="lg:hidden relative overflow-hidden rounded-2xl shadow-2xl">
                        <div 
                            class="flex transition-transform duration-500 ease-in-out"
                            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
                            @touchstart="handleTouchStart"
                            @touchmove="handleTouchMove"
                            @touchend="handleTouchEnd"
                        >
                            <div v-for="(image, index) in images" :key="index" class="min-w-full">
                                <img 
                                    :src="image.src" 
                                    :alt="image.alt" 
                                    class="w-full h-80 object-cover"
                                />
                            </div>
                        </div>
                        
                        <!-- Indicadores del slider -->
                        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            <button 
                                v-for="(image, index) in images" 
                                :key="index"
                                @click="currentSlide = index"
                                class="w-3 h-3 rounded-full transition-all duration-300"
                                :class="currentSlide === index ? 'bg-accent' : 'bg-white/50'"
                            ></button>
                        </div>
                        
                        <!-- Botones de navegación -->
                        <button 
                            @click="prevSlide"
                            class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-dark/70 text-white p-2 rounded-full hover:bg-dark/90 transition-all duration-300"
                        >
                            <i class="fas fa-chevron-left"></i>
                        </button>
                        <button 
                            @click="nextSlide"
                            class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-dark/70 text-white p-2 rounded-full hover:bg-dark/90 transition-all duration-300"
                        >
                            <i class="fas fa-chevron-right"></i>
                        </button>
                    </div>

                    <!-- Galería original para desktop (visible solo en desktop) -->
                    <div class="hidden lg:block space-y-6">
                        <!-- Imagen principal -->
                        <div class="relative overflow-hidden rounded-2xl group shadow-2xl">
                            <img src="/hackaton-greentech.webp" alt="Equipo Dev4You en GreenTech Challenge" class="w-full h-[36rem] object-cover transition-all duration-700 group-hover:scale-105" />
                        </div>

                        <!-- Grid de imágenes secundarias -->
                        <div class="grid grid-cols-2 gap-6">
                            <div class="relative overflow-hidden rounded-xl group shadow-xl">
                                <img src="/hackaton-greentech-2.webp" alt="Desarrollo de la solución" class="w-full h-72 object-cover transition-all duration-700 group-hover:scale-105" />
                            </div>
                            <div class="relative overflow-hidden rounded-xl group shadow-xl">
                                <img src="/hackaton-greentech-3.webp" alt="Presentación final" class="w-full h-72 object-cover transition-all duration-700 group-hover:scale-105" />
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Columna derecha: Información detallada -->
                <div class="bg-gradient-to-br from-dark/90 to-gray-900/80 border border-gray-700/40 rounded-2xl p-6 md:p-10 backdrop-blur-sm shadow-2xl hover:shadow-accent/10 transition-all duration-700 hover:border-accent/40">
                    <!-- Header con logo del evento -->
                    <div class="flex flex-col md:flex-row items-center gap-4 mb-8 text-center md:text-left">
                        <div class="bg-accent/20 p-4 rounded-full">
                            <i class="fas fa-leaf text-accent text-2xl"></i>
                        </div>
                        <div>
                            <h3 class="text-2xl md:text-3xl font-bold text-accent mb-2">
                                GreenTech Challenge 2025
                            </h3>
                            <p class="text-light/60">Universidad Continental & SENAJU</p>
                        </div>
                    </div>

                    <!-- Descripción expandida -->
                    <div class="mb-10">
                        <p class="text-light/80 mb-4 leading-relaxed text-justify">
                            Dev4You obtuvo el <strong class="text-accent">Primer Lugar</strong> en el Reto 1: CO₂ y Economía Circular del GreenTech Challenge 2025.
                        </p>
                        <p class="text-light/70 leading-relaxed text-justify">
                            Esta hackathon nacional, organizada por la Universidad Continental y la Secretaría Nacional de la Juventud del Perú (SENAJU), reunió a los mejores talentos tecnológicos del país para crear soluciones innovadoras enfocadas en sostenibilidad.
                        </p>
                    </div>

                    <!-- Estadísticas destacadas -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                        <div class="text-center p-4 bg-accent/5 rounded-xl border border-accent/20">
                            <div class="text-3xl font-bold text-accent mb-1">1°</div>
                            <div class="text-light/60 text-sm">Sede Lima</div>
                        </div>
                        <div class="text-center p-4 bg-accent/5 rounded-xl border border-accent/20">
                            <div class="text-3xl font-bold text-accent mb-1">48h</div>
                            <div class="text-light/60 text-sm">De Desarrollo</div>
                        </div>
                    </div>

                    <!-- Logros del equipo -->
                    <div class="space-y-6 mb-10">
                        <h4 class="text-xl font-semibold text-light mb-6 text-center md:text-left">Nuestros Logros</h4>
                        
                        <div class="flex flex-col md:flex-row items-center md:items-start gap-4 p-4 bg-dark/40 rounded-xl border border-gray-700/30 hover:border-accent/30 transition-all duration-300 group text-center md:text-left">
                            <div class="bg-accent/20 p-3 rounded-full group-hover:bg-accent/30 transition-colors duration-300">
                                <i class="fas fa-trophy text-accent text-xl"></i>
                            </div>
                            <div>
                                <h5 class="text-light font-semibold">Solución Más Innovadora</h5>
                                <p class="text-light/60 text-sm text-justify md:text-left">Reconocidos por creatividad y viabilidad técnica</p>
                            </div>
                        </div>

                        <div class="flex flex-col md:flex-row items-center md:items-start gap-4 p-4 bg-dark/40 rounded-xl border border-gray-700/30 hover:border-accent/30 transition-all duration-300 group text-center md:text-left">
                            <div class="bg-accent/20 p-3 rounded-full group-hover:bg-accent/30 transition-colors duration-300">
                                <i class="fas fa-users text-accent text-xl"></i>
                            </div>
                            <div>
                                <h5 class="text-light font-semibold">Mejor Trabajo en Equipo</h5>
                                <p class="text-light/60 text-sm text-justify md:text-left">Colaboración excepcional y liderazgo</p>
                            </div>
                        </div>

                        <div class="flex flex-col md:flex-row items-center md:items-start gap-4 p-4 bg-dark/40 rounded-xl border border-gray-700/30 hover:border-accent/30 transition-all duration-300 group text-center md:text-left">
                            <div class="bg-accent/20 p-3 rounded-full group-hover:bg-accent/30 transition-colors duration-300">
                                <i class="fas fa-code text-accent text-xl"></i>
                            </div>
                            <div>
                                <h5 class="text-light font-semibold">Implementación Técnica</h5>
                                <p class="text-light/60 text-sm text-justify md:text-left">Código limpio y arquitectura escalable</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Configurar el layout sin footer
definePageMeta({
    layout: 'sin-footer'
})

// Configuración SEO avanzada
useHead({
    title: "Nuestros Logros y Casos de Éxito | Dev4You",
    meta: [{
            name: "description",
            content: "Descubre nuestros casos de éxito y cómo hemos ayudado a empresas a alcanzar sus objetivos con soluciones tecnológicas personalizadas.",
        },
        {
            name: "keywords",
            content: "casos de éxito, desarrollo de software, proyectos personalizados, soluciones IT",
        },
    ],
});

// Configuración del slider
const currentSlide = ref(0)
const images = ref([
    {
        src: '/hackaton-greentech.webp',
        alt: 'Equipo Dev4You en GreenTech Challenge'
    },
    {
        src: '/hackaton-greentech-2.webp',
        alt: 'Desarrollo de la solución'
    },
    {
        src: '/hackaton-greentech-3.webp',
        alt: 'Presentación final'
    }
])

// Variables para gestos táctiles
const touchStartX = ref(0)
const touchEndX = ref(0)
const minSwipeDistance = 50

// Auto-play del slider
let autoPlayInterval = null

const startAutoPlay = () => {
    autoPlayInterval = setInterval(() => {
        nextSlide()
    }, 6000) // 6 segundos
}

const stopAutoPlay = () => {
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval)
        autoPlayInterval = null
    }
}

const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % images.value.length
}

const prevSlide = () => {
    currentSlide.value = currentSlide.value === 0 ? images.value.length - 1 : currentSlide.value - 1
}

// Manejo de gestos táctiles
const handleTouchStart = (e) => {
    touchStartX.value = e.touches[0].clientX
    stopAutoPlay() // Parar auto-play cuando el usuario interactúa
}

const handleTouchMove = (e) => {
    touchEndX.value = e.touches[0].clientX
}

const handleTouchEnd = () => {
    const swipeDistance = touchStartX.value - touchEndX.value
    
    if (Math.abs(swipeDistance) > minSwipeDistance) {
        if (swipeDistance > 0) {
            nextSlide() // Swipe izquierda -> siguiente
        } else {
            prevSlide() // Swipe derecha -> anterior
        }
    }
    
    // Reiniciar auto-play después de 2 segundos
    setTimeout(() => {
        startAutoPlay()
    }, 2000)
}

// Lifecycle hooks
onMounted(() => {
    startAutoPlay()
})

onUnmounted(() => {
    stopAutoPlay()
})
</script>

<style scoped>
.animate-pulse-slow {
    animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.delay-1000 {
    animation-delay: 1s;
}

@keyframes pulse {
    0%, 100% {
        opacity: 0.4;
    }
    50% {
        opacity: 0.8;
    }
}

/* Efecto de brillo en hover */
.group:hover .bg-accent\/20 {
    box-shadow: 0 0 20px rgba(var(--accent-rgb), 0.3);
}

/* Suavizar transiciones del slider */
.transition-transform {
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
