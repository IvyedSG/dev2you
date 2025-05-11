<template>
  <div data-theme="dev4you">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <WhatsAppButton />
  </div>
</template>

<script setup>
// Configuración SEO avanzada para máximo posicionamiento
useHead({
  titleTemplate: '%s | Dev4You - Soluciones Digitales Personalizadas',
  title: 'Desarrollo Web y Apps | Expertos en Tecnología',
  meta: [
    // Meta descripción optimizada con palabras clave y CTA
    { name: 'description', content: 'Creamos soluciones digitales personalizadas para tu negocio. Desarrollo web, apps, automatización de procesos y sistemas a medida. ¡Impulsa tu presencia digital!' },
    
    // Viewport optimizado para todos los dispositivos
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0, shrink-to-fit=no, viewport-fit=cover' },
    
    // Configuración para dispositivos móviles
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
    { name: 'theme-color', content: '#0F0F0F' },
    { name: 'mobile-web-app-capable', content: 'yes' },
    { name: 'HandheldFriendly', content: 'true' },
    
    // Open Graph para compartir en redes sociales
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://dev4you.com/' },
    { property: 'og:title', content: 'Dev4You - Soluciones Digitales a Medida' },
    { property: 'og:description', content: 'Creamos soluciones digitales personalizadas que combinan diseño excepcional y desarrollo de alta calidad para impulsar tu negocio.' },
    { property: 'og:image:alt', content: 'Dev4You - Soluciones digitales personalizadas' },
    { property: 'og:site_name', content: 'Dev4You' },
    { property: 'og:locale', content: 'es_ES' },

    // Metadatos adicionales para SEO
    { name: 'keywords', content: 'desarrollo web, aplicaciones móviles, diseño UX/UI, sistemas a medida, automatización de procesos, desarrollo frontend, desarrollo backend, desarrollo full stack, programación, tecnología, software, apps, website' },
    { name: 'author', content: 'Dev4You Team' },
    { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
    
    // Structured Data meta
    { name: 'apple-mobile-web-app-title', content: 'Dev4You' },
    { name: 'application-name', content: 'Dev4You' },
    { name: 'msapplication-TileColor', content: '#0F0F0F' },
  ],
  link: [
    // URL canónica para evitar contenido duplicado
    { rel: 'canonical', href: 'https://dev4you.com/' },
    
    // Font Awesome para iconos
    { 
      rel: 'stylesheet', 
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
      integrity: 'sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==',
      crossorigin: 'anonymous',
      referrerpolicy: 'no-referrer'
    },
    
    // Precargar recursos críticos
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
    
    // Favicons para diferentes dispositivos (corregidos a PNG)
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#53FC19' },
    { rel: 'shortcut icon', href: '/favicon.ico' },
    { rel: 'manifest', href: '/site.webmanifest' }
  ],
  script: [
    // Agregar Schema.org JSON-LD para enriquecer los resultados de búsqueda
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'Dev4You',
        'url': 'https://dev4you.com',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://dev4you.com/512.png',
          'width': '512',
          'height': '512'
        },
        'description': 'Creamos soluciones digitales personalizadas que combinan diseño excepcional y desarrollo de alta calidad.',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Lima',
          'addressRegion': 'Lima',
          'addressCountry': 'PE'
        },
        'contactPoint': {
          '@type': 'ContactPoint',
          'telephone': '+51-923-927-406',
          'contactType': 'customer service',
          'email': 'contacto.dev4you@gmail.com',
          'availableLanguage': ['Spanish', 'English']
        },
      })
    },
    // Agregar esquema de servicio para ayudar a Google a entender tus servicios
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        'url': 'https://dev4you.com/',
        'name': 'Dev4You - Soluciones Digitales Personalizadas',
        'description': 'Creamos soluciones digitales personalizadas que combinan diseño excepcional y desarrollo de alta calidad.',
        'potentialAction': {
          '@type': 'SearchAction',
          'target': 'https://dev4you.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      })
    },
    // Servicios ofrecidos con schema
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        'serviceType': 'Desarrollo Web y Aplicaciones',
        'provider': {
          '@type': 'Organization',
          'name': 'Dev4You'
        },
        'description': 'Desarrollo de sitios web, aplicaciones móviles y sistemas a medida con enfoque en diseño y experiencia de usuario.',
        'offers': {
          '@type': 'AggregateOffer',
          'highPrice': '5000',
          'lowPrice': '500',
          'priceCurrency': 'PEN',
          'offerCount': '3'
        },
        'areaServed': {
          '@type': 'Country',
          'name': 'Perú'
        }
      })
    }
  ]
})

// Configuración de eventos para analíticas
onMounted(() => {
  // Detector de visibilidad para mejorar métricas de permanencia
  const hiddenProperty = 'hidden' in document ? 'hidden' :
    'webkitHidden' in document ? 'webkitHidden' :
    'mozHidden' in document ? 'mozHidden' : null;
  
  const visibilityChange = hiddenProperty?.replace(/hidden/i, 'visibilitychange');
  
  if (visibilityChange) {
    document.addEventListener(visibilityChange, () => {
      if (!document[hiddenProperty]) {
        console.log('Usuario activo en la página');
        // Código para tracking de permanencia (se puede conectar con GA4)
      }
    });
  }

  // Implementación de lazy loading optimizado
  if ('IntersectionObserver' in window) {
    // Para imágenes con atributo data-src (tu implementación personalizada)
    const lazyImagesCustom = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src'); // Limpiar el atributo después de cargarlo
          imageObserver.unobserve(img);
        }
      });
    }, {
      rootMargin: '200px 0px', // Precargar cuando esté a 200px de entrar en el viewport
      threshold: 0.1
    });
    
    lazyImagesCustom.forEach(img => imageObserver.observe(img));
    
    // Mejora de rendimiento: observar cuando elementos entren en el viewport para animaciones
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const animationObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Solo observar una vez para elementos que no necesitan volver a animarse
          animationObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => animationObserver.observe(el));
  }
});
</script>