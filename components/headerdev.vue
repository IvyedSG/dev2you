<template>
<header class="fixed top-0 z-50 w-full px-4 shadow-sm backdrop-blur-md bg-light/90 text-dark dark:bg-dark/90 dark:text-light">
    <div class="container mx-auto flex items-center justify-between py-4">
        <!-- Logo -->
        <a href="/" class="flex items-center gap-2 text-2xl font-extrabold tracking-tight group">
            <span class="text-accent">&lt;/&gt;</span>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/80">Dev4</span>
            <span class="transition-colors duration-300 text-dark dark:text-light group-hover:text-accent">You</span>
        </a>

        <!-- Botón menú sin hover -->
        <div class="lg:hidden">
            <button @click="toggleMenu" class="z-50 relative focus:outline-none">
                <i v-if="!isMenuOpen" class="fas fa-bars text-2xl text-dark dark:text-light"></i>
                <i v-else class="fas fa-times text-2xl text-white"></i>
            </button>
        </div>

        <!-- Menú móvil -->
        <transition name="fade">
            <div v-if="isMenuOpen" class="fixed inset-0 z-40 flex flex-col justify-center items-center w-full h-screen bg-[#1e1e1e] text-white">
                <a href="/" @click="toggleMenu" class="text-xl font-medium w-full text-center border-b border-white/10 py-4 hover:text-accent transition-transform hover:scale-105">Inicio</a>
                <a href="#proyectos" @click="toggleMenu" class="text-xl font-medium w-full text-center border-b border-white/10 py-4 hover:text-accent transition-transform hover:scale-105">Proyectos</a>
                <a href="#equipo" @click="toggleMenu" class="text-xl font-medium w-full text-center border-b border-white/10 py-4 hover:text-accent transition-transform hover:scale-105">Equipo</a>
                <a href="#proceso" @click="toggleMenu" class="text-xl font-medium w-full text-center border-b border-white/10 py-4 hover:text-accent transition-transform hover:scale-105">Paso a paso</a>
                <a href="#faq" @click="toggleMenu" class="text-xl font-medium w-full text-center border-b border-white/10 py-4 hover:text-accent transition-transform hover:scale-105">Preguntas Frecuentes</a>
                <a href="/logros" @click="toggleMenu" class="text-xl font-medium w-full text-center border-b border-white/10 py-4 hover:text-accent transition-transform hover:scale-105">Logros</a>
                <a href="#contacto" @click="toggleMenu" class="text-xl font-bold text-accent w-full text-center py-4 hover:underline">Contáctanos</a>
            </div>
        </transition>

        <!-- Menú desktop -->
        <nav class="hidden lg:flex">
            <ul class="flex space-x-8 text-sm font-medium tracking-wide text-dark/80 dark:text-light/80">
                <li>
                    <a href="/" class="transition-transform hover:scale-105 hover:text-accent">Inicio</a>
                </li>
                <li>
                    <a href="#proyectos" class="transition-transform hover:scale-105 hover:text-accent">Proyectos</a>
                </li>
                <li>
                    <a href="#equipo" class="transition-transform hover:scale-105 hover:text-accent">Equipo</a>
                </li>
                <li>
                    <a href="#proceso" class="transition-transform hover:scale-105 hover:text-accent">Paso a paso</a>
                </li>
                <li>
                    <a href="#faq" class="transition-transform hover:scale-105 hover:text-accent">Preguntas Frecuentes</a>
                </li>
                <li>
                    <a href="/logros" class="transition-transform hover:scale-105 hover:text-accent">Logros</a>
                </li>
            </ul>
        </nav>

        <!-- Botón destacado desktop -->
        <a href="#contacto" class="hidden lg:inline-block px-5 py-2 text-sm font-semibold tracking-wide rounded-lg shadow-md bg-accent text-dark hover:scale-105 hover:shadow-lg transition-transform duration-300">
            Contáctanos
        </a>
    </div>
</header>
</template>

<script>
import {
    ref,
    watch
} from "vue";

const isMenuOpen = ref(false);

watch(isMenuOpen, (value) => {
    document.body.style.overflow = value ? "hidden" : "";
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
