<template>
  <div class="">
    <div class="flex justify-center">
      <img src="../assets/illlustrations/green-circle.png" class="w-1/3 h-1/6" />

      <div class="mt-8">
        <div class="md:mx-12 space-x-8 text-gray-700 whitespace-nowrap">
          <strong> <router-link to="/">HOME</router-link></strong>
          <strong> <router-link to="/profolio">PROFOLIO</router-link></strong>
          <strong> <router-link to="/about">ABOUT</router-link></strong>
          <strong> <router-link to="/contact">CONTACT US</router-link></strong>
        </div>

        <div class="flex justify-end">
          <img src="../assets/illlustrations/three-circles.png" class="w-1/2 md:w-3/4" />
        </div>
      </div>
    </div>

    <div class="teamVue">
      <!-- TEAM VUE SECTION -->
      <div class="mx-24">
        <h2 class="">We Are</h2>
        <strong>
          <h1 class="">TEAM VUE</h1>
        </strong>
        <p>
          {{ lorem }}
        </p>
      </div>
    </div>

    <!-- Why Choose Us Section -->

    <div class="flex flex-col items-center space-y-12 py-32 mt-12 bg-yellow-100">
      <h3>Why Choose Us?</h3>
      <div>
        <ul>
          <li class="orange">
            <h4>Idea & Concept</h4>
            <p v-html="miniLorem"></p>
          </li>

          <li class="blue">
            <h4>Market Research</h4>
            <p v-html="miniLorem"></p>
          </li>

          <li class="green">
            <h4>Support & Secure</h4>
            <p v-html="miniLorem"></p>
          </li>
        </ul>
      </div>
    </div>

    <div class="flex items-center my-64 mx-12">
      <img src="../assets/illlustrations/blue-circle.png" class="hidden lg:block lg:w-3/4" />
      <div class="space-y-12">
        <strong>
          <h3>
            We are awesome <br />
            developer team
          </h3>
        </strong>

        <strong>
          <p class="text-gray-700 pt-4">{{ miniLorem }}</p>
        </strong>

        <p>{{ lorem }}</p>
      </div>
    </div>

    <!-- Footer -->
    <div class="text-center bg-black py-2">
      <p class="text-white">All Rights Received 2021</p>
    </div>
  </div>
</template>

<script>
// import { ref } from "@vue/reactivity"
export default {
  setup() {
    const miniLorem =
      "Losdsrem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    const lorem =
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim idest laborum."
    return {
      miniLorem,
      lorem,
    }
  },
}
</script>

<style scoped>
h1 {
  @apply text-9xl text-gray-700;
}

h2 {
  @apply text-7xl text-gray-700;
}

h3 {
  @apply text-5xl text-gray-700;
}

h4 {
  @apply text-3xl text-white;
}

ul {
  @apply grid grid-cols-1 space-y-12 lg:grid-cols-3 lg:space-y-0 lg:space-x-12 mx-12 text-white items-center;
}

.orange {
  @apply flex flex-col items-center  text-center space-y-10  py-32 px-6 text-white bg-yellow-600 rounded-xl;
}

.blue {
  @apply flex flex-col items-center  text-center space-y-10  py-32 px-6 text-white bg-blue-800 rounded-xl;
}
.green {
  @apply flex flex-col items-center text-center  space-y-10  py-32 px-6 text-white bg-green-600 rounded-xl;
}

.teamVue {
  @apply mx-24 items-center flex flex-col justify-center space-y-32;
}
</style>
