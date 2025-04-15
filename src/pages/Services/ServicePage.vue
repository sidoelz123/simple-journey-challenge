<script setup lang="ts">
import { Contact, Container } from "../../components";
</script>

<template>
  <section class="relative h-[50vh] md:h-[60vh] w-full overflow-hidden">
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute top-0 lg:top-1/2 left-1/2 w-auto min-w-full min-h-full max-w-none transform -translate-x-1/2 -translate-y-1/2 object-cover"
    >
      <source src="../../assets/img/bg-services.mp4" type="video/mp4" />
      Browser kamu tidak mendukung video.
    </video>
  </section>
  
  <section>
    <Container>
      <h1 class="text-center mt-24 mb-16 text-3xl md:text-4xl lg:text-5xl font-bold font-syne">
        Our Services
      </h1>
  
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-24 px-4 md:px-0">
        <div>
          <img class="w-full" src="../../assets/img/Server.avif" alt="" />
          <p class="text-center text-lg md:text-xl mt-6 md:mt-8">Infrastructure Solution</p>
        </div>
        <div>
          <img class="w-full" src="../../assets/img/MusicApps.avif" alt="" />
          <p class="text-center text-lg md:text-xl mt-6 md:mt-8">Digital Solution</p>
        </div>
        <div>
          <img class="w-full" src="../../assets/img/IndustrialWorker.avif" alt="" />
          <p class="text-center text-lg md:text-xl mt-6 md:mt-8">Cross Industry Solution</p>
        </div>
        <div>
          <img class="w-full" src="../../assets/img/SharedOffice.avif" alt="" />
          <p class="text-center text-lg md:text-xl mt-6 md:mt-8">IT Operation Service</p>
        </div>
      </div>
  
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 my-16 px-4 md:px-0">
        <div class="grid gap-6">
          <h1 class="text-3xl md:text-4xl lg:text-5xl">Quality Services</h1>
          <p class="text-base md:text-lg">
            Our local business offers top-notch services tailored to meet your needs.
            We take pride in delivering exceptional quality and customer satisfaction.
          </p>
        </div>
  
        <div class="grid gap-10 ">
          <div>
            <div class="w-full h-[1px] bg-black"></div>
            <h1 class="text-xl md:text-2xl my-4">Affordable Rates</h1>
            <p class="text-sm md:text-base text-balance">
              We believe in offering high-quality services at affordable rates. Your satisfaction is our priority.
            </p>
          </div>
          <div>
            <div class="w-full h-[1px] bg-black"></div>
            <h1 class="text-xl md:text-2xl my-4">Customer Care</h1>
            <p class="text-sm md:text-base text-balance">
              Customer care is at the heart of our business. We value your feedback and are always ready to assist you.
            </p>
          </div>
          <div>
            <div class="w-full h-[1px] bg-black"></div>
            <h1 class="text-xl md:text-2xl my-4">Community Focused</h1>
            <p class="text-sm md:text-base text-balance">
              As a local business, we are deeply rooted in the community. We support local initiatives and contribute positively.
            </p>
          </div>
        </div>
      </div>
    </Container>
  </section>  
  <Contact/>
</template>
