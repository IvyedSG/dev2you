<template>
  <footer class="relative py-16 overflow-hidden bg-gray-dark text-light">
    <!-- Fondos decorativos -->
    <div class="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-dark to-transparent opacity-80"></div>
    <div class="absolute rounded-full -top-20 right-20 w-72 h-72 bg-accent/10 filter blur-3xl"></div>
    <div class="absolute rounded-full bottom-40 left-20 w-80 h-80 bg-accent/5 filter blur-3xl"></div>

    <div class="container relative z-10 px-4 mx-auto">
      <div class="grid grid-cols-1 gap-10 mb-12 md:grid-cols-3">
        <!-- Columna 1: Sobre nosotros -->
        <div class="animate-fade-in">
          <h4 class="mb-4 text-2xl font-bold text-accent">Dev2You</h4>
          <p class="leading-relaxed text-light/70">
            Creamos productos digitales con personalidad, centrados en la experiencia del usuario y desarrollados con tecnologías de vanguardia.
          </p>
          <div class="flex gap-5 mt-6">
            <a href="#" aria-label="GitHub" class="text-2xl transition duration-300 text-light/70 hover:text-accent hover:scale-110">
              <i class="fab fa-github"></i>
            </a>
            <a href="#" aria-label="Twitter" class="text-2xl transition duration-300 text-light/70 hover:text-accent hover:scale-110">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="LinkedIn" class="text-2xl transition duration-300 text-light/70 hover:text-accent hover:scale-110">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="#" aria-label="Instagram" class="text-2xl transition duration-300 text-light/70 hover:text-accent hover:scale-110">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <!-- Columna 2: Enlaces -->
        <div class="delay-200 animate-fade-in">
          <h4 class="mb-4 text-2xl font-bold text-accent">Enlaces</h4>
          <ul class="space-y-3 text-light/70">
            <li>
              <a href="/" class="transition duration-300 hover:text-accent hover:translate-x-1">Inicio</a>
            </li>
            <li>
              <a href="#proyectos" class="transition duration-300 hover:text-accent hover:translate-x-1">Proyectos</a>
            </li>
            <li>
              <a href="#equipo" class="transition duration-300 hover:text-accent hover:translate-x-1">Nuestro equipo</a>
            </li>
            <li>
              <a href="#contacto" class="transition duration-300 hover:text-accent hover:translate-x-1">Contacto</a>
            </li>
          </ul>
        </div>

        <!-- Columna 3: Contacto -->
        <div class="animate-fade-in delay-400">
          <h4 class="mb-4 text-2xl font-bold text-accent">Contacto</h4>
          <ul class="space-y-4 text-light/70">
            <li class="flex items-start gap-3">
              <i class="mt-1 fas fa-envelope text-accent"></i>
              <a href="mailto:hola@dev2you.com" class="transition duration-300 hover:text-accent hover:translate-x-1">
                dev2you@gmail.com
              </a>
            </li>
            <li class="flex items-start gap-3">
              <i class="mt-1 fas fa-phone text-accent"></i>
              <a href="tel:+1234567890" class="transition duration-300 hover:text-accent hover:translate-x-1">
                +51 990 903 235
              </a>
            </li>
            <li class="flex items-start gap-3">
              <i class="mt-1 fas fa-map-marker-alt text-accent"></i>
              <span>Lima, Perú</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="pt-6 text-sm text-center border-t border-light/10 text-light/50 animate-fade-in delay-600">
        <p>© 2025 Dev2You. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Animaciones */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-fade-in.delay-200 {
  animation-delay: 0.2s;
}

.animate-fade-in.delay-400 {
  animation-delay: 0.4s;
}

.animate-fade-in.delay-600 {
  animation-delay: 0.6s;
}
</style>