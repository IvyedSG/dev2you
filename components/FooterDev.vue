<template>
  <footer class="relative py-16 overflow-hidden bg-dark text-light">
    <!-- Fondos decorativos -->
    <div class="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-dark to-transparent opacity-80"></div>
    <div class="absolute rounded-full -top-20 right-20 w-72 h-72 bg-accent/10 filter blur-3xl"></div>
    <div class="absolute rounded-full bottom-40 left-20 w-80 h-80 bg-accent/5 filter blur-3xl"></div>

    <div class="container relative z-10 px-4 mx-auto">
      <div class="grid grid-cols-1 gap-10 mb-12 md:grid-cols-3">
        <!-- Columna 1: Sobre nosotros -->
        <div>
          <h4 class="mb-4 text-2xl font-bold text-accent">Dev2You</h4>
          <p class="leading-relaxed text-light/70">
            Creamos productos digitales con personalidad, centrados en la experiencia del usuario y desarrollados con tecnologías de vanguardia.
          </p>
        </div>

        <!-- Columna 2: Enlaces -->
        <div>
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
              <a href="#proceso" class="transition duration-300 hover:text-accent hover:translate-x-1">Paso a Paso</a>
            </li>
            <li>
              <a href="#faq" class="transition duration-300 hover:text-accent hover:translate-x-1">Preguntas Frecuentes</a>
            </li>
            <li>
              <a href="#contacto" class="transition duration-300 hover:text-accent hover:translate-x-1">Contacto</a>
            </li>
          </ul>
        </div>

        <!-- Columna 3: Contacto -->
        <div>
          <h4 class="mb-4 text-2xl font-bold text-accent">Contacto</h4>
          <ul class="space-y-4 text-light/70">
            <li class="flex items-start gap-3">
              <i class="mt-1 fas fa-envelope text-accent"></i>
              <a href="mailto:hola@dev2you.com" class="transition duration-300 hover:text-accent hover:translate-x-1">
                contacto.dev4you@gmail.com
              </a>
            </li>
            <li class="flex items-start gap-3">
              <i class="mt-1 fas fa-phone text-accent"></i>
              <a href="tel:+1234567890" class="transition duration-300 hover:text-accent hover:translate-x-1">
                +51 923 927 406
              </a>
            </li>
            <li class="flex items-start gap-3">
              <i class="mt-1 fas fa-map-marker-alt text-accent"></i>
              <span>Lima, Perú</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Línea divisoria -->
      <div class="border-t border-light/10"></div>

      <!-- Derechos reservados -->
      <div class="pt-6 text-sm text-center text-light/50">
        <p class="mt-2">
          Desarrollado con <span class="text-accent">❤</span> por <a href="#" class="hover:text-accent">Dev2You Team</a>.
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Se eliminan las animaciones */
</style>