<template>
  <section id="nosotros" class="py-28 bg-gray-dark">
    <div class="container px-4 mx-auto text-center">
      <!-- Título -->
      <h2 class="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
        <span class="text-light">Nosotros </span><span class="text-accent">Somos</span>
      </h2>
      <div class="w-24 h-1 mx-auto mb-8 rounded-full bg-accent"></div>

      <!-- Descripción -->
      <p class="max-w-3xl mx-auto mb-16 text-lg leading-relaxed text-light/70">
        Somos un equipo apasionado por la tecnología y el diseño, comprometido con ofrecer soluciones digitales únicas. Transformamos ideas en experiencias memorables combinando creatividad, estrategia y tecnología.
      </p>

      <!-- Valores -->
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div class="p-8 transition-all duration-300 border shadow-md group rounded-xl bg-dark border-gray-700/40 hover:border-accent hover:shadow-accent/30">
          <div class="flex items-center justify-center mb-5">
            <i class="text-4xl transition-transform duration-300 fas fa-lightbulb text-accent group-hover:rotate-6"></i>
          </div>
          <h3 class="mb-2 text-xl font-semibold text-light">Innovación</h3>
          <p class="text-sm leading-relaxed text-light/70">
            Exploramos constantemente nuevas ideas para mejorar la experiencia digital.
          </p>
        </div>

        <div class="p-8 transition-all duration-300 border shadow-md group rounded-xl bg-dark border-gray-700/40 hover:border-accent hover:shadow-accent/30">
          <div class="flex items-center justify-center mb-5">
            <i class="text-4xl transition-transform duration-300 fas fa-users text-accent group-hover:scale-110"></i>
          </div>
          <h3 class="mb-2 text-xl font-semibold text-light">Colaboración</h3>
          <p class="text-sm leading-relaxed text-light/70">
            Trabajamos unidos como una comunidad, potenciando nuestras fortalezas.
          </p>
        </div>

        <div class="p-8 transition-all duration-300 border shadow-md group rounded-xl bg-dark border-gray-700/40 hover:border-accent hover:shadow-accent/30">
          <div class="flex items-center justify-center mb-5">
            <i class="text-4xl transition-transform duration-300 fas fa-heart text-accent group-hover:scale-110"></i>
          </div>
          <h3 class="mb-2 text-xl font-semibold text-light">Pasión</h3>
          <p class="text-sm leading-relaxed text-light/70">
            Nos apasiona lo que hacemos y lo transmitimos en cada detalle.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Puedes ajustar iconos u otros elementos aquí si usas fuentes personalizadas */
</style>
