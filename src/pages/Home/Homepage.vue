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
            class="absolute z-10 h-[50vh] lg:w-[42.5vw] lg:h-screen bottom-0 bg-black/60 flex flex-col justify-end px-12 py-14 gap-4 text-white">
            <h1 class="text-4xl lg:text-6xl/19 font-syne">Your IT Transformation Partner</h1>
            <p class="text-sm lg:text-xl w-3/4">Empowering Businesses with Smart IT Solutions for a Digital Future</p>
            <RouterLink to="/services" class="bg-cyan-300 hover:bg-white px-8 py-3 mt-10 rounded-full w-fit text-black">
                <button>Learn more</button>
            </RouterLink>
        </div>
    </section>
    <section class="relative lg:h-screen">
        <img class="lg:absolute top-0 h-96 lg:w-full lg:h-full object-cover" src="../../assets/img/Server Room.avif"
            alt="server-room">
        <Container
            class="bg-neutral-600 md:bg-transparent lg:absolute text-white z-10 lg:w-1/2 right-0 py-10 lg:h-screen">
            <div class="lg:h-1/3 text-5xl font-fahkwang  flex items-center gap-6 lg:items-end py-8 lg:pl-14 lg:pb-10">
                <LogoComponent class="lg:hidden text-cyan-300 h-10 w-10" />
                <h1 class="">About us</h1>
            </div>
            <div class="lg:h-2/3 grid grid-cols-6 grid-rows-1">
                <div class="hidden lg:block col-span-1 pl-14 pt-2">
                    <LogoComponent class="text-cyan-300" />
                </div>
                <div class="text-xl col-span-5 lg:w-4/5">
                    <p class="mb-10">PT Simple Journey Indonesia is an IT consulting company and a provider of
                        Infrastructure
                        Solutions, Digital Solutions, Cross-Industry Solutions, and IT Operation Services.</p>
                    <p>We deliver IT solutions to businesses on a global scale by providing IT experts with flexible
                        arrangements to help our clients adapt to the digital world.</p>
                </div>
            </div>
        </Container>
    </section>
    <section class="bg-gradient-to-l from-black from-0% via-25% via-neutral-900 to-neutral-500 to-100 lg:p-20">
        <div class="text-white lg:text-center lg:w-[50vw] mx-auto pt-10 px-7 pb-20">
            <h1 class="text-4xl lg:text-5xl font-fahkwang mb-6">Explore Our Services</h1>
            <p class="text-sm lg:text-lg">Describe the service and how customers or clients can benefit from it. This is the
                place to add a short description with relevant details, like pricing, duration and how to book.</p>
        </div>
        <div class="relative lg:px-2">
            <div
                class="sticky top-0 lg:h-[70vh] flex flex-col-reverse lg:flex-row items-end justify-between px-7 lg:p-20 bg-white">
                <div class=" lg:w-[50vw] space-y-10">
                    <h1 class="text-5xl font-fahkwang ">Infrastructure Solution</h1>
                    <p class="text-lg pl-10 py-10 lg:w-3/4">Optimize your IT foundation with our cutting-edge infrastructure solutions.
                        From cloud computing and data centers to network security and system integration, we ensure a
                        scalable, secure, and high-performance IT environment tailored to your business needs.</p>
                </div>
                <div class="w-1/2 my-10"><img src="../../assets/img/ImageCard1.avif" alt=""></div>
            </div>
            <div
                class="sticky top-0 lg:h-[70vh] flex flex-col-reverse lg:flex-row items-end justify-between px-7 lg:p-20 bg-cyan-300">
                <div class=" lg:w-[50vw] space-y-10">
                    <h1 class="text-5xl font-fahkwang ">Digital Solution</h1>
                    <p class="text-lg pl-10 py-10 lg:w-3/4">Drive innovation and efficiency with our digital transformation services.
                        We provide custom software development, enterprise applications, automation, and AI-driven
                        solutions to enhance productivity and customer experience in the digital era.</p>
                </div>
                <div class="w-1/2 my-10"><img src="../../assets/img/ImageCard2.avif" alt=""></div>
            </div>
            <div
                class="sticky top-0 lg:h-[70vh] flex flex-col-reverse lg:flex-row items-end justify-between px-7 lg:p-20 bg-gray-200">
                <div class=" lg:w-[50vw] space-y-10">
                    <h1 class="text-5xl font-fahkwang ">Cross Industry Solution</h1>
                    <p class="text-lg pl-10 py-10 lg:w-3/4">We deliver tailored technology solutions across industries, including
                        finance, healthcare, retail, and manufacturing. Our expertise in industry-specific challenges
                        allows us to create scalable, future-ready digital ecosystems that drive business growth.</p>
                </div>
                <div class="w-1/2 my-10"><img src="../../assets/img/ImageCard3.avif" alt=""></div>
            </div>
            <div
                class="sticky top-0 lg:h-[70vh] flex flex-col-reverse lg:flex-row items-end justify-between px-7 lg:p-20 bg-peach">
                <div class=" lg:w-[50vw] space-y-10">
                    <h1 class="text-5xl font-fahkwang ">IT Operation Services</h1>
                    <p class="text-lg pl-10 py-10 lg:w-3/4">Ensure seamless IT operations with our end-to-end managed services. From IT
                        support, cloud management, and cybersecurity to proactive monitoring and disaster recovery, we
                        help you maintain high availability, security, and operational efficiency—without the hassle.
                    </p>
                </div>
                <div class="w-1/2 my-10"><img src="../../assets/img/ImageCard3.avif" alt=""></div>
            </div>
        </div>
    </section>
    <Contact />
</template>