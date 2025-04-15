<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { defineProps, defineEmits } from 'vue'

const props = defineProps<{ isOpen: boolean }>()
const emit = defineEmits(['close'])

const closeModal = () => emit('close')
</script>

<template>
    <div v-if="isOpen"
        class="fixed right-0 w-full h-screen bg-black md:bg-black/60 backdrop-blur-sm z-50 flex flex-col p-10  lg:hidden">
        <div class="md:absolute md:w-3/5 top-0 right-0 bg-black h-full">
            <button @click="closeModal"
                class="absolute top-2 right-4 text-6xl text-gray-500 hover:text-red-500 div-transform duration-300 hover:rotate-90">
                &times;
            </button>
            <div class="text-white p-6 rounded-2xl text-center text-2xl grid gap-6">
                <RouterLink @click="closeModal" to="/" class="block hover:text-cyan-300">
                    Home
                </RouterLink>
                <RouterLink @click="closeModal" to="/services" class="block hover:text-cyan-300">
                    Services
                </RouterLink>
                <RouterLink @click="closeModal" to="/about" class="block hover:text-cyan-300">
                    About
                </RouterLink>
                <RouterLink @click="closeModal" :to="{ path: '/', hash: '#contact' }" class="block hover:text-cyan-300">
                    Contact Us
                </RouterLink>
            </div>
        </div>
    </div>
</template>
