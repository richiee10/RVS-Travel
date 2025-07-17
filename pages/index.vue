<template>
  <div class="min-h-screen bg-[#f9f9f6] text-gray-800 font-sans overflow-x-hidden">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />

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
        <img src="/images/logo2.png" alt="RVS Logo" class="h-40 w-auto" />
      </div>

      <div class="ml-auto">
        <NuxtLink to="/login" class="hover:text-white transition">
          <i class="far fa-user-circle text-3xl"></i>
        </NuxtLink>
      </div>
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
          <button class="border border-[#063C1E] text-[#063C1E] px-4 py-2 rounded hover:bg-[#063C1E] hover:text-white transition">
            Destinations
          </button>
          <button class="border border-[#063C1E] text-[#063C1E] px-4 py-2 rounded hover:bg-[#063C1E] hover:text-white transition">
            Packages
          </button>
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
            <a href="#" class="hover:text-white transition"><i class="fab fa-facebook"></i> Facebook</a>
            <a href="#" class="hover:text-white transition"><i class="fab fa-instagram"></i> Instagram</a>
            <a href="#" class="hover:text-white transition"><i class="fab fa-twitter"></i> Twitter</a>
          </div>
        </div>
      </div>
      <div class="text-center text-[#e3d5bd] mt-10 text-xs">
        &copy; 2025 RVS Travels. All rights reserved.
      </div>
    </footer>
  </div>
</template>

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
</style>
