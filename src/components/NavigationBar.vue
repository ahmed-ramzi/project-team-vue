<template>
  <div class="main">
    <strong> <router-link class="routerText" to="/">HOME</router-link></strong>
    <strong> <router-link class="routerText" to="/profolio">PROFOLIO</router-link></strong>
    <strong> <router-link class="routerText" to="/about">ABOUT</router-link></strong>
    <strong> <router-link class="routerText" to="/contact">CONTACT</router-link></strong>
    <!-- <strong> <router-link class="routerText" to="/test">Test</router-link></strong> -->
  </div>
</template>

<style scoped>
.main {
  @apply flex justify-center text-center space-x-4 md:space-x-8 text-gray-700 whitespace-nowrap;
}
.routerText {
  @apply text-gray-600;
}
</style>
