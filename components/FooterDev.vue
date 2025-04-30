<template>
  <footer class="footer p-10 bg-gray-dark text-light">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <!-- Columna 1: Sobre nosotros -->
        <div>
          <h4 class="text-xl font-bold mb-6 text-light">Dev2You</h4>
          <p class="text-light/70 mb-4">Creamos productos digitales con personalidad, centrados en la experiencia del usuario y desarrollados con tecnologías de vanguardia.</p>
          <div class="flex gap-4 mt-6">
            <a href="#" class="text-light/70 hover:text-accent transition-colors text-xl">
              <i class="fab fa-github"></i>
            </a>
            <a href="#" class="text-light/70 hover:text-accent transition-colors text-xl">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="text-light/70 hover:text-accent transition-colors text-xl">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="#" class="text-light/70 hover:text-accent transition-colors text-xl">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        
        <!-- Columna 2: Enlaces rápidos -->
        <div>
          <h4 class="text-xl font-bold mb-6 text-light">Enlaces</h4>
          <ul class="space-y-3">
            <li><a href="/" class="text-light/70 hover:text-accent transition-colors">Inicio</a></li>
            <li><a href="#proyectos" class="text-light/70 hover:text-accent transition-colors">Proyectos</a></li>
            <li><a href="#contacto" class="text-light/70 hover:text-accent transition-colors">Contacto</a></li>
          </ul>
        </div>
        
        <!-- Columna 3: Contacto -->
        <div>
          <h4 class="text-xl font-bold mb-6 text-light">Contacto</h4>
          <ul class="space-y-3">
            <li class="flex items-center">
              <i class="fas fa-envelope mr-3 text-accent"></i>
              <a href="mailto:hola@dev2you.com" class="text-light/70 hover:text-accent transition-colors">hola@dev2you.com</a>
            </li>
            <li class="flex items-center">
              <i class="fas fa-phone mr-3 text-accent"></i>
              <a href="tel:+1234567890" class="text-light/70 hover:text-accent transition-colors">+123 456 7890</a>
            </li>
            <li class="flex items-center">
              <i class="fas fa-map-marker-alt mr-3 text-accent"></i>
              <span class="text-light/70">Ciudad, País</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-light/10 mt-10 pt-6 text-center text-light/50">
        <p>© 2025 Dev2You. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>