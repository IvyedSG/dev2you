<template>
  <section id="equipo" class="relative py-28 bg-gray-dark">
    <!-- Fondo decorativo -->
    <div class="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-dark to-transparent opacity-80"></div>
    <div class="absolute rounded-full -top-20 right-20 w-72 h-72 bg-accent/10 filter blur-3xl"></div>
    <div class="absolute rounded-full bottom-40 left-20 w-80 h-80 bg-accent/5 filter blur-3xl"></div>

    <div class="container px-4 mx-auto text-center">
      <!-- Título -->
      <h2 class="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
        <span class="text-light">Nuestro </span><span class="text-accent">Equipo</span>
      </h2>
      <div class="w-24 h-1 mx-auto mb-8 rounded-full bg-accent"></div>
      
      <!-- Descripción -->
      <p class="max-w-2xl mx-auto mb-12 text-lg text-light/70">
        Conformamos un equipo multidisciplinario apasionado por la tecnología y el diseño, trabajando juntos para crear soluciones digitales innovadoras y personalizadas.
      </p>

      <!-- Miembros del equipo -->
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div
          class="p-8 transition-all duration-300 border shadow-md group rounded-xl bg-dark border-gray-700/40 hover:border-accent hover:shadow-accent/30"
          v-for="member in teamMembers"
          :key="member.name"
        >
          <div class="flex items-center justify-center mb-5">
            <i class="text-4xl fas fa-user-circle text-accent"></i>
          </div>
          <h3 class="mb-2 text-xl font-semibold text-light">{{ member.name }}</h3>
          <p class="mb-4 text-sm leading-relaxed text-light/70">{{ member.role }}</p>
          <div class="flex justify-center gap-4">
            <a
              :href="member.github"
              target="_blank"
              rel="noopener noreferrer"
              class="text-accent hover:text-light"
            >
              <i class="text-2xl fab fa-github"></i>
            </a>
            <a
              :href="member.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="text-accent hover:text-light"
            >
              <i class="text-2xl fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "EquipoDev",
  data() {
    return {
      teamMembers: [
        {
          name: "Anderson Titto",
          role: "Desarrollador Backend",
          github: "https://github.com/juanperez",
          linkedin: "https://linkedin.com/in/juanperez",
        },
        {
          name: "Angel Choquehuanca",
          role: "Base de Datos",
          github: "https://github.com/marialopez",
          linkedin: "https://linkedin.com/in/marialopez",
        },
        {
          name: "Deyvi Sanchez",
          role: "Desarrollador Frontend",
          github: "https://github.com/carlosgarcia",
          linkedin: "https://linkedin.com/in/carlosgarcia",
        },
        {
          name: "Diego Inga",
          role: "Desing UX/UI",
          github: "https://github.com/anatorres",
          linkedin: "https://linkedin.com/in/anatorres",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Puedes ajustar iconos u otros elementos aquí si usas fuentes personalizadas */
</style>