<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Logo from './Logo.vue'

const isScrolled = ref(false)
const shouldHideNavbar = ref(false)
let lastScrollY = window.scrollY
const SCROLL_THRESHOLD = 500
const handleScroll = () => {
  const currentScrollY = window.scrollY
  isScrolled.value = currentScrollY > 10

  if (currentScrollY > SCROLL_THRESHOLD && currentScrollY > lastScrollY) {
    shouldHideNavbar.value = true // Hide navbar
  } else {
    shouldHideNavbar.value = false // Show navbar
  }

  lastScrollY = currentScrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
<template>
  <header
    :class="[
      'fixed w-full z-50 transition-all duration-300 text-white',
      isScrolled ? 'bg-black/40 backdrop-blur' : 'bg-transparent',
      shouldHideNavbar ? '-top-32' : 'top-0'
    ]"
  >
    <div class="px-4 sm:px-6 lg:px-10">
      <div class="flex justify-between items-center py-5">
        <!-- Logo -->
        <div class="flex items-center gap-2 text-3xl font-bold font-syne">
          <p>SimpleJourney</p>
          <Logo class="text-white w-5 h-5" />
        </div>

        <!-- Desktop Menu -->
        <nav
          class="hidden md:flex space-x-3 bg-white/50 backdrop-blur-md px-2 py-3 rounded-full text-xl text-black font-medium"
        >
          <RouterLink to="/" class="transition duration-300 hover:bg-white py-1.5 px-9 rounded-3xl">Home</RouterLink>
          <RouterLink to="/services" class="transition duration-300 hover:bg-white py-1.5 px-9 rounded-3xl">Services</RouterLink>
          <RouterLink to="/about" class="transition duration-300 hover:bg-white py-1.5 px-9 rounded-3xl">About</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#contact' }" class="transition duration-300 hover:bg-white py-1.5 px-9 rounded-3xl">Contact Us</RouterLink>
        </nav>

        <!-- Mobile Button -->
        <div class="md:hidden">
          <button class="text-white focus:outline-none w-20 h-20">
            <svg data-bbox="20 76.4 160 47.2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" data-type="shape">
              <g>
                <path fill="currentColor" d="M180 76.4v2.7H20v-2.7h160z"></path>
                <path fill="currentColor" d="M180 98.7v2.7H20v-2.7h160z"></path>
                <path fill="currentColor" d="M180 120.9v2.7H20v-2.7h160z"></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>