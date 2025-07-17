<template>
  <div class="min-h-screen bg-[#f9f9f6] text-gray-800 font-sans overflow-x-hidden">
    <header class="flex items-center justify-between px-5 py-7 bg-[#063C1E] text-[#E1B98A] shadow sticky top-0 z-50 relative">
    <!-- Left: Hamburger & Nav -->
    <div class="flex items-center gap-6 text-lg font-heading">
      <!-- Hamburger, only visible on mobile -->
      <button
        class="md:hidden text-[#E1B98A] text-3xl focus:outline-none"
        @click="menuOpen = true"
        aria-label="Open menu"
      >
        <i class="fas fa-bars"></i>
      </button>

      <!-- Nav links, hidden on mobile -->
      <nav class="hidden md:flex gap-">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="px-3 py-2 rounded font-bold text-l transition"
          :class="isActive(link.to)
            ? 'text-[#ffffff]'
            : 'text-[#E1B98A] hover:text-white transition'"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
    </div>

    <!-- Center: Logo -->
    <div class="absolute left-1/2 transform -translate-x-1/2">
      <img src="/images/logo2.png" alt="RVS Logo" class="h-30 w-auto" />
    </div>

    <!-- Right: Reservation Button -->
    <div class="ml-auto">
      <button
        @click="goReservation"
        class="px-10 py-3 border border-[#E1B98A] text-[#E1B98A] bg-transparent rounded transition-all duration-300 font-[100] text-l hover:bg-[#E1B98A] hover:text-[#063C1E] shadow-none animate-fade-in"
      >
        Make reservation
      </button>
    </div>

    <!-- Mobile: Slide-in Menu Overlay -->
    <transition name="slide-fade">
      <div
        v-if="menuOpen"
        class="fixed inset-0 z-50 bg-[#f9f9f6]/95 flex flex-col"
        style="backdrop-filter: blur(2px);"
      >
        <div class="flex items-center justify-between p-6">
          <img src="/images/logo2.png" alt="RVS Logo" class="h-20 w-auto" />
          <button
            class="text-3xl text-[#063C1E] hover:text-[#E1B98A] transition"
            @click="menuOpen = false"
            aria-label="Close menu"
          >
            <i class="fas fa-times"></i>
          </button>
        </div>
        <nav class="flex flex-col items-start gap-10 mt-16 ml-10">
          <button
            v-for="link in navLinks"
            :key="link.to"
            @click="goTo(link.to)"
            class="text-3xl font-bold px-8 py-2 rounded transition text-[#063C1E] hover:bg-[#E1B98A] hover:text-[#063C1E] focus:outline-none"
            :class="isActive(link.to) ? 'text-[#E1B98A]' : ''"
          >
            {{ link.label }}
          </button>
        </nav>
      </div>
    </transition>
  </header>

    <section class="flex flex-col md:flex-row items-center justify-between px-8 py-16 gap-12 relative z-10">
      <div class="w-full md:w-1/2 animate-fade-in">
        <h1 class="text-4xl font-bold mb-4">Your Dream Vacation Starts Here 🌍</h1>
        <p class="text-gray-600 mb-6">
          Discover breathtaking destinations and unbeatable travel packages with RV Travels. Explore. Book. Relax.
        </p>
        <NuxtLink to="/tours">
          <button class="border border-[#063C1E] text-[#063C1E] px-6 py-2 rounded hover:bg-[#063C1E] hover:text-white transition">
            Explore Tours
          </button>
        </NuxtLink>
      </div>

      <div class="w-full md:w-1/2 grid grid-cols-2 gap-4 animate-fade-in delay-200">
        <img src="/images/1.jpg" class="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
        <img src="/images/2.jpg" class="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
        <img src="/images/3.jpg" class="col-span-2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
      </div>
    </section>

    <div class="relative z-0 w-full h-[400px] overflow-hidden">
      <img src="/images/5.avif" alt="Travel Visual" class="w-full h-full object-cover" />
    </div>

    <section class="flex flex-col-reverse md:flex-row justify-between items-center px-8 py-16 gap-12 bg-[#f9f9f6]">
      <div class="max-w-lg animate-fade-in">
        <h2 class="text-2xl font-bold mb-4">Commitment to authenticity</h2>
        <p class="text-gray-700 mb-6">
          We believe that the heart and soul of remarkable travel experiences lie in true local authenticity.
          We curate journeys that let you savor nature, cuisine, and culture, responsibly and stylishly.
        </p>
        <div class="flex gap-4">
          <NuxtLink to="/tours">
            <button class="border border-[#063C1E] text-[#063C1E] px-4 py-2 rounded hover:bg-[#063C1E] hover:text-white transition">
              Destinations
            </button>
          </NuxtLink>
        </div>
      </div>
      <img src="/images/1.jpg" class="w-full md:w-1/2 rounded-lg shadow-lg animate-fade-in delay-200" />
    </section>

    <section class="bg-orange-700 text-white text-center px-8 py-16 animate-fade-in">
      <h2 class="text-2xl font-semibold mb-2">Secure your travel experience now</h2>
      <p class="mb-6">Reserve your next destination and discover the art of authentic adventure</p>
      <button
        @click="$router.push('/reservation')"
        class="border border-white px-6 py-2 rounded hover:bg-white hover:text-orange-700 transition"
      >
        Make reservation
      </button>
    </section>

    <footer class="bg-[#063C1E] text-[#E1B98A] py-10">
      <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <img src="/images/logo2.png" alt="RVS Logo" class="h-35 mb-1" />
          <p class="text-[#e3d5bd]">
            Explore the world with RVS – your trusted travel partner for unforgettable journeys.
          </p>
        </div>

        <div>
          <h3 class="font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><NuxtLink to="/" class="hover:underline">Home</NuxtLink></li>
            <li><NuxtLink to="/tours" class="hover:underline">Tours</NuxtLink></li>
            <li><NuxtLink to="/about" class="hover:underline">About</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold mb-4">Connect with Us</h3>
          <div class="flex flex-col gap-2">
            <a href="https://www.facebook.com/share/1Bt8hNEEPc/?mibextid=wwXIfr" class="hover:text-white transition"><i class="fab fa-facebook"></i> Facebook</a>
            <a href="https://www.instagram.com/ragava.10?igsh=a2duZmNqeDVtbWcw" class="hover:text-white transition"><i class="fab fa-instagram"></i> Instagram</a>
            <a href="https://wa.me/+60198909550" class="hover:text-white transition"><i class="fab fa-whatsapp"></i> Whatsapp</a>
          </div>
        </div>
      </div>
      <div class="text-center text-[#e3d5bd] mt-10 text-xs">
        &copy; 2025 RVS Travels. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const menuOpen = ref(false)
const route = useRoute()
const router = useRouter()

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/tours', label: 'Tours' },
  { to: '/about', label: 'About' }
]

function isActive(path) {
  return route.path === path
}
function goReservation() {
  router.push('/reservation')
}
function goTo(path) {
  menuOpen.value = false
  router.push(path)
}
</script>


<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 0.8s ease-out both;
}
.delay-200 {
  animation-delay: 0.2s;
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.32s cubic-bezier(.4,1,.3,1);
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(-50px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}
</style>
