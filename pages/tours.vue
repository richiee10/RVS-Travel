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
    <div class="ml-auto hidden md:block">
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
          <img src="/images/logoblc.png" alt="RVS Logo" class="h-30 w-auto" />
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
        <!-- Reservation Button at the Bottom (mobile only) -->
        <div class="flex-1"></div>
        <div class="flex justify-center mb-10">
          <button
            @click="goReservation"
            class="px-10 py-3 border border-[#063C1E] text-[#063C1E] bg-transparent rounded transition-all duration-300 font-[100] text-2xl hover:bg-[#063C1E] hover:text-[#E1B98A] shadow-none animate-fade-in"
          >
            Make reservation
          </button>
        </div>
      </div>
    </transition>
  </header>

    <section class="flex flex-col items-center text-center px-8 py-16">
      <h1 class="text-4xl font-bold mb-4 animate-fade-in">Our Exclusive Tours 🗺️</h1>
      <p class="text-gray-600 max-w-2xl mb-8 animate-fade-in delay-200">
        Discover carefully curated travel experiences around the world from serene beaches to dynamic cities and rich cultural gems.
      </p>
    </section>

    <section class="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 pb-16">
      <div class="rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 bg-white animate-fade-in delay-200">
        <img src="/images/1.jpg" class="w-full h-48 object-cover" />
        <div class="p-4">
          <h3 class="text-xl font-semibold mb-2 animate-fade-in delay-300">Thailand</h3>
          <p class="text-gray-600 mb-4 animate-fade-in delay-400">Relax on stunning beaches and soak up the sun in crystal-clear waters.</p>
          <NuxtLink
            to="/thailand"
            class="border border-[#063C1E] text-[#063C1E] px-4 py-2 rounded hover:bg-[#063C1E] hover:text-white transition inline-block animate-fade-in delay-200"
          >
            View Details
          </NuxtLink>
        </div>
      </div>
      <div class="rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 bg-white animate-fade-in delay-400">
        <img src="/images/2.jpg" class="w-full h-48 object-cover" />
        <div class="p-4">
          <h3 class="text-xl font-semibold mb-2 animate-fade-in delay-500">Malaysia</h3>
          <p class="text-gray-600 mb-4 animate-fade-in delay-600">Explore the excitement and beauty of vibrant city life and modern attractions.</p>
          <NuxtLink
            to="/malaysia"
            class="border border-[#063C1E] text-[#063C1E] px-4 py-2 rounded hover:bg-[#063C1E] hover:text-white transition inline-block animate-fade-in delay-100"
          >
            View Details
          </NuxtLink>
        </div>
      </div>
      <div class="rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 bg-white animate-fade-in delay-600">
        <img src="/images/sg1.jpg" class="w-full h-48 object-cover" />
        <div class="p-4">
          <h3 class="text-xl font-semibold mb-2 animate-fade-in delay-700">Singapore</h3>
          <p class="text-gray-600 mb-4 animate-fade-in delay-800">Explore the excitement and beauty of vibrant city life and rare boutique shops.</p>
          <NuxtLink
            to="/singapore"
            class="border border-[#063C1E] text-[#063C1E] px-4 py-2 rounded hover:bg-[#063C1E] hover:text-white transition inline-block animate-fade-in delay-200"
          >
            View Details
          </NuxtLink>
        </div>
      </div>
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
  from { opacity: 0; transform: translateY(20px);}
  to { opacity: 1; transform: translateY(0);}
}
.animate-fade-in { animation: fade-in 0.8s ease-out both;}
.delay-200 { animation-delay: 0.2s;}
.delay-300 { animation-delay: 0.3s;}
.delay-400 { animation-delay: 0.4s;}
.delay-500 { animation-delay: 0.5s;}
.delay-600 { animation-delay: 0.6s;}
.delay-700 { animation-delay: 0.7s;}
.delay-800 { animation-delay: 0.8s;}
.delay-900 { animation-delay: 0.9s;}
</style>
