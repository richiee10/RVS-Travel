<script setup>
import { ref } from 'vue'
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const selectedGuests = ref(2)
const places = ['Thailand', 'Singapore', 'Malaysia', 'Indonesia', 'Vietnam']
const selectedPlace = ref('')
const selectedDate = ref(null)
const contactName = ref('')
const contactPhone = ref('')

function sendRequest() {
  alert(`Reservation for ${selectedGuests.value + 1} guests to ${selectedPlace.value} on ${selectedDate.value ? selectedDate.value.toLocaleDateString() : ''}. Contact: ${contactName.value}, ${contactPhone.value}`)
}
</script>

<template>
  <div class="min-h-screen bg-[#063C1E] text-[#E1B98A] font-sans overflow-x-hidden">
    
    <header class="flex items-center justify-between px-8 py-7 bg-[#063C1E] text-[#E1B98A] shadow sticky top-0 z-50 relative">
      <div class="flex items-center gap-6 text-lg font-heading">
        <button class="md:hidden text-[#E1B98A] text-2xl">
          <i class="fas fa-bars"></i>
        </button>
        <nav class="hidden md:flex gap-6">
          <NuxtLink to="/" class="hover:text-white transition font-semibold">Home</NuxtLink>
          <NuxtLink to="/tours" class="hover:text-white transition font-semibold">Tours</NuxtLink>
          <NuxtLink to="/about" class="hover:text-white transition font-semibold">About</NuxtLink>
        </nav>
      </div>
      <!-- Center Logo -->
      <div class="absolute left-1/2 transform -translate-x-1/2">
        <img src="/images/logo2.png" alt="RVS Logo" class="h-30 w-auto" />
      </div>
      
      <div class="ml-auto">
        <button
          @click="$router.push('/')"
          class="px-10 py-3 border border-[#E1B98A] text-[#E1B98A] bg-transparent rounded transition-all duration-300 font-[100] text-l hover:bg-[#E1B98A] hover:text-[#063C1E] shadow-none animate-fade-in"
        >
          Back to Home
        </button>
      </div>
    </header>

    
    <main class="flex justify-center items-center min-h-[calc(100vh-80px)] py-8">
      <div class="bg-[#253C2C] rounded-xl shadow-2xl px-8 py-10 max-w-md w-full flex flex-col items-center border border-[#E1B98A]">
        <h2 class="text-xl font-bold mb-6 text-[#E1B98A]">Make reservation</h2>
        
        
        <div class="w-full mb-5">
          <p class="mb-2 font-semibold text-[#E1B98A]">1. Number of guests</p>
          <div class="flex gap-2 justify-center">
            <button v-for="n in 8" :key="n"
              :class="['px-4 py-1 rounded border', selectedGuests === n ? 'bg-[#E1B98A] text-[#063C1E] font-bold' : 'bg-transparent text-[#E1B98A] border-[#E1B98A] hover:bg-[#E1B98A] hover:text-[#063C1E]']"
              @click="selectedGuests = n">
              {{ n+1 }}
            </button>
          </div>
        </div>

        
        <div class="w-full mb-5">
          <p class="mb-2 font-semibold text-[#E1B98A]">2. Select destination</p>
          <div class="flex gap-2 justify-center flex-wrap">
            <button
              v-for="place in places"
              :key="place"
              :class="['px-4 py-1 rounded border', selectedPlace === place ? 'bg-[#E1B98A] text-[#063C1E] font-bold' : 'bg-transparent text-[#E1B98A] border-[#E1B98A] hover:bg-[#E1B98A] hover:text-[#063C1E]']"
              @click="selectedPlace = place">
              {{ place }}
            </button>
          </div>
        </div>

       
        <div class="w-full mb-5 flex flex-col items-center">
          <p class="mb-2 font-semibold text-[#E1B98A]">3. Select date</p>
          <Datepicker
            v-model="selectedDate"
            :inline="true"
            :auto-apply="true"
            :enable-time-picker="false"
            class="w-full custom-calendar"
          />
        </div>

        
        <div class="w-full mb-6 flex gap-2">
          <input
            type="text"
            v-model="contactName"
            placeholder="Full name"
            class="flex-1 px-3 py-2 rounded border border-[#E1B98A] bg-[#f9f9f6] text-[#063C1E] placeholder-[#063C1E] focus:outline-none"
          />
          <input
            type="tel"
            v-model="contactPhone"
            placeholder="Phone number"
            class="flex-1 px-3 py-2 rounded border border-[#E1B98A] bg-[#f9f9f6] text-[#063C1E] placeholder-[#063C1E] focus:outline-none"
          />
        </div>

        
        <button
          class="w-full mt-4 bg-[#E1B98A] text-[#063C1E] font-bold py-2 rounded hover:bg-[#b89161] transition"
          @click="sendRequest"
        >
          Send request
        </button>
      </div>
    </main>
    
  </div>
</template>

<style>

.custom-calendar .dp__theme_light {
  --dp-background-color: #253C2C !important;
  --dp-text-color: #E1B98A !important;
  --dp-primary-color: #E1B98A !important; 
  --dp-primary-text-color: #063C1E !important;
  --dp-hover-color: #E1B98A22 !important;
  --dp-border-radius: 16px !important;
  --dp-cell-border-radius: 8px !important;
  --dp-border-color: #E1B98A !important;
  --dp-accent-color: #E1B98A !important;
  --dp-font-family: 'Poppins', 'Playfair Display', serif !important;
}
</style>
