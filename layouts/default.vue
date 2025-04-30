<template>
  <div class="min-h-screen bg-dark text-light flex flex-col">
    <!-- Header/Navbar - Made fixed and added transition effects -->
    <header class="navbar fixed top-0 z-50 bg-dark/90 backdrop-blur-md border-b border-gray-800/50 px-4">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <i class="fas fa-bars text-light"></i>
          </label>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-dark/95 backdrop-blur-md rounded-box w-52 border border-gray-800/50">
            <li><a href="/" class="hover:text-accent transition-colors duration-300">Inicio</a></li>
            <li><a href="#proyectos" class="hover:text-accent transition-colors duration-300">Proyectos</a></li>
            <li><a href="#contacto" class="hover:text-accent transition-colors duration-300">Contacto</a></li>
          </ul>
        </div>
        <a href="/" class="text-xl font-bold group">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent/80">Dev2</span><span class="text-light group-hover:text-accent transition-colors duration-300">You</span>
        </a>
      </div>
      <div class="navbar-end hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li><a href="/" class="hover:text-accent transition-colors duration-300">Inicio</a></li>
          <li><a href="#proyectos" class="hover:text-accent transition-colors duration-300">Proyectos</a></li>
          <li><a href="#contacto" class="hover:text-accent transition-colors duration-300">Contacto</a></li>
        </ul>
      </div>
    </header>

    <!-- Main Content - Added padding-top to account for fixed header -->
    <main class="flex-grow pt-16">
      <slot />
    </main>

    <!-- Footer -->
    <FooterDev />
  </div>
</template>

<script setup>
import FooterDev from '~/components/FooterDev.vue';
</script>