<template>
  <section id="equipo" class="relative py-28 bg-dark">
    <!-- Fondo decorativo -->
    <div class="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-dark to-transparent opacity-80"></div>
    <div class="absolute rounded-full -top-20 right-20 w-72 h-72 bg-accent/10 filter blur-3xl"></div>
    <div class="absolute rounded-full bottom-40 left-20 w-80 h-80 bg-accent/5 filter blur-3xl"></div>

    <div class="container px-4 mx-auto text-center">
      <!-- Título -->
      <div class="mb-16 text-center">
        <h2 class="mb-4 text-4xl font-bold md:text-5xl">
          <span class="text-light">Conoce a </span><span class="text-accent">Nuestro Equipo</span>
        </h2>
        <div class="w-24 h-1 mx-auto mb-8 bg-accent"></div>
        <p class="max-w-2xl mx-auto text-lg text-light/70">
          Conformamos un equipo multidisciplinario apasionado por la tecnología y el diseño, trabajando juntos para crear soluciones digitales innovadoras y personalizadas.
        </p>
      </div>

      <!-- Miembros del equipo -->
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div
          class="p-8 transition-all duration-300 border rounded-xl bg-dark/70 border-gray-700/40 shadow-md hover:border-accent hover:shadow-[0_0_25px_rgba(0,255,200,0.3)] hover:scale-[1.02]"
          v-for="member in teamMembers"
          :key="member.name"
        >
          <!-- Ícono del miembro -->
          <div class="flex items-center justify-center mb-5">
            <i class="text-4xl fas fa-user-circle text-accent"></i>
          </div>
          <!-- Nombre y rol -->
          <h3 class="mb-2 text-xl font-semibold text-light">{{ member.name }}</h3>
          <p class="mb-4 text-sm leading-relaxed text-light/70">{{ member.role }}</p>
          <!-- Redes sociales -->
          <div class="flex justify-center gap-4">
            <a
              :href="member.github"
              target="_blank"
              rel="noopener noreferrer"
              class="text-accent hover:text-light transition-transform hover:scale-110"
            >
              <i class="text-2xl fab fa-github"></i>
            </a>
            <a
              :href="member.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="text-accent hover:text-light transition-transform hover:scale-110"
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
          github: "https://github.com/ander0code",
          linkedin: "https://www.linkedin.com/in/maxttito/",
        },
        {
          name: "Angel Choquehuanca",
          role: "Base de Datos",
          github: "https://github.com/AngelCh0",
          linkedin: "https://www.linkedin.com/in/angel-fabian-choquehuanca-capia-51512b327/",
        },
        {
          name: "Deyvi Sanchez",
          role: "Desarrollador Frontend",
          github: "https://github.com/IvyedSG",
          linkedin: "https://www.linkedin.com/in/deyvisanchez/",
        },
        {
          name: "Diego Inga",
          role: "Diseñador UX/UI",
          github: "https://github.com/DiegoInga",
          linkedin: "https://www.linkedin.com/in/diego-felipe-inga-silva-715555315/",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Opcional: Estilos adicionales para hover */
</style>