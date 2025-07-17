<template>
  <div class="min-h-screen bg-[#f9f9f6] text-gray-800 font-sans overflow-x-hidden">

    
    <header class="flex items-center justify-between px-8 py-7 bg-[#063C1E] text-[#E1B98A] shadow sticky top-0 z-50 relative">
      <div class="flex items-center gap-6 text-lg font-heading">
        <button class="md:hidden text-[#E1B98A] text-2xl">
          <i class="fas fa-bars"></i>
        </button>
        <nav class="hidden md:flex gap-6">
          <NuxtLink to="/" class="hover:text-white transition">Home</NuxtLink>
          <NuxtLink to="/tours" class="hover:text-white transition">Tours</NuxtLink>
          <NuxtLink to="/about" class="hover:text-white transition">About</NuxtLink>
        </nav>
      </div>
      <div class="absolute left-1/2 transform -translate-x-1/2">
        <img src="/images/logo2.png" alt="RVS Logo" class="h-30 w-auto" />
      </div>
      <div class="ml-auto">
        <button
          @click="$router.push('/reservation')"
          class="px-10 py-3 border border-[#E1B98A] text-[#E1B98A] bg-transparent rounded transition-all duration-300 font-[100] text-l hover:bg-[#E1B98A] hover:text-[#063C1E] shadow-none animate-fade-in"
        >
          Make reservation
        </button>
      </div>
    </header>

    
    <section class="flex flex-col md:flex-row items-center justify-between px-8 py-40 gap-12">
      
      <div class="w-full md:w-1/2 animate-fade-in">
        <h1 class="text-4xl font-bold mb-4">About RV Travels</h1>
        <p class="text-gray-600 mb-4">
          We offer comfortable and reliable van transportation to your favorite destinations across the region! Whether you’re planning a trip to Thailand, Singapore, or 
          exploring top spots within Malaysia, our service ensures a smooth and hassle-free journey. Book your ride with us and enjoy safe, affordable, and flexible travel, 
          perfect for groups. Let us handle the road while you focus on making memories!
        </p>
        <p class="text-gray-600 mb-4">
          From hand-picked destinations to exclusive packages, we are dedicated to providing experiences that go beyond the ordinary.
        </p>
      </div>
      
      <div class="w-full md:w-1/2 animate-fade-in delay-200">
        <Swiper
          :modules="[Autoplay, Pagination]"
          :slides-per-view="1"
          :loop="true"
          :autoplay="{ delay: 2800, disableOnInteraction: false }"
          :pagination="{ clickable: true }"
          class="rounded-lg shadow-2xl"
        >
          <SwiperSlide v-for="slide in slides" :key="slide.title">
            <div class="relative w-full h-[330px] flex flex-col items-center">
              <img :src="slide.img" class="object-cover w-full h-[260px] rounded-xl shadow-lg" />
              <div
                class="absolute bottom-3 left-0 right-0 flex flex-col items-center justify-center pointer-events-none"
                style="backdrop-filter: blur(1.5px)"
              >
                <p class="text-base md:text-lg font-semibold text-white bg-[#063c1ee6] rounded-full px-4 py-1 shadow-md mb-1 animate-fade-in">
                  {{ slide.title }}
                </p>
                <p class="text-xs md:text-sm text-[#E1B98A] bg-[#063c1ecc] px-3 py-1 rounded-xl shadow">
                  {{ slide.caption }}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <div class="swiper-pagination !bottom-2"></div>
        </Swiper>
      </div>
    </section>

    <!-- Footer (unchanged) -->
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
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const slides = [
  {
    img: '/images/1.jpg',
    title: 'Thailand Beach Escape',
    caption: 'Sun, sea, and scenic beauty await in Thailand’s top islands.',
  },
  {
    img: '/images/2.jpg',
    title: 'Cityscape of Kuala Lumpur',
    caption: 'Experience Malaysia’s skyline and urban adventure.',
  },
  {
    img: '/images/3.jpg',
    title: 'Bangkok Temples',
    caption: 'Discover the spiritual heart of Thailand in golden sunsets.',
  },
  {
    img: '/images/sg1.jpg',
    title: 'Singapore Nights',
    caption: 'A futuristic city filled with gardens and lights.',
  },
  {
    img: '/images/5.avif',
    title: 'Wild Nature Trails',
    caption: 'Breathtaking moments in untouched nature.',
  },
]
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px);}
  to { opacity: 1; transform: translateY(0);}
}
.animate-fade-in { animation: fade-in 0.8s ease-out both;}
.delay-200 { animation-delay: 0.2s;}
/* Swiper customization */
.swiper-pagination-bullet {
  background: #E1B98A !important;
  opacity: 1;
}
.swiper-pagination-bullet-active {
  background: #fff !important;
  border: 2px solid #E1B98A;
}
</style>
