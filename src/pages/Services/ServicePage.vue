<script setup lang="ts">
import { Contact, Container } from "../../components";
</script>

<template>
  <section class="h-[60vh] overflow-hidden relative">
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <source src="../../assets/img/bg-services.mp4" type="video/mp4" />
      Browser kamu tidak mendukung video.
    </video>
  </section>
  <section>
    <Container>
      <h1 class="text-center mt-24 mb-16 text-5xl font-bold font-syne">
        Our Services
      </h1>
      <div class="grid grid-cols-4 gap-6 mb-52">
        <div>
          <img class="w-full" src="../../assets/img/Server.avif" alt="" />
          <p class="text-center text-xl mt-8">Infrastructure Solution</p>
        </div>
        <div>
          <img class="w-full" src="../../assets/img/MusicApps.avif" alt="" />
          <p class="text-center text-xl mt-8">Digital Solution</p>
        </div>
        <div>
          <img
            class="w-full"
            src="../../assets/img/IndustrialWorker.avif"
            alt=""
          />
          <p class="text-center text-xl mt-8">Cross Industry Solution</p>
        </div>
        <div>
          <img class="w-full" src="../../assets/img/SharedOffice.avif" alt="" />
          <p class="text-center text-xl mt-8">IT Operation Service</p>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-32 my-16">
        <div class="space-y-7">
          <h1 class="text-5xl">Quality Services</h1>
          <p>Our local business offers top-notch services tailored to meet your needs. We take pride in delivering exceptional quality and customer satisfaction.</p>
        </div>
        <div class="space-y-7">
          <div class="">
            <div class="w-full h-[1px] bg-black"></div>
            <h1 class="text-2xl my-4">Affordable Rates</h1>
            <p class="text-balance">We believe in offering high-quality services at affordable rates. Your satisfaction is our priority, and we strive to deliver value for your money.</p>
          </div>
          <div class="">
            <div class="w-full h-[1px] bg-black"></div>
            <h1 class="text-2xl my-4">Customer Care</h1>
            <p class="text-balance">Customer care is at the heart of our business. We value your feedback and are always ready to assist you with any inquiries or concerns.</p>
          </div>
          <div class="">
            <div class="w-full h-[1px] bg-black"></div>
            <h1 class="text-2xl my-4">Community Focused</h1>
            <p class="text-balance">As a local business, we are deeply rooted in the community. We support local initiatives and aim to contribute positively to the neighborhoods we serve.</p>
          </div>
        </div>
      </div>
    </Container>
  </section>
  <Contact/>
</template>
