<template>
  <div class="bg-gray-100 min-h-screen flex">
    <aside class="w-64 bg-gray-800 text-white p-4 flex flex-col items-center"> <!-- Added items-center -->
      <h1 class="text-3xl font-bold mb-6 text-center">Burger Primo</h1>
      <img class="w-36 mb-4" src="/src/img/logo.png" alt="Burger Primo Logo" /> <!-- Added mb-4 for spacing -->
      <nav class="flex flex-col space-y-2 w-full"> <!-- w-full for nav -->
        <router-link to="/" class="hover:bg-gray-700 p-2 rounded">Home</router-link>
        <router-link to="/Menu" class="hover:bg-gray-700 p-2 rounded">Menu</router-link>
        <router-link to="/Contact" class="hover:bg-gray-700 p-2 rounded">Contact</router-link>
        <router-link to="/About" class="hover:bg-gray-700 p-2 rounded">About Us</router-link>
        <router-link to="/Map" class="hover:bg-gray-700 p-2 rounded">Map</router-link>
      </nav>
    </aside>

    <main class="flex-grow p-6">
      <router-view />
    </main>
  </div>
</template>

  
  <script>
  export default {
    name: "App",
  };
  </script>
  
  <style scoped>
  /* Ensuring that the footer spans the entire width */
  footer {
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
  }
  </style>
  