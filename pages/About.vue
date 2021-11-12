<template>
  <div class="topSection">
    <section class="greenSection">
      <navigation-bar class="nav"></navigation-bar>
      <div class="aboutUs">
        <h2>Meet</h2>
        <h2>The</h2>
        <strong>
          <h1>Team</h1>
        </strong>
      </div>
    </section>

    <section class="middleSection">
      <div class="portfolio">
        <div class="imgSize">
          <img src="../assets/portraits/ramzi.jpeg" />
        </div>

        <div class="detail">
          <div class="detailIntro">
            <strong>
              <h4 class="mobile">Ramzi</h4>
            </strong>
            <strong>
              <h2 class="desktop">Ramzi</h2>
            </strong>
            <p class="orange">Frontend Developer</p>
          </div>
          <p>{{ miniLorem }}</p>
        </div>
      </div>

      <div class="portfolio">
        <div class="imgSize">
          <img src="../assets/portraits/harry.JPG" />
        </div>

        <div class="detail">
          <div class="detailIntro">
            <strong>
              <h4 class="mobile">Harry</h4>
            </strong>
            <strong>
              <h2 class="desktop">Harry</h2>
            </strong>
            <p class="green">Project Manager</p>
          </div>
          <p>{{ miniLorem }}</p>
        </div>
      </div>

      <div class="portfolio">
        <div class="imgSize">
          <img src="../assets/portraits/mazo.JPG" />
        </div>

        <div class="detail">
          <div class="detailIntro">
            <strong>
              <h4 class="mobile">Mazo</h4>
            </strong>
            <strong>
              <h2 class="desktop">Mazo</h2>
            </strong>
            <p class="red">Backend Developer</p>
          </div>
          <p>{{ miniLorem }}</p>
        </div>
      </div>

      <div class="portfolio">
        <div class="imgSize">
          <img src="../assets/portraits/azim.JPG" />
        </div>

        <div class="detail">
          <div class="detailIntro">
            <strong>
              <h4 class="mobile">Azim</h4>
            </strong>
            <strong>
              <h2 class="desktop">Azime</h2>
            </strong>
            <p class="blue">Design Director</p>
          </div>
          <p>{{ miniLorem }}</p>
        </div>
      </div>

      <div class="portfolio">
        <div class="imgSize">
          <img src="" />
        </div>

        <div class="detail">
          <div class="detailIntro">
            <strong>
              <h4 class="mobile">Tohir</h4>
            </strong>
            <strong>
              <h2 class="desktop">Tohir</h2>
            </strong>
            <p class="pink">Content Manager</p>
          </div>
          <p>{{ miniLorem }}</p>
        </div>
      </div>
    </section>

    <the-footer></the-footer>
  </div>
</template>

<script>
import NavigationBar from "../src/components/NavigationBar.vue"
import TheFooter from "../src/components/TheFooter.vue"
export default {
  components: {
    NavigationBar,
    TheFooter,
  },
  setup() {
    const miniLorem =
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer."

    const teams = [
      { name: "Ramzi", title: "Frontend Developer", bio: "", img: "../assets/portraits/ramzi.jpeg", color: "orange" },
      { name: "Harry", title: "Project Manager", bio: "", img: "../assets/portraits/harry.JPG", color: "green" },
      { name: "Mazo", title: "Backend Developer", bio: "", img: "../assets/portraits/mazo.JPG", color: "red" },
      { name: "Azim", title: "Design Director", bio: "", img: "../assets/portraits/azim.JPG", color: "blue" },
      { name: "Tohir", title: "Content Manager", bio: "", img: "", color: "pink" },
    ]
    return { miniLorem }
  },
}
</script>

<style scoped>
.topSection {
  @apply flex flex-col;
}

.greenSection {
  @apply bg-green-100 space-y-24 pb-24;
}

.aboutUs {
  @apply text-center space-y-4;
}

.nav {
  @apply pt-4 items-center md:flex md:justify-center;
}

.middleSection {
  @apply py-32 md:grid md:grid-cols-2 lg:grid-cols-3;
}
.portfolio {
  @apply mx-4 space-y-2  py-12;
}

.imgSize {
  @apply relative h-0 pb-2/3 sm:pt-1/3 lg:pt-2/3;
}

img {
  @apply absolute inset-0 w-full h-full object-cover shadow-lg rounded-xl border;
}

.detail {
  @apply space-y-4;
}

.mobile {
  @apply md:hidden;
}
.desktop {
  @apply hidden md:block;
}
.orange {
  @apply text-yellow-500;
}

.blue {
  @apply text-blue-500;
}
.green {
  @apply text-green-500;
}
.red {
  @apply text-red-500;
}
.pink {
  @apply text-pink-500;
}
.orange {
  @apply text-yellow-500;
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
  @apply text-3xl text-gray-600;
}

p {
  @apply text-gray-600;
}
</style>
