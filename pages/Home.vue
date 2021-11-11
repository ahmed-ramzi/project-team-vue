<template>
  <section>
    <div class="topSection">
      <img src="../assets/illlustrations/green-circle.png" class="greenCircleImg" />
      <div>
        <div class="nav">
          <navigation-bar></navigation-bar>
        </div>
      </div>

      <div class="circleSection">
        <img src="../assets/illlustrations/three-circles.png" class="blueCircle" />
      </div>
    </div>
  </section>

  <section class="teamVue">
    <!-- TEAM VUE SECTION -->
    <div>
      <h2 class="">We Are</h2>
      <strong>
        <h1 class="">TEAM VUE</h1>
      </strong>
      <p class="spacer">
        Team Vue is dedicated to creating the best product and provide the best customer service in existence. We are a gathering of like-minded individuals who aim to change the world with our visionary and innovative techniques. 
      </p>
    </div>
  </section>

  <section class="chooseUs">
    <h3>Why Choose Us?</h3>
    <div>
      <ul>
        <li class="orange">
          <img src="../assets/illlustrations/idea.png" />
          <h4>Idea & Concept</h4>
          <p>is to build secure and seamless e-commerce solutions for your business emphasizing customer satisfaction.</p>
        </li>

        <li class="blue">
          <img src="../assets/illlustrations/marketing.png" />
          <h4>Market Research</h4>
          <p >We help businesses with tackling the biggest obstacle in any e-commerce business, which is market research and analysis </p>
        </li>

        <li class="green">
          <img src="../assets/illlustrations/support.png" />
          <h4>Support & Secure</h4>
          <p>are of utmost importance for our company as it helps us in gaining trust and loyalty with our customers.</p>
        </li>
      </ul>
    </div>
  </section>

  <section class="awesomeDevs">
    <img src="../assets/illlustrations/blue-circle.png" class="bottomCircle" />
    <div class="devsSpacer">
      <strong>
        <h3>
          We Are Awesome <br />
          Developer Team
        </h3>
      </strong>

      <strong>
        <p class="miniLorem">We are a creative team of developers who love developing and helping people and it is why we, like minded individuals decided to gather up and to make this our life mission. </p>
      </strong>

      <p>{{ lorem }}</p>
    </div>
  </section>

  <section class="rightsSection">
    <p class="rights">All Rights Received 2021</p>
  </section>
</template>

<script>
// import { ref } from "@vue/reactivity"
import NavigationBar from "../src/components/NavigationBar.vue"

export default {
  components: { NavigationBar },

  setup() {
    const miniLorem = "Losdsrem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
.topSection {
  @apply flex;
}

.greenCircleImg {
  @apply w-1/3 h-1/6;
}

.nav {
  @apply ml-36  md:ml-0 mt-4  md:mx-12 md:ml-12 2xl:ml-32;
}

.circleSection {
  @apply hidden md:block;
}

/* .blueCircle {
  @apply w-3/4;
} */
/* Team Vue Section */

.teamVue {
  @apply mx-2 mt-12 mb-32 lg:mt-0 md:mx-36;
}

.spacer {
  @apply mt-8;
}

/* Why Choose us section */
.chooseUs {
  @apply flex flex-col items-center space-y-12 py-32 mt-12 bg-yellow-100;
}

/* Awesome Devs section  */

.awesomeDevs {
  @apply flex items-center my-64 mx-12;
}

.bottomCircle {
  @apply hidden lg:block lg:w-3/4;
}

/* General Styling */
h1 {
  @apply text-9xl text-gray-600;
}

h2 {
  @apply text-7xl text-gray-600;
}

h3 {
  @apply text-5xl text-gray-600;
}

h4 {
  @apply text-3xl text-white;
}

.miniLorem {
  @apply text-gray-700 pt-4;
}
.devsSpacer {
  @apply space-y-12;
}

ul {
  @apply grid grid-cols-1 space-y-12 lg:grid-cols-3 lg:space-y-0 lg:space-x-12 mx-12 text-white items-center;
}

.orange {
  @apply flex flex-col items-center  text-center space-y-10  py-32 px-6 text-white bg-yellow-600 rounded-xl shadow-2xl;
}

.blue {
  @apply flex flex-col items-center  text-center space-y-10  py-32 px-6 text-white bg-blue-800 rounded-xl shadow-2xl;
}
.green {
  @apply flex flex-col items-center text-center  space-y-10  py-32 px-6 text-white bg-green-600 rounded-xl shadow-2xl;
}

.rightsSection {
  @apply text-center bg-black py-2;
}

.rights {
  @apply text-white;
}
</style>
