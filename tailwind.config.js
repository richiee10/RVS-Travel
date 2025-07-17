/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Poppins', 'sans-serif'],
        sans: ['Poppins', 'sans-serif'] // makes it default
      },
      colors: {
        sushiGreen: '#063C1E',
        sushiBeige: '#E1B98A',
      }
    }
  },
  plugins: []
}
