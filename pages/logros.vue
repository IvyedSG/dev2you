<template>
<div class="min-h-screen bg-dark">
    <!-- Incluir el header -->
    <headerdev />

    <!-- Sección de logros - movida más arriba -->
    <section class="relative py-16 overflow-hidden bg-dark pt-8">
        <!-- Fondos decorativos -->
        <div class="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-dark to-transparent opacity-80"></div>
        <div class="absolute rounded-full -top-20 right-20 w-72 h-72 bg-accent/10 filter blur-3xl"></div>
        <div class="absolute rounded-full bottom-40 left-20 w-80 h-80 bg-accent/5 filter blur-3xl"></div>

        <div class="container relative z-10 px-4 mx-auto">
            <!-- Título de la sección -->
            <div class="mb-12 text-center">
                <h2 class="mb-4 text-4xl font-bold md:text-5xl">
                    <span class="text-light">Nuestro </span>
                    <span class="text-accent">Logro</span>
                </h2>
                <div class="w-24 h-1 mx-auto mb-8 bg-accent"></div>
                <p class="max-w-2xl mx-auto text-lg text-light/70">
                    ¡Ganamos el primer puesto en el GreenTech Challenge 2025!
                </p>
            </div>

            <!-- Grid principal -->
            <div class="grid gap-8 lg:grid-cols-2">
                <!-- Columna izquierda: Imágenes más altas sin hover de texto -->
                <div class="space-y-6">
                    <!-- Imagen superior más alta -->
                    <div class="relative overflow-hidden rounded-xl group shadow-xl">
                        <img src="/hackaton-greentech.webp" alt="Equipo colaborando" class="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>

                    <!-- Grid de imágenes más altas -->
                    <div class="grid grid-cols-2 gap-4">
                        <div class="relative overflow-hidden rounded-xl group shadow-lg">
                            <img src="/hackaton-greentech-2.webp" alt="Desarrollo de soluciones" class="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <div class="relative overflow-hidden rounded-xl group shadow-lg">
                            <img src="/hackaton-greentech-3.webp" alt="Implementación tecnológica" class="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105" />
                        </div>
                    </div>
                </div>

                <!-- Columna derecha: Información de logros -->
                <div class="bg-dark/80 border border-gray-700/40 rounded-xl p-8 backdrop-blur-sm shadow-xl hover:shadow-accent/5 transition-all duration-500 hover:border-accent/30">
                    <h3 class="text-2xl font-bold mb-6 text-accent">
                        La Mejor Solución para tus Problemas de TI
                    </h3>

                    <p class="text-light/70 mb-8">
                        Me complace compar  tir que nuestro equipo ha obtenido el primer lugar en el Reto 1: CO₂ y Economía Circular del GreenTech Challenge 2025, una hackathon nacional organizada por la Universidad Continental y la Secretaría Nacional de la Juventud del Perú (SENAJU).
                    </p>

                    <!-- Estadísticas de logros -->
                    <div class="space-y-6">
                        <!-- Experto 1 -->
                        <div class="flex items-center gap-4 border-b border-gray-700/30 pb-4 hover:border-accent/30 transition-colors duration-300 group">
                            <div class="bg-accent/20 p-3 rounded-full group-hover:bg-accent/30 transition-colors duration-300">
                                <i class="fas fa-users text-accent text-xl group-hover:scale-110 transition-transform duration-300"></i>
                            </div>
                            <div class="transition-transform duration-300 group-hover:translate-x-1">
                                <h4 class="text-light font-semibold text-lg">
                                    +120 Clientes Satisfechos
                                </h4>
                                <p class="text-light/60 text-sm">
                                    Proyectos entregados con éxito
                                </p>
                            </div>
                        </div>

                        <!-- Experto 2 -->
                        <div class="flex items-center gap-4 border-b border-gray-700/30 pb-4 hover:border-accent/30 transition-colors duration-300 group">
                            <div class="bg-accent/20 p-3 rounded-full group-hover:bg-accent/30 transition-colors duration-300">
                                <i class="fas fa-code text-accent text-xl group-hover:scale-110 transition-transform duration-300"></i>
                            </div>
                            <div class="transition-transform duration-300 group-hover:translate-x-1">
                                <h4 class="text-light font-semibold text-lg">
                                    +50 Aplicaciones Desarrolladas
                                </h4>
                                <p class="text-light/60 text-sm">
                                    Soluciones para múltiples industrias
                                </p>
                            </div>
                        </div>

                        <!-- Experto 3 -->
                        <div class="flex items-center gap-4 pb-4 hover:border-accent/30 transition-colors duration-300 group">
                            <div class="bg-accent/20 p-3 rounded-full group-hover:bg-accent/30 transition-colors duration-300">
                                <i class="fas fa-trophy text-accent text-xl group-hover:scale-110 transition-transform duration-300"></i>
                            </div>
                            <div class="transition-transform duration-300 group-hover:translate-x-1">
                                <h4 class="text-light font-semibold text-lg">
                                    100% Garantía de Soporte
                                </h4>
                                <p class="text-light/60 text-sm">
                                    Compromiso y acompañamiento continuo
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Botón CTA -->
                    <div class="mt-10">
                        <a href="#contacto" class="group inline-flex items-center px-6 py-3 text-base font-semibold tracking-wide rounded-lg shadow-md bg-accent text-dark hover:bg-accent/90 hover:shadow-accent/30 hover:shadow-lg transition-all duration-300">
                            <i class="fas fa-paper-plane mr-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                            <span>Contáctanos Ahora</span>
                            <i class="fas fa-arrow-right ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
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
</script>

<style scoped>
.animate-pulse-slow {
    animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {

    0%,
    100% {
        opacity: 0.6;
    }

    50% {
        opacity: 0.8;
    }
}
</style>
