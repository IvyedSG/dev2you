<template>
  <header class="fixed top-0 z-50 w-full px-4 border-b shadow-sm bg-dark/90 backdrop-blur-md border-gray-800/50">
    <div class="container flex items-center justify-between py-4 mx-auto">
      <!-- Logo -->
      <a href="/" class="flex items-center gap-2 text-2xl font-extrabold tracking-tight group">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/80">Dev2</span>
        <span class="transition-colors duration-300 text-light group-hover:text-accent">You</span>
      </a>

      <!-- Menú hamburguesa (para móviles) -->
      <div class="dropdown lg:hidden">
        <label tabindex="0" class="btn btn-ghost">
          <i class="text-2xl fas fa-bars text-light"></i>
        </label>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-lg bg-dark/95 backdrop-blur-md rounded-xl w-56 border border-gray-700/40">
          <li><a href="/" class="transition-colors hover:text-accent">Inicio</a></li>
          <li><a href="#proyectos" class="transition-colors hover:text-accent">Proyectos</a></li>
          <li><a href="#nosotros" class="transition-colors hover:text-accent">Nosotros</a></li>
          <li><a href="#objetivos" class="transition-colors hover:text-accent">Objetivos</a></li>
          <li><a href="#contacto" class="transition-colors hover:text-accent">Contacto</a></li>
        </ul>
      </div>

      <!-- Menú horizontal (desktop) -->
      <nav class="hidden lg:flex">
        <ul class="flex space-x-8 text-sm font-medium tracking-wide text-light/80">
          <li><a href="/" class="transition-colors hover:text-accent">Inicio</a></li>
          <li><a href="#nosotros" class="transition-colors hover:text-accent">Nosotros</a></li>
          <li><a href="#proyectos" class="transition-colors hover:text-accent">Proyectos</a></li>
          <li><a href="#objetivos" class="transition-colors hover:text-accent">Objetivos</a></li>
        </ul>
      </nav>

      <!-- Botón destacado -->
      <a
        href="#contacto"
        class="hidden px-5 py-2 text-sm font-semibold tracking-wide transition-transform duration-300 rounded-lg shadow-md lg:inline-block bg-accent text-dark hover:scale-105 hover:shadow-lg"
      >
        Contáctanos
      </a>
    </div>
  </header>
</template>

<style scoped>
.group:hover span:first-child {
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
  }
}
</style>
