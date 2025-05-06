<template>
  <section id="objetivos" class="relative py-24 bg-gray-dark">
    <!-- Fondo decorativo -->
    <div class="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-gray-dark opacity-80"></div>
    <div class="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-transparent to-gray-dark opacity-80"></div>
    <div class="absolute rounded-full -top-20 right-20 w-72 h-72 bg-accent/10 filter blur-3xl"></div>
    <div class="absolute rounded-full bottom-40 left-20 w-80 h-80 bg-accent/5 filter blur-3xl"></div>

    <div class="container relative z-10 mx-auto text-center">
      <h2 class="mb-4 text-4xl font-bold md:text-5xl">
        <span class="text-light">Nuestros </span><span class="text-accent">Objetivos</span>
      </h2>
      <div class="w-24 h-1 mx-auto mb-8 bg-accent"></div>
      <!-- Descripción debajo del título -->
      <p class="max-w-2xl mx-auto mb-12 text-lg text-light/70">
        Nos enfocamos en ofrecer soluciones innovadoras, fomentando la colaboración y el crecimiento continuo para alcanzar el éxito de nuestros clientes.
      </p>
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(objetivo, index) in objetivos"
          :key="index"
          class="p-6 transition-transform duration-300 rounded-lg bg-dark hover:-translate-y-2 hover:shadow-lg hover:shadow-accent/50"
        >
          <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10">
            <i :class="objetivo.icon" class="text-4xl text-accent"></i>
          </div>
          <h3 class="mb-2 text-xl font-semibold text-light">{{ objetivo.title }}</h3>
          <p class="text-light/70">{{ objetivo.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const objetivos = [
  {
    icon: 'fas fa-bullseye',
    title: 'Innovación',
    description: 'Crear soluciones tecnológicas innovadoras que resuelvan problemas reales.',
  },
  {
    icon: 'fas fa-users',
    title: 'Colaboración',
    description: 'Fomentar un ambiente de trabajo colaborativo y creativo.',
  },
  {
    icon: 'fas fa-chart-line',
    title: 'Crecimiento',
    description: 'Ayudar a nuestros clientes a alcanzar sus metas y crecer junto a ellos.',
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'Seguridad',
    description: 'Garantizar la protección de datos y la seguridad en cada solución que desarrollamos.',
  },
  {
    icon: 'fas fa-lightbulb',
    title: 'Creatividad',
    description: 'Proponer ideas únicas y originales para cada proyecto.',
  },
  {
    icon: 'fas fa-handshake',
    title: 'Compromiso',
    description: 'Trabajar con dedicación para cumplir con las expectativas de nuestros clientes.',
  },
];
</script>

<style scoped>
/* Animación para hover */
.hover\\:-translate-y-2:hover {
  transform: translateY(-0.5rem);
}
.hover\\:shadow-lg:hover {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
}
</style>