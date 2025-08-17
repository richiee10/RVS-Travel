<script setup>
import { ref } from 'vue'
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import jsPDF from 'jspdf'

const selectedGuests = ref(2)
const places = ['Singapore', 'Thailand', 'Malaysia']
const selectedPlace = ref('')
const startDate = ref(null)
const endDate = ref(null)
const contactName = ref('')
const contactPhone = ref('')
const userComment = ref('')
const warningMessage = ref('')

function sendRequest() {
  // Form Validation
  if (
    !contactName.value ||
    !contactPhone.value ||
    !selectedPlace.value ||
    !startDate.value ||
    !endDate.value
  ) {
    warningMessage.value = 'Please fill in all required fields before submitting.'
    setTimeout(() => {
      warningMessage.value = ''
    }, 3000)
    return
  }

  // PDF Generation
  const doc = new jsPDF()
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(16)
  doc.text('RVS Travels - Reservation Confirmation', 105, 20, { align: 'center' })

  doc.setFontSize(12)
  doc.setFont('helvetica', 'normal')

  let y = 40
  const lineGap = 10

  doc.text(`Full Name         : ${contactName.value}`, 20, y)
  y += lineGap
  doc.text(`Contact Number    : ${contactPhone.value}`, 20, y)
  y += lineGap
  doc.text(`Total Guests      : ${selectedGuests.value + 1}`, 20, y)
  y += lineGap
  doc.text(`Destination       : ${selectedPlace.value}`, 20, y)
  y += lineGap
  doc.text(`Travel Start Date : ${startDate.value.toLocaleDateString()}`, 20, y)
  y += lineGap
  doc.text(`Travel End Date   : ${endDate.value.toLocaleDateString()}`, 20, y)
  y += lineGap + 5

  doc.setFont('helvetica', 'bold')
  doc.text('Additional Message:', 20, y)
  y += lineGap
  doc.setFont('helvetica', 'normal')
  const messageLines = doc.splitTextToSize(userComment.value || '—', 170)
  doc.text(messageLines, 20, y)
  y += messageLines.length * lineGap

  // Divider
  y += 5
  doc.setDrawColor(200)
  doc.line(20, y, 190, y)
  y += lineGap

  // Contact Info
  doc.setFont('helvetica', 'bold')
  doc.text('For any inquiries, please contact:', 20, y)
  y += lineGap
  doc.setFont('helvetica', 'normal')
  doc.text('Ragava - +60 12-200 4163 (WhatsApp Available)', 20, y)
  y += lineGap

  doc.setTextColor(0, 102, 204)
  doc.textWithLink('Click here to contact us via WhatsApp', 20, y, {
    url: 'https://wa.me/60122004163'
  })
  doc.setTextColor(0)
  y += lineGap + 5

  // Final Instructions
  doc.setFont('helvetica', 'bold')
  doc.text('Next Steps:', 20, y)
  y += lineGap
  doc.setFont('helvetica', 'normal')
  const instructions = [
    '1. Download or screenshot this PDF for your records.',
    '2. Click the WhatsApp link above to send your details instantly.',
    '3. Our team will get in touch with you to confirm and finalize the booking.',
    'Make your travel planning quick and easy with RVS Travels !'
  ]
  doc.text(doc.splitTextToSize(instructions.join('\n'), 170), 20, y)

  // Open PDF
  const pdfBlob = doc.output('blob')
  const pdfUrl = URL.createObjectURL(pdfBlob)
  window.open(pdfUrl)

  // WhatsApp Message
  const msg = encodeURIComponent(
    `RVS Travels Reservation:\nName: ${contactName.value}\nPhone: ${contactPhone.value}\nGuests: ${
      selectedGuests.value + 1
    }\nDestination: ${selectedPlace.value}\nStart: ${
      startDate.value.toLocaleDateString()
    }\nEnd: ${endDate.value.toLocaleDateString()}\nComment: ${userComment.value || '—'}`
  )

  window.open(`https://wa.me/60122004163?text=${msg}`, '_blank')
}
import { useRouter } from 'vue-router'

const menuOpen = ref(false)
const route = useRoute()
const router = useRouter()

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/tours', label: 'Tours' },
  { to: '/about', label: 'About' }
]

function goBack() {
  router.back()
}

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

<template>

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
        @click="goBack"
        class="px-10 py-3 border border-[#E1B98A] text-[#E1B98A] bg-transparent rounded transition-all duration-300 font-[100] text-l hover:bg-[#E1B98A] hover:text-[#063C1E] shadow-none animate-fade-in"
      >
        Back
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
            @click="goBack"
            class="px-10 py-3 border border-[#063C1E] text-[#063C1E] bg-transparent rounded transition-all duration-300 font-[100] text-2xl hover:bg-[#063C1E] hover:text-[#E1B98A] shadow-none animate-fade-in"
          >
            Back
          </button>
        </div>
      </div>
    </transition>
  </header>

  <!-- Centered Warning Modal -->
<transition name="fade">
  <div
    v-if="warningMessage"
    class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1000] bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded shadow-lg text-center max-w-md w-full"
  >
    {{ warningMessage }}
  </div>
</transition>


  <div class="min-h-screen bg-[#063C1E] text-[#E1B98A] font-sans overflow-x-hidden">
    <main class="flex justify-center items-center min-h-screen py-10 px-4">
      <div class="bg-[#253C2C] rounded-2xl shadow-2xl px-8 py-10 w-full max-w-md animate-fade-in border border-[#E1B98A]">
        <h2 class="text-2xl font-bold mb-6 text-center">Make reservation</h2>

        <!-- Guests -->
        <div class="mb-5">
          <p class="mb-2 font-semibold">1. Number of guests</p>
          <div class="flex gap-2 justify-center flex-wrap">
            <button
              v-for="n in 8"
              :key="n"
              :class="['px-4 py-2 rounded border transition', selectedGuests === n ? 'bg-[#E1B98A] text-[#063C1E] font-bold' : 'bg-transparent text-[#E1B98A] border-[#E1B98A] hover:bg-[#E1B98A] hover:text-[#063C1E]']"
              @click="selectedGuests = n"
            >
              {{ n+1 }}
            </button>
          </div>
        </div>

        <!-- Destination -->
        <div class="mb-5">
          <p class="mb-2 font-semibold">2. Select destination</p>
          <div class="flex gap-2 justify-center flex-wrap">
            <button
              v-for="place in places"
              :key="place"
              :class="['px-4 py-2 rounded border transition', selectedPlace === place ? 'bg-[#E1B98A] text-[#063C1E] font-bold' : 'bg-transparent text-[#E1B98A] border-[#E1B98A] hover:bg-[#E1B98A] hover:text-[#063C1E]']"
              @click="selectedPlace = place"
            >
              {{ place }}
            </button>
          </div>
        </div>

        <!-- Dates -->
        <div class="mb-5">
          <p class="mb-2 font-semibold">3. Select travel dates</p>
          <div class="flex flex-col gap-4">
            <Datepicker
              v-model="startDate"
              placeholder="Start Date"
              :auto-apply="true"
              :enable-time-picker="false"
              input-class-name="dp-custom"
            />
            <Datepicker
              v-model="endDate"
              placeholder="End Date"
              :auto-apply="true"
              :enable-time-picker="false"
              input-class-name="dp-custom"
            />
          </div>
        </div>

        <!-- Inputs -->
        <div class="mb-4 flex flex-col gap-3">
          <input v-model="contactName" placeholder="Full name" class="form-input" />
          <input v-model="contactPhone" type="tel" placeholder="Phone number" class="form-input" />
        </div>

        <!-- Comment -->
        <div class="mb-6">
          <textarea v-model="userComment" rows="3" placeholder="Write a message..." class="form-input resize-none"></textarea>
        </div>

        <button @click="sendRequest" class="w-full bg-[#E1B98A] text-[#063C1E] font-bold py-2 rounded hover:bg-[#b89161] transition">
          Send Request
        </button>
        
      </div>
    </main>
  </div>
  
</template>

<style scoped>
.form-input {
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #E1B98A;
  background-color: #f9f9f6;
  color: #063C1E;
  width: 100%;
  outline: none;
}
@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}
.dp-custom {
  background-color: #f9f9f6 !important;
  color: #063C1E !important;
  border-radius: 10px !important;
  border: 1px solid #E1B98A !important;
  padding: 10px !important;
}
</style>
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

@keyframes fade-in {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 0.5s ease-out forwards;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

</style>
