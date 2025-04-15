<script setup lang="ts">
import Logo from './Logo.vue';

</script>

<template>
    <footer class=" bg-cyan-300 px-8 py-10 lg:py-16 lg:px-20">
        <div class="grid grid-cols-1 gap-6 items-start pb-5 md:grid-cols-2 md:grid-rows-1 md:border-b-2">
            <div class="flex gap-2 items-center justify-start pb-5 border-b-2 md:border-0">
                <h1 class="font-syne font-semibold text-4xl">SimpleJourney</h1>
                <Logo class="w-5 h-5" />
            </div>
            <div class="flex md:justify-end text-sm items-start gap-4 md:text-right">
                <div class="w-1/2 md:w-48">
                    <p>Office 8</p>
                    <p>Jl. Senopati No. 8B Level 18A Senayan, Kebayoran Baru, Jakarta Selatan 12190</p>
                </div>
                <div class="text-end w-1/2">
                    <p>info@mysite.com</p>
                    <p>Tel: 123-456-7890</p>
                </div>
            </div>
        </div>
        <div class="mt-7">
            <div class="grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-y-3 gap-x-6 text-sm text-center md:text-left">
                <div class="grid grid-cols-2 md:col-start-2 md:row-start-1">
                    <a href="https://www.wix.com" target="_blank">
                        <p class="text-start md:text-end">Accessibility statement</p>
                    </a>
                    <a href="https://www.wix.com" target="_blank">
                        <p class="text-end">Privacy policy</p>
                    </a>
                </div>
                <div class="grid grid-cols-3 md:col-start-1 md:row-start-1">
                    <a href="https://linkedin.com" target="_blank">
                        <p class="text-start">Linkedin</p>
                    </a>
                    <a href="https://facebook.com" target="_blank">
                        <p>Facebook</p>
                    </a>
                    <a href="https://instagram.com" target="_blank">
                        <p class="text-end">Instagram</p>
                    </a>
                </div>
            </div>

            <p class="mt-10 text-start md:text-end text-sm">
                © 2035 by Viento. Built on
                <a href="https://www.wix.com/studio" class="underline">Wix Studio</a>
            </p>
        </div>

    </footer>
</template>