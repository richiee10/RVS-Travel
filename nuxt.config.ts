// nuxt.config.ts
export default defineNuxtConfig({
  ssr: false, // Disable SSR so jsPDF works fine

  modules: [
    '@nuxtjs/tailwindcss'
  ],

  css: [
    '@/assets/css/main.css'
  ],

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Poppins:wght@300;400;500&display=swap'
        }
      ]
    }
  },

  vite: {
    optimizeDeps: {
      include: ['jspdf']
    }
  }
})
