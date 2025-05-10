<template>
  <section id="contacto" class="relative py-24 overflow-hidden bg-dark">
    <!-- Fondos decorativos -->
    <div class="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-dark to-transparent opacity-80"></div>
    <div class="absolute bottom-0 right-0 w-1/3 rounded-full h-1/3 bg-accent/5 filter blur-3xl"></div>
    <div class="absolute rounded-full top-40 left-20 w-72 h-72 bg-accent/5 filter blur-3xl"></div>

    <div class="relative z-10 px-4 mx-auto max-w-6xl">
      <!-- Encabezado -->
      <div class="mb-16 text-center">
        <p class="mb-2 font-semibold tracking-widest uppercase text-accent">Contáctanos</p>
        <h2 class="mb-4 text-4xl font-bold md:text-5xl">
          <span class="text-light">Envíanos un </span><span class="text-accent">Mensaje</span>
        </h2>
        <div class="w-24 h-1 mx-auto mb-8 bg-accent"></div>
        <p class="mt-4 text-lg text-light/70 max-w-2xl mx-auto">
          Completa el formulario y nos pondremos en contacto contigo lo antes posible.
        </p>
      </div>

      <!-- Formulario -->
      <form @submit.prevent="handleSubmit" class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <!-- Nombre -->
        <div>
          <label for="nombre" class="block mb-2 text-sm font-medium text-light">Nombre *</label>
          <input
            type="text"
            id="nombre"
            v-model="form.nombre"
            required
            class="w-full px-4 py-3 text-light bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Tu nombre"
          />
          <p v-if="errors.nombre" class="mt-1 text-sm text-red-500">{{ errors.nombre }}</p>
        </div>

        <!-- Correo -->
        <div>
          <label for="correo" class="block mb-2 text-sm font-medium text-light">Correo Electrónico *</label>
          <input
            type="email"
            id="correo"
            v-model="form.correo"
            required
            class="w-full px-4 py-3 text-light bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="tu@email.com"
          />
          <p v-if="errors.correo" class="mt-1 text-sm text-red-500">{{ errors.correo }}</p>
        </div>

        <!-- Teléfono -->
        <div>
          <label for="telefono" class="block mb-2 text-sm font-medium text-light">Teléfono (opcional)</label>
          <input
            type="tel"
            id="telefono"
            v-model="form.telefono"
            class="w-full px-4 py-3 text-light bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="+51 987 654 321"
          />
        </div>

        <!-- Empresa -->
        <div>
          <label for="empresa" class="block mb-2 text-sm font-medium text-light">Empresa (opcional)</label>
          <input
            type="text"
            id="empresa"
            v-model="form.empresa"
            class="w-full px-4 py-3 text-light bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Nombre de tu empresa"
          />
        </div>

        <!-- Asunto -->
        <div class="md:col-span-2">
          <label for="asunto" class="block mb-2 text-sm font-medium text-light">Asunto *</label>
          <select
            id="asunto"
            v-model="form.asunto"
            required
            class="w-full px-4 py-3 text-light bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value="" disabled selected>Selecciona un asunto</option>
            <option value="Consulta general">Consulta general</option>
            <option value="Soporte técnico">Soporte técnico</option>
            <option value="Cotización">Cotización</option>
            <option value="Otro">Otro</option>
          </select>
          <p v-if="errors.asunto" class="mt-1 text-sm text-red-500">{{ errors.asunto }}</p>
        </div>

        <!-- Mensaje -->
        <div class="md:col-span-2">
          <label for="mensaje" class="block mb-2 text-sm font-medium text-light">Mensaje *</label>
          <textarea
            id="mensaje"
            v-model="form.mensaje"
            required
            rows="5"
            class="w-full px-4 py-3 text-light bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="¿En qué podemos ayudarte?"
          ></textarea>
          <p v-if="errors.mensaje" class="mt-1 text-sm text-red-500">{{ errors.mensaje }}</p>
        </div>

        <!-- Botón Enviar -->
        <div class="md:col-span-2 text-center">
          <button
            type="submit"
            class="px-6 py-3 text-base font-semibold tracking-wide text-dark bg-accent rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300"
          >
            <i class="fas fa-paper-plane mr-2"></i> Enviar mensaje
          </button>
        </div>
      </form>
    </div>
      <!-- Notificación emergente -->
      <div
        v-if="showToast"
        class="fixed bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transition-opacity duration-300"
        :class="{
          'top-20 right-5': !isMobile, // En pantallas grandes, aparece en la esquina superior derecha
          'top-0 left-0 w-full text-center py-4 z-50': isMobile, // En móviles, ocupa toda la parte superior
        }"
      >
        ¡Mensaje enviado con éxito!
      </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import emailjs from 'emailjs-com'

const form = ref({
  nombre: '',
  correo: '',
  telefono: '',
  empresa: '',
  asunto: '',
  mensaje: '',
})

const errors = ref({
  nombre: null,
  correo: null,
  asunto: null,
  mensaje: null,
})

const showToast = ref(false) // Controla la visibilidad de la notificación

// Detectar si es un dispositivo móvil
const isMobile = computed(() => window.innerWidth <= 768)

const validateForm = () => {
  let isValid = true
  errors.value = { nombre: null, correo: null, asunto: null, mensaje: null }

  if (!form.value.nombre.trim()) {
    errors.value.nombre = 'El nombre es obligatorio.'
    isValid = false
  }

  if (!form.value.correo.trim()) {
    errors.value.correo = 'El correo electrónico es obligatorio.'
    isValid = false
  } else if (!/\S+@\S+\.\S+/.test(form.value.correo)) {
    errors.value.correo = 'El correo electrónico no es válido.'
    isValid = false
  }

  if (!form.value.asunto.trim()) {
    errors.value.asunto = 'El asunto es obligatorio.'
    isValid = false
  }

  if (!form.value.mensaje.trim()) {
    errors.value.mensaje = 'El mensaje es obligatorio.'
    isValid = false
  }

  return isValid
}

const handleSubmit = () => {
  if (!validateForm()) return

  const templateParams = {
    name: form.value.nombre,
    email: form.value.correo,
    phone: form.value.telefono || 'No proporcionado',
    company: form.value.empresa || 'No proporcionado',
    subject: form.value.asunto,
    message: form.value.mensaje,
  }

  emailjs
    .send('service_sqr49yr', 'template_kwhcouf', templateParams, '9YK2OVWcvpBQxBaKF')
    .then(() => {
      showToast.value = true // Mostrar la notificación
      setTimeout(() => {
        showToast.value = false // Ocultar la notificación después de 5 segundos
      }, 5000)

      form.value = {
        nombre: '',
        correo: '',
        telefono: '',
        empresa: '',
        asunto: '',
        mensaje: '',
      }
    })
    .catch((error) => {
      console.error('Error al enviar el mensaje:', error)
    })
}
</script>