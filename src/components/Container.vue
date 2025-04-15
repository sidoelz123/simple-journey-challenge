<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  customClass?: string
}>()
</script>

<template>
  <section
    :class="['mx-auto px-20', props.customClass]"
  >
    <slot />
  </section>
</template>
