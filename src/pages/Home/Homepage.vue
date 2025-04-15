<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { Contact, Container, LogoComponent } from '../../components';
import { nextTick, onMounted } from 'vue';

onMounted(() => {
  nextTick(() => {
    const el = document.querySelector(location.hash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

</script>

<template>
    <section class="h-screen overflow-hidden relative">
        <video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover">
            <source src="../../assets/img/bg-home.mp4" type="video/mp4" />
            Browser kamu tidak mendukung video.
        </video>
        <div
            class="absolute z-10 w-[42.5vw] h-screen bg-black/70 flex flex-col justify-end px-12 py-14 gap-4 text-white">
            <h1 class="text-6xl/19 font-syne">Your IT Transformation Partner</h1>
            <p class="text-xl w-3/4">Empowering Businesses with Smart IT Solutions for a Digital Future</p>
            <RouterLink to="/services" class="bg-cyan-300 hover:bg-white px-8 py-3 mt-10 rounded-full w-fit text-black">
                <button>Learn more</button>
            </RouterLink>
        </div>
    </section>
    <section class="relative h-screen">
        <img class="absolute top-0 w-full h-full object-cover" src="../../assets/img/Server Room.avif"
            alt="server-room">
        <div class="absolute text-white z-10 w-1/2 right-0 h-screen ">
            <h1 class="h-1/3 text-5xl font-fahkwang  flex items-end pl-14 pb-10">About us</h1>
            <div class="h-2/3 grid grid-cols-6 grid-rows-1">
                <div class=" col-span-1 pl-14 pt-2">
                    <LogoComponent class="text-cyan-300" />
                </div>
                <div class="text-xl col-span-5 w-4/5 space-y-10">
                    <p>PT Simple Journey Indonesia is an IT consulting company and a provider of Infrastructure
                        Solutions, Digital Solutions, Cross-Industry Solutions, and IT Operation Services.</p>
                    <p>We deliver IT solutions to businesses on a global scale by providing IT experts with flexible
                        arrangements to help our clients adapt to the digital world.</p>
                </div>
            </div>
        </div>
    </section>
    <section class=" bg-gradient-to-l from-black from-0% via-25% via-neutral-900 to-neutral-500 to-100 py-20">
        <Container>
            <div class="text-white text-center w-[50vw] mx-auto pt-10 pb-20 space-y-6">
                <h1 class="text-5xl font-fahkwang">Explore Our Services</h1>
                <p class="text-lg">Describe the service and how customers or clients can benefit from it. This is the
                    place to add a short description with relevant details, like pricing, duration and how to book.</p>
            </div>
            <div class="relative px-2">
                <div class="sticky top-0 h-[70vh] flex items-end justify-between p-20 bg-white">
                    <div class=" w-[50vw] space-y-10">
                        <h1 class="text-5xl font-fahkwang">Infrastructure Solution</h1>
                        <p class="text-lg w-3/4">Optimize your IT foundation with our cutting-edge infrastructure solutions. From cloud computing and data centers to network security and system integration, we ensure a scalable, secure, and high-performance IT environment tailored to your business needs.</p>
                    </div>
                    <div class=""><img src="../../assets/img/ImageCard1.avif" alt=""></div>
                </div>
                <div class="sticky top-0 h-[70vh] flex items-end justify-between p-20 bg-cyan-300">
                    <div class=" w-[50vw] space-y-10">
                        <h1 class="text-5xl font-fahkwang">Digital Solution</h1>
                        <p class="text-lg w-3/4">Drive innovation and efficiency with our digital transformation services. We provide custom software development, enterprise applications, automation, and AI-driven solutions to enhance productivity and customer experience in the digital era.</p>
                    </div>
                    <div class=""><img src="../../assets/img/ImageCard2.avif" alt=""></div>
                </div>
                <div class="sticky top-0 h-[70vh] flex items-end justify-between p-20 bg-gray-200">
                    <div class=" w-[50vw] space-y-10">
                        <h1 class="text-5xl font-fahkwang">Cross Industry Solution</h1>
                        <p class="text-lg w-3/4">We deliver tailored technology solutions across industries, including finance, healthcare, retail, and manufacturing. Our expertise in industry-specific challenges allows us to create scalable, future-ready digital ecosystems that drive business growth.</p>
                    </div>
                    <div class=""><img src="../../assets/img/ImageCard3.avif" alt=""></div>
                </div>
                <div class="sticky top-0 h-[70vh] flex items-end justify-between p-20 bg-peach">
                    <div class=" w-[50vw] space-y-10">
                        <h1 class="text-5xl font-fahkwang">IT Operation Services</h1>
                        <p class="text-lg w-3/4">Ensure seamless IT operations with our end-to-end managed services. From IT support, cloud management, and cybersecurity to proactive monitoring and disaster recovery, we help you maintain high availability, security, and operational efficiency—without the hassle.</p>
                    </div>
                    <div class=""><img src="../../assets/img/ImageCard3.avif" alt=""></div>
                </div>
            </div>
        </Container>
    </section>
    <Contact/>
</template>