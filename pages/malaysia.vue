<template>
  <div class="min-h-screen bg-[#f9f9f6] text-gray-800 font-sans overflow-x-hidden">

    <header class="flex items-center justify-between px-8 py-7 bg-[#063C1E] text-[#E1B98A] shadow sticky top-0 z-50 relative">
      
      <div class="flex items-center gap-6 text-lg font-heading">
        <button class="md:hidden text-[#E1B98A] text-2xl"><i class="fas fa-bars"></i></button>
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


    <section class="flex flex-col md:flex-row items-center justify-between px-8 py-40 gap-12">
      <div class="w-full md:w-1/2 animate-fade-in">
        <h1 class="text-4xl font-bold mb-4">Malaysia 🇲🇾</h1>
        <p class="text-gray-600 mb-4">Explore the heart of Southeast Asia! From the vibrant streets of Kuala Lumpur to the tranquil beauty of Langkawi, Malaysia offers a blend of urban adventure and natural wonders.</p>
        <ul class="list-disc pl-6 text-gray-700 space-y-2">
          <li><span class="font-semibold text-[#063C1E]">Day 1:</span> Kuala Lumpur city tour (KLCC, Batu Caves, Petaling Street)</li>
          <li><span class="font-semibold text-[#063C1E]">Day 2:</span> Cameron Highlands tea plantation experience</li>
          <li><span class="font-semibold text-[#063C1E]">Day 3:</span> Penang heritage & street food walk</li>
          <li><span class="font-semibold text-[#063C1E]">Day 4:</span> Langkawi island hopping and cable car</li>
        </ul>
      </div>
      <div class="w-full md:w-1/2 flex justify-center">
        <img src="/images/2.jpg" class="rounded-lg shadow-lg max-h-96 object-cover" />
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
@keyframes fade-in { from { opacity: 0; transform: translateY(20px);} to { opacity: 1; transform: translateY(0);} }
.animate-fade-in { animation: fade-in 0.8s ease-out both;}
.delay-200 { animation-delay: 0.2s;}
</style>
