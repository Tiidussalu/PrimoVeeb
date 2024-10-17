<template>
    <section class="max-w-xl mx-auto p-4 rounded-lg">
      <h2 class="text-3xl font-bold mb-4 text-center">Contact Us</h2>
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            v-model="name"
            required
            class="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
  
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            class="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>
  
        <div class="mb-4">
          <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            v-model="message"
            required
            rows="4"
            class="mt-1 block w-full border border-gray-300 rounded-md p-2"
          ></textarea>
        </div>
  
        <button
          type="submit"
          class="w-full bg-gray-800 text-white p-2 rounded-md hover:bg-gray-700"
        >
          Send Message
        </button>
      </form>
    </section>
  </template>
  
  <script>
  export default {
    name: "Contact",
    data() {
      return {
        name: '',
        email: '',
        message: ''
      };
    },
    methods: {
      handleSubmit() {
        // Handle form submission (e.g., send the data to an API)
        console.log("Name:", this.name);
        console.log("Email:", this.email);
        console.log("Message:", this.message);
  
        // Clear the form fields after submission
        this.name = '';
        this.email = '';
        this.message = '';
  
        alert("Your message has been sent!");
      }
    }
  };
  </script>
  
  <style scoped>
  /* Optional: You can add styles specific to this component here */
  </style>
  