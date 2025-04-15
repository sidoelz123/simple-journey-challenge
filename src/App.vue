<script setup lang="ts">
import { RouterView } from 'vue-router';
import {  Footer, Navbar } from './components';
import 'intl-tel-input/build/css/intlTelInput.css'

</script>

<template>
  <main class="custom-cursor font-proxima font-normal text-base scroll-smooth">
    <Navbar />
    <RouterView/>
    <Footer />
  </main>
</template>
