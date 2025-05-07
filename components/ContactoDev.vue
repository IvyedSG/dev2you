<template>
  <section id="contacto" class="relative py-24 overflow-hidden bg-dark">
    <!-- Fondos decorativos -->
    <div class="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-dark to-transparent opacity-80"></div>
    <div class="absolute bottom-0 right-0 w-1/3 rounded-full h-1/3 bg-accent/5 filter blur-3xl"></div>
    <div class="absolute rounded-full top-40 left-20 w-72 h-72 bg-accent/5 filter blur-3xl"></div>

    <div class="relative z-10 px-4 mx-auto max-w-7xl">
      <!-- Encabezado -->
      <div class="mb-16 text-center">
        <p class="mb-2 font-semibold tracking-widest uppercase text-accent">Contáctanos</p>
        <h2 class="mb-4 text-4xl font-bold md:text-5xl">
          <span class="text-light">Contacta con </span><span class="text-accent">Nosotros</span>
        </h2>
        <div class="w-24 h-1 mx-auto mb-8 bg-accent"></div>
        <p class="mt-4 text-lg text-light/70 max-w-2xl mx-auto">
          Estamos listos para convertir tus ideas en soluciones digitales excepcionales.
        </p>
      </div>

      <!-- Tarjetas de contacto -->
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
        <!-- Email -->
        <div class="p-6 text-center rounded-2xl border border-accent/10 bg-gray-dark/70 shadow-lg transition-all duration-300 hover:border-accent hover:shadow-[0_0_25px_rgba(0,255,200,0.3)] hover:scale-[1.02]">
          <div class="flex justify-center mb-4">
            <i class="fas fa-envelope text-2xl text-accent"></i>
          </div>
          <h4 class="mb-1 font-semibold text-light">Email</h4>
          <a href="mailto:contacto@dev2you.com" class="text-light/70 hover:text-accent transition">
            contacto@dev2you.com
          </a>
        </div>

        <!-- Teléfono -->
        <div class="p-6 text-center rounded-2xl border border-accent/10 bg-gray-dark/70 shadow-lg transition-all duration-300 hover:border-accent hover:shadow-[0_0_25px_rgba(0,255,200,0.3)] hover:scale-[1.02]">
          <div class="flex justify-center mb-4">
            <i class="fas fa-phone-alt text-2xl text-accent"></i>
          </div>
          <h4 class="mb-1 font-semibold text-light">Teléfono</h4>
          <a href="tel:+51987654321" class="text-light/70 hover:text-accent transition">
            +51 987 654 321
          </a>
        </div>

        <!-- Ubicación -->
        <div class="p-6 text-center rounded-2xl border border-accent/10 bg-gray-dark/70 shadow-lg transition-all duration-300 hover:border-accent hover:shadow-[0_0_25px_rgba(0,255,200,0.3)] hover:scale-[1.02]">
          <div class="flex justify-center mb-4">
            <i class="fas fa-map-marker-alt text-2xl text-accent"></i>
          </div>
          <h4 class="mb-1 font-semibold text-light">Ubicación</h4>
          <p class="text-light/70">Lima, Perú</p>
        </div>
      </div>

      <!-- Canales adicionales -->
      <div class="p-6 rounded-2xl border border-accent/10 bg-gray-dark/70 shadow-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,255,200,0.2)]">
        <h4 class="mb-4 font-semibold text-light flex items-center">
          <i class="fas fa-share-alt mr-2 text-accent"></i> Canales adicionales
        </h4>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <!-- WhatsApp -->
          <a href="#" class="flex items-center justify-center gap-2 p-3 bg-gray-dark rounded-xl hover:bg-accent/10 transition text-accent border border-transparent hover:border-accent hover:shadow-[0_0_15px_rgba(0,255,200,0.2)] hover:scale-[1.02]">
            <i class="fab fa-whatsapp text-lg"></i> WhatsApp
          </a>

          <!-- Microsoft Teams -->
          <a href="#" class="flex items-center justify-center gap-2 p-3 bg-gray-dark rounded-xl hover:bg-accent/10 transition text-accent border border-transparent hover:border-accent hover:shadow-[0_0_15px_rgba(0,255,200,0.2)] hover:scale-[1.02]">
            <i class="fab fa-microsoft text-lg"></i> Teams
          </a>

          <!-- Discord -->
          <a href="#" class="flex items-center justify-center gap-2 p-3 bg-gray-dark rounded-xl hover:bg-accent/10 transition text-accent border border-transparent hover:border-accent hover:shadow-[0_0_15px_rgba(0,255,200,0.2)] hover:scale-[1.02]">
            <i class="fab fa-discord text-lg"></i> Discord
          </a>

          <!-- Zoom -->
          <a href="#" class="flex items-center justify-center gap-2 p-3 bg-gray-dark rounded-xl hover:bg-accent/10 transition text-accent border border-transparent hover:border-accent hover:shadow-[0_0_15px_rgba(0,255,200,0.2)] hover:scale-[1.02]">
            <i class="fas fa-video text-lg"></i> Zoom
          </a>
        </div>
      </div>
    </div>
  </section>
</template>