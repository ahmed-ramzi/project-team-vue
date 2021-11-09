<template>
  <main>
    <h1 class="font-bold text-xl">This is the home page</h1>
    <router-link to="/about">About</router-link>
  </main>
</template>

<style scoped>
main {
  @apply text-center pt-8;
}
a {
  @apply text-blue-500 underline;
}
</style>
