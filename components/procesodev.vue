<template>
  <section id="proceso" class="py-24 bg-gray-dark text-light">
    <div class="container px-4 mx-auto">
      <!-- Título -->
      <h2 class="mb-4 text-4xl font-bold text-center">
        <span class="text-light">Nuestro </span><span class="text-accent">Proceso de Trabajo</span>
      </h2>
      <div class="w-24 h-1 mx-auto mb-8 bg-accent"></div>
      <p class="max-w-2xl mx-auto mb-12 text-center text-light/70">
        Conoce los pasos que seguimos para garantizar el éxito de cada proyecto.
      </p>

      <!-- Línea de tiempo -->
      <div class="relative">
        <div class="absolute w-1 h-full transform -translate-x-1/2 left-1/2 bg-gray-700/50"></div>
        <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
          <!-- Paso 1 -->
          <div class="relative flex flex-col items-center text-center md:items-start md:text-left">
            <div class="absolute w-8 h-8 rounded-full bg-accent -left-4 md:left-auto md:-right-4"></div>
            <div class="p-6 border rounded-lg shadow-lg bg-dark border-gray-700/40">
              <h3 class="mb-2 text-xl font-semibold text-light">Paso 1: Reunión inicial</h3>
              <p class="text-light/70">
                Nos reunimos contigo para entender tus necesidades, objetivos y visión del proyecto.
              </p>
            </div>
          </div>

          <!-- Paso 2 -->
          <div class="relative flex flex-col items-center text-center md:items-end md:text-right">
            <div class="absolute w-8 h-8 rounded-full bg-accent -left-4 md:left-auto md:-right-4"></div>
            <div class="p-6 border rounded-lg shadow-lg bg-dark border-gray-700/40">
              <h3 class="mb-2 text-xl font-semibold text-light">Paso 2: Diseño y prototipado</h3>
              <p class="text-light/70">
                Creamos diseños y prototipos interactivos para visualizar cómo será tu solución digital.
              </p>
            </div>
          </div>

          <!-- Paso 3 -->
          <div class="relative flex flex-col items-center text-center md:items-start md:text-left">
            <div class="absolute w-8 h-8 rounded-full bg-accent -left-4 md:left-auto md:-right-4"></div>
            <div class="p-6 border rounded-lg shadow-lg bg-dark border-gray-700/40">
              <h3 class="mb-2 text-xl font-semibold text-light">Paso 3: Desarrollo y pruebas</h3>
              <p class="text-light/70">
                Desarrollamos tu proyecto utilizando tecnologías modernas y realizamos pruebas exhaustivas.
              </p>
            </div>
          </div>

          <!-- Paso 4 -->
          <div class="relative flex flex-col items-center text-center md:items-end md:text-right">
            <div class="absolute w-8 h-8 rounded-full bg-accent -left-4 md:left-auto md:-right-4"></div>
            <div class="p-6 border rounded-lg shadow-lg bg-dark border-gray-700/40">
              <h3 class="mb-2 text-xl font-semibold text-light">Paso 4: Entrega y soporte</h3>
              <p class="text-light/70">
                Entregamos el proyecto final y ofrecemos soporte técnico para garantizar su éxito.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Estilo para la línea de tiempo */
.relative::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  width: 2px;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateX(-50%);
}
</style>