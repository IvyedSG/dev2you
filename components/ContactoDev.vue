<template>
  <section id="contacto" class="relative py-24 overflow-hidden bg-dark">
    <!-- Elementos de diseño de fondo -->
    <div class="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-dark to-transparent opacity-80"></div>
    <div class="absolute bottom-0 right-0 w-1/3 rounded-full h-1/3 bg-accent/5 filter blur-3xl"></div>
    <div class="absolute rounded-full top-40 left-20 w-72 h-72 bg-accent/5 filter blur-3xl"></div>
    
    <div class="container relative z-10 px-4 mx-auto">
      <!-- Encabezado de sección -->
      <div class="mb-16 text-center">
        <p class="mb-2 font-semibold tracking-widest uppercase text-accent">Comunícate con nosotros</p>
        <h2 class="mb-4 text-4xl font-bold md:text-5xl">
          <span class="text-light">Hablemos de tu </span>
          <span class="text-accent">Proyecto</span>
        </h2>
        <div class="w-24 h-1 mx-auto mb-8 bg-accent"></div>
        <p class="max-w-2xl mx-auto text-lg text-light/70">
          Estamos listos para convertir tus ideas en soluciones digitales excepcionales.
          Cuéntanos sobre tu proyecto y te responderemos a la brevedad.
        </p>
      </div>
      
      <div class="grid items-start grid-cols-1 gap-12 lg:grid-cols-5">
        <!-- Información de contacto y canales -->
        <div class="p-8 border shadow-lg lg:col-span-2 bg-gray-dark/70 rounded-2xl border-accent/10 backdrop-blur-sm">
          <h3 class="mb-6 text-2xl font-bold text-light">Información de contacto</h3>
          
          <div class="space-y-6">
            <div class="flex items-start">
              <div class="p-3 mr-4 rounded-full bg-accent/10">
                <i class="fas fa-envelope text-accent"></i>
              </div>
              <div>
                <h4 class="mb-1 font-medium text-light">Email</h4>
                <a href="mailto:contacto@dev2you.com" class="transition-colors text-light/70 hover:text-accent">
                  contacto@dev2you.com
                </a>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="p-3 mr-4 rounded-full bg-accent/10">
                <i class="fas fa-phone-alt text-accent"></i>
              </div>
              <div>
                <h4 class="mb-1 font-medium text-light">Teléfono</h4>
                <a href="tel:+51987654321" class="transition-colors text-light/70 hover:text-accent">
                  +51 987 654 321
                </a>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="p-3 mr-4 rounded-full bg-accent/10">
                <i class="fas fa-map-marker-alt text-accent"></i>
              </div>
              <div>
                <h4 class="mb-1 font-medium text-light">Ubicación</h4>
                <p class="text-light/70">
                  Lima, Perú (Trabajo remoto disponible)
                </p>
              </div>
            </div>
          </div>
          
          <!-- Redes sociales -->
          <div class="mt-10">
            <h4 class="mb-4 font-medium text-light">Síguenos</h4>
            <div class="flex space-x-4">
              <a href="#" class="p-3 transition-colors rounded-full bg-gray-dark hover:bg-accent/20 text-accent">
                <i class="fab fa-github"></i>
              </a>
              <a href="#" class="p-3 transition-colors rounded-full bg-gray-dark hover:bg-accent/20 text-accent">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="#" class="p-3 transition-colors rounded-full bg-gray-dark hover:bg-accent/20 text-accent">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="p-3 transition-colors rounded-full bg-gray-dark hover:bg-accent/20 text-accent">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        
        <!-- Formulario de contacto mejorado -->
        <div class="p-8 border shadow-lg lg:col-span-3 bg-gray-dark/70 rounded-2xl border-accent/10 backdrop-blur-sm">
          <h3 class="mb-6 text-2xl font-bold text-light">Envíanos un mensaje</h3>
          
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
              <!-- Nombre -->
              <div class="form-control">
                <label class="label">
                  <span class="label-text text-light">Nombre</span>
                </label>
                <input 
                  v-model="form.name" 
                  type="text" 
                  placeholder="Tu nombre" 
                  class="w-full input bg-dark border-gray-dark/80 focus:border-accent focus:ring-1 focus:ring-accent text-light placeholder:text-light/30" 
                  required 
                />
              </div>
              
              <!-- Email -->
              <div class="form-control">
                <label class="label">
                  <span class="label-text text-light">Email</span>
                </label>
                <input 
                  v-model="form.email" 
                  type="email" 
                  placeholder="tucorreo@ejemplo.com" 
                  class="w-full input bg-dark border-gray-dark/80 focus:border-accent focus:ring-1 focus:ring-accent text-light placeholder:text-light/30" 
                  required 
                />
              </div>
            </div>
            
            <!-- Asunto -->
            <div class="form-control">
              <label class="label">
                <span class="label-text text-light">Asunto</span>
              </label>
              <input 
                v-model="form.subject" 
                type="text" 
                placeholder="Asunto de tu mensaje" 
                class="w-full input bg-dark border-gray-dark/80 focus:border-accent focus:ring-1 focus:ring-accent text-light placeholder:text-light/30" 
                required 
              />
            </div>
            
            <!-- Tipo de proyecto - Select elegante -->
            <div class="form-control">
              <label class="label">
                <span class="label-text text-light">Tipo de proyecto</span>
              </label>
              <select 
                v-model="form.projectType" 
                class="w-full select bg-dark border-gray-dark/80 focus:border-accent focus:ring-1 focus:ring-accent text-light"
                required
              >
                <option disabled value="">Selecciona una opción</option>
                <option value="web">Desarrollo Web</option>
                <option value="movil">Aplicación Móvil</option>
                <option value="ecommerce">E-commerce</option>
                <option value="software">Software a medida</option>
                <option value="uiux">Diseño UI/UX</option>
                <option value="other">Otro</option>
              </select>
            </div>
            
            <!-- Mensaje -->
            <div class="form-control">
              <label class="label">
                <span class="label-text text-light">Mensaje</span>
              </label>
              <textarea 
                v-model="form.message" 
                placeholder="Cuéntanos sobre tu proyecto..." 
                class="w-full h-40 textarea bg-dark border-gray-dark/80 focus:border-accent focus:ring-1 focus:ring-accent text-light placeholder:text-light/30" 
                required
              ></textarea>
            </div>
            
            <!-- Checkbox de política de privacidad -->
            <div class="form-control">
              <label class="justify-start gap-3 cursor-pointer label">
                <input v-model="form.policy" type="checkbox" class="checkbox checkbox-accent" required />
                <span class="label-text text-light/70">He leído y acepto la <a href="#" class="text-accent hover:underline">política de privacidad</a>.</span>
              </label>
            </div>
            
            <div class="mt-8 form-control">
              <button 
                type="submit" 
                class="hidden px-5 py-2 text-sm font-semibold tracking-wide transition-transform duration-300 rounded-lg shadow-md lg:inline-block bg-accent text-dark hover:scale-105 hover:shadow-lg"
                :class="{ 'loading': isSubmitting }"
                :disabled="isSubmitting"
              >
                <span v-if="!isSubmitting">Enviar mensaje</span>
                <span v-else>Enviando...</span>
              </button>
            </div>
          </form>
          
          <!-- Alerta de éxito -->
          <div v-if="showSuccess" class="mt-6 shadow-lg alert alert-success">
            <div>
              <i class="fas fa-check-circle"></i>
              <span>¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.</span>
            </div>
          </div>
          
          <!-- Alerta de error -->
          <div v-if="showError" class="mt-6 shadow-lg alert alert-error">
            <div>
              <i class="fas fa-exclamation-circle"></i>
              <span>Ocurrió un error al enviar el mensaje. Por favor, intenta nuevamente.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue';

// Estado del formulario
const form = reactive({
  name: '',
  email: '',
  subject: '',
  projectType: '',
  message: '',
  policy: false
});

// Estados para controlar la UI
const isSubmitting = ref(false);
const showSuccess = ref(false);
const showError = ref(false);

// Método para manejar el envío del formulario
const handleSubmit = async () => {
  // Resetear estados
  showSuccess.value = false;
  showError.value = false;
  isSubmitting.value = true;
  
  try {
    // Simulación de envío (reemplazar con tu lógica de envío real)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mostrar éxito
    showSuccess.value = true;
    
    // Limpiar formulario
    form.name = '';
    form.email = '';
    form.subject = '';
    form.projectType = '';
    form.message = '';
    form.policy = false;
    
  } catch (error) {
    // Mostrar error
    showError.value = true;
    console.error('Error al enviar el formulario:', error);
  } finally {
    isSubmitting.value = false;
    
    // Auto-ocultar mensaje de éxito después de un tiempo
    if (showSuccess.value) {
      setTimeout(() => {
        showSuccess.value = false;
      }, 5000);
    }
  }
};
</script>

<style scoped>
/* Estilos adicionales si son necesarios */
</style>