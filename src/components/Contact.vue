<script setup lang="ts">
import Container from './Container.vue';
import BaseInput from './BaseInput.vue';
import { useForm } from 'vee-validate'
import * as yup from 'yup'

const schema = yup.object({
  firstname: yup.string().required('Enter a first name.'),
  lastname: yup.string().required('Enter a last name.'),
  email: yup.string().required('Enter an email address').matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      'Enter an email address like example@mysite.com'
    ),
  phone: yup.string(),
  company: yup.string(),
  location: yup.string(),
  feedback: yup.string()

})

const { handleSubmit, values: form } = useForm({
  validationSchema: schema,
})

const onSubmit = handleSubmit((values: any) => {
  console.log('Submitted:', values)
})
</script>

<template>
  <section id="contact" class="lg:h-screen bg-gradient-to-br from-neutral-600 from-0% to-neutral-400 to-100%">
    <Container class="py-20">
      <div class="lg:w-3/5 text-white pb-10">
        <h1 class="text-3xl lg:text-5xl/16 font-fahkwang">Ready to power your future with sustainable energy?</h1>
        <p class="text-sm lg:text-lg mt-8">Fill out the form below and let Viento's experts help</p>
      </div>
      <form @submit.prevent="onSubmit" class="grid grid-cols-3 grid-rows-4 text-white text-sm gap-2 lg:gap-8 px-10 items-end">
        <BaseInput v-model="form.firstname" name="firstname" label="First Name" required />
        <BaseInput v-model="form.lastname" name="lastname" label="Last Name" required />
        <BaseInput v-model="form.email" name="email" label="Email" required />
        <BaseInput v-model="form.phone" name="phone" label="Phone" type="tel" />
        <BaseInput v-model="form.company" name="company" label="Company / Organization name" />
        <BaseInput v-model="form.location" name="location" label="Location" />
        <div class="col-span-3 flex flex-col gap-2">
          <BaseInput v-model="form.feedback" name="feedback" label="How can we help?" />
        </div>
        <button type="submit"
          class="col-start-2 row-start-4 bg-cyan-300 h-fit hover:bg-black py-3 w-full rounded-full text-black hover:text-white transition duration-300">
          Contact Us
        </button>
      </form>
    </Container>
  </section>
</template>