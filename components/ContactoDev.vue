<template>
  <section id="contacto" class="py-24 bg-dark relative overflow-hidden">
    <!-- Elementos de diseño de fondo -->
    <div class="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-dark to-transparent opacity-80"></div>
    <div class="absolute bottom-0 right-0 w-1/3 h-1/3 bg-accent/5 rounded-full filter blur-3xl"></div>
    <div class="absolute top-40 left-20 w-72 h-72 bg-accent/5 rounded-full filter blur-3xl"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <!-- Encabezado de sección -->
      <div class="text-center mb-16">
        <p class="text-accent uppercase tracking-widest font-semibold mb-2">Comunícate con nosotros</p>
        <h2 class="text-4xl md:text-5xl font-bold mb-4">
          <span class="text-light">Hablemos de tu </span>
          <span class="text-accent">Proyecto</span>
        </h2>
        <div class="h-1 w-24 bg-accent mx-auto mb-8"></div>
        <p class="max-w-2xl mx-auto text-light/70 text-lg">
          Estamos listos para convertir tus ideas en soluciones digitales excepcionales.
          Cuéntanos sobre tu proyecto y te responderemos a la brevedad.
        </p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        <!-- Información de contacto y canales -->
        <div class="lg:col-span-2 bg-gray-dark/70 rounded-2xl p-8 border border-accent/10 backdrop-blur-sm shadow-lg">
          <h3 class="text-2xl font-bold text-light mb-6">Información de contacto</h3>
          
          <div class="space-y-6">
            <div class="flex items-start">
              <div class="bg-accent/10 p-3 rounded-full mr-4">
                <i class="fas fa-envelope text-accent"></i>
              </div>
              <div>
                <h4 class="text-light font-medium mb-1">Email</h4>
                <a href="mailto:contacto@dev2you.com" class="text-light/70 hover:text-accent transition-colors">
                  contacto@dev2you.com
                </a>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="bg-accent/10 p-3 rounded-full mr-4">
                <i class="fas fa-phone-alt text-accent"></i>
              </div>
              <div>
                <h4 class="text-light font-medium mb-1">Teléfono</h4>
                <a href="tel:+51987654321" class="text-light/70 hover:text-accent transition-colors">
                  +51 987 654 321
                </a>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="bg-accent/10 p-3 rounded-full mr-4">
                <i class="fas fa-map-marker-alt text-accent"></i>
              </div>
              <div>
                <h4 class="text-light font-medium mb-1">Ubicación</h4>
                <p class="text-light/70">
                  Lima, Perú (Trabajo remoto disponible)
                </p>
              </div>
            </div>
          </div>
          
          <!-- Redes sociales -->
          <div class="mt-10">
            <h4 class="text-light font-medium mb-4">Síguenos</h4>
            <div class="flex space-x-4">
              <a href="#" class="bg-gray-dark hover:bg-accent/20 transition-colors p-3 rounded-full text-accent">
                <i class="fab fa-github"></i>
              </a>
              <a href="#" class="bg-gray-dark hover:bg-accent/20 transition-colors p-3 rounded-full text-accent">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="#" class="bg-gray-dark hover:bg-accent/20 transition-colors p-3 rounded-full text-accent">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="bg-gray-dark hover:bg-accent/20 transition-colors p-3 rounded-full text-accent">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <!-- Testimonio o cita -->
          <div class="mt-10 bg-dark/50 p-6 rounded-xl border-l-4 border-accent">
            <p class="text-light/80 italic mb-4">
              "El equipo de Dev2You transformó nuestra idea en una solución digital 
              excepcional que superó nuestras expectativas."
            </p>
            <p class="text-accent font-medium">— Cliente satisfecho</p>
          </div>
        </div>
        
        <!-- Formulario de contacto mejorado -->
        <div class="lg:col-span-3 bg-gray-dark/70 rounded-2xl p-8 border border-accent/10 backdrop-blur-sm shadow-lg">
          <h3 class="text-2xl font-bold text-light mb-6">Envíanos un mensaje</h3>
          
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Nombre -->
              <div class="form-control">
                <label class="label">
                  <span class="label-text text-light">Nombre</span>
                </label>
                <input 
                  v-model="form.name" 
                  type="text" 
                  placeholder="Tu nombre" 
                  class="input bg-dark border-gray-dark/80 focus:border-accent focus:ring-1 focus:ring-accent text-light placeholder:text-light/30 w-full" 
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
                  class="input bg-dark border-gray-dark/80 focus:border-accent focus:ring-1 focus:ring-accent text-light placeholder:text-light/30 w-full" 
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
                class="input bg-dark border-gray-dark/80 focus:border-accent focus:ring-1 focus:ring-accent text-light placeholder:text-light/30 w-full" 
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
                class="select bg-dark border-gray-dark/80 focus:border-accent focus:ring-1 focus:ring-accent text-light w-full"
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
                class="textarea h-40 bg-dark border-gray-dark/80 focus:border-accent focus:ring-1 focus:ring-accent text-light placeholder:text-light/30 w-full" 
                required
              ></textarea>
            </div>
            
            <!-- Checkbox de política de privacidad -->
            <div class="form-control">
              <label class="label cursor-pointer justify-start gap-3">
                <input v-model="form.policy" type="checkbox" class="checkbox checkbox-accent" required />
                <span class="label-text text-light/70">He leído y acepto la <a href="#" class="text-accent hover:underline">política de privacidad</a>.</span>
              </label>
            </div>
            
            <div class="form-control mt-8">
              <button 
                type="submit" 
                class="btn btn-primary text-dark font-bold w-full md:w-auto"
                :class="{ 'loading': isSubmitting }"
                :disabled="isSubmitting"
              >
                <span v-if="!isSubmitting">Enviar mensaje</span>
                <span v-else>Enviando...</span>
              </button>
            </div>
          </form>
          
          <!-- Alerta de éxito -->
          <div v-if="showSuccess" class="mt-6 alert alert-success shadow-lg">
            <div>
              <i class="fas fa-check-circle"></i>
              <span>¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.</span>
            </div>
          </div>
          
          <!-- Alerta de error -->
          <div v-if="showError" class="mt-6 alert alert-error shadow-lg">
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