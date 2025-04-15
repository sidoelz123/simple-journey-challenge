<script setup lang="ts">
import Logo from './Logo.vue';

</script>

<template>
    <footer class="h-96 bg-cyan-300 py-16 px-20">
        <div class="grid grid-cols-2 grid-rows-1 gap-6 items-start border-b-2 pb-5">
            <div class="flex gap-2 items-center">
                <h1 class="font-syne font-semibold text-4xl">SimpleJourney</h1>
                <Logo class="w-5 h-5" />
            </div>
            <!-- <p class="border col-span-2 col-start-1 row-start-2"></p> -->
            <div class="col-start-2 row-start-1 flex justify-end">
                <div class="w-48">
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
            <div class="grid grid-cols-5">
                <a href="https://linkedin.com" target="_blank">
                    <p>Linkedin</p>
                </a>
                <a href="https://facebook.com" target="_blank">
                    <p>Facebook</p>
                </a>
                <a href="https://instagram.com" target="_blank">
                    <p>Instagram</p>
                </a>
                <a href="https://www.wix.com" target="_blank">
                    <p class="text-end">Accessibility statement</p>
                </a>
                <a href="https://www.wix.com" target="_blank">
                    <p class="text-end">Privacy policy</p>
                </a>
            </div>
            <p class="mt-10 text-end">© 2035 by Viento. Built on <a href="https://www.wix.com/studio"
                    class="underline">Wix Studio</a></p>
        </div>
    </footer>
</template>