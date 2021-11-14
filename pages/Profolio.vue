<template>
  <section class="topSection">
    <navigation-bar class="nav"></navigation-bar>
    <div class="yellowSection">
      <div class="makeDesign">
        <h2 class="title-black">We Make Your Design Service Faster</h2>
        <p>{{ lorem }}</p>
      </div>

      <div class="cardsDesktop">
        <ul class="desktopLeft">
          <li>
            <strong>
              <img src="../assets/illlustrations/ui.png" />
              <p>UI/UX Design</p>
            </strong>
            <p>
              Another highly critical goal that we strive to excel in is UI/UX design. The visual of the website is very important for our customers and therefore, it must be
              worked upon with great care.
            </p>
          </li>
          <li>
            <strong>
              <img src="../assets/illlustrations/creative.png" />
              <p>Creating Layout</p>
            </strong>
            <p>We aid customers in finding what makes their brand unique and which factors can influence their business development</p>
          </li>
        </ul>

        <ul class="desktopRight">
          <li class>
            <strong>
              <img src="../assets/illlustrations/branding.png" />
              <p>Branding</p>
            </strong>
            <p>
              Creativity is what makes the website pop out and so, communicating with customers and carefully understanding their ideas is key to provide them with a design that
              best fits them.
            </p>
          </li>
        </ul>
      </div>
    </div>

    <div class="bestDeveloper">
      <img src="../assets/illlustrations/chart-glow.png" />
      <div class="bestDevs">
        <strong>
          <h3>We Are The Best Developers In CZ & Deliver More Than Expected</h3>
        </strong>
        <p>{{ lorem }}</p>
      </div>
    </div>
  </section>
  <the-footer></the-footer>
</template>

<script>
import NavigationBar from "../src/components/NavigationBar.vue"
import TheFooter from "../src/components/TheFooter.vue"

export default {
  components: { NavigationBar, TheFooter },
  setup() {
    const lorem =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer. Lorem Ipsum is simply dummy text of the printing."
    return { lorem }
  },
}
</script>

<style scoped>
.topSection {
  @apply flex flex-col;
}

.nav {
  @apply pt-4 items-center md:flex md:justify-center bg-yellow-100;
}

.yellowSection {
  @apply flex flex-col items-center lg:flex-row lg:justify-center bg-yellow-100;
}

.makeDesign {
  @apply flex flex-col text-center space-y-12 lg:space-y-0  mx-4 sm:mx-24 lg:text-left mt-24 md:w-8/12 lg:w-3/12 lg:mt-0;
}

li {
  @apply rounded-xl shadow-2xl py-16 mx-12 md:mx-4 px-8 bg-white w-64;
}
.cardsDesktop {
  @apply flex flex-col md:flex-row py-16 items-center justify-center;
}
ul.desktopLeft {
  @apply flex flex-col space-y-6;
}

ul.desktopRight {
  @apply mt-6 md:mt-36;
}

strong > p {
  @apply text-black my-4;
}

strong > h3 {
  @apply text-black my-4;
}

h2.title-black {
  @apply text-black my-4;
}

div > p {
  @apply pb-4;
}

/* Best Developer Section */

.bestDeveloper {
  @apply flex flex-col lg:flex-row self-center space-y-12 py-24 bg-white lg:w-4/5 2xl:w-3/5;
}

.bestDevs {
  @apply mx-4 lg:pt-32;
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

p {
  @apply text-gray-600;
}
</style>
