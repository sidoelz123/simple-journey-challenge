<script lang="ts" setup>
import { useField } from 'vee-validate'
import { onMounted, ref, toRef, watch } from 'vue'
import intlTelInput from 'intl-tel-input'
import type { Plugin } from 'intl-tel-input'

const props = defineProps<{
  modelValue: string
  name: string
  label: string
  type?: string
  placeholder?: string
  required?: boolean
}>()

const emit = defineEmits(['update:modelValue'])

const name = toRef(props, 'name')
const { value, errorMessage, handleChange, meta } = useField(name)

const inputRef = ref<HTMLInputElement | null>(null)
let iti: Plugin | null = null

onMounted(() => {
  if (props.type === 'tel' && inputRef.value) {
    iti = intlTelInput(inputRef.value, {
      initialCountry: 'id',
      preferredCountries: ['id', 'us', 'sg'],
      utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js',
    })

    inputRef.value.addEventListener('input', () => {
      if (iti) emit('update:modelValue', iti.getNumber())
    })
  }
})

watch(value, (val) => {
  if (props.type !== 'tel') {
    emit('update:modelValue', val)
  }
})

watch(
  () => props.modelValue,
  (val) => {
    if (props.type !== 'tel') value.value = val
    else if (iti && inputRef.value && val !== iti.getNumber()) iti.setNumber(val)
  }
)
</script>

<template>
  <div class="flex flex-col gap-1">
    <label :for="name" class="text-sm font-medium text-white">
      {{ label }} <span v-if="required" class="text-white">*</span>
    </label>
    <input
      ref="inputRef"
      :id="name"
      :type="type || 'text'"
      :placeholder="placeholder"
      :value="modelValue"
      class="h-9 px-3 bg-transparent border-b border-white text-white w-full placeholder:text-gray-300 outline-none focus:bg-neutral-500/50"
      @input="handleChange"
    />
    <p v-if="meta.touched && errorMessage" class="text-sm text-white">🛈 {{ errorMessage }}</p>
  </div>
</template>
