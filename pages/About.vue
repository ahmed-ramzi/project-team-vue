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
      <div class="portfolio" v-for="team in teams" :key="team.id">
        <div class="imgSize">
          <img :src="team.img" :alt="team.name" />
        </div>

        <div class="detail">
          <div class="detailIntro">
            <strong>
              <h4 class="mobile">{{ team.name }}</h4>
            </strong>
            <strong>
              <h2 class="desktop">{{ team.name }}</h2>
            </strong>
            <p :class="team.color">{{ team.title }}</p>
          </div>
          <p>{{ team.bio }}</p>
        </div>
      </div>
    </section>

    <the-footer></the-footer>
  </div>
</template>

<script>
import NavigationBar from "../src/components/NavigationBar.vue"
import TheFooter from "../src/components/TheFooter.vue"
import ramzi from "../assets/portraits/ramzi.jpeg"
import harry from "../assets/portraits/harry.png"
import mazo from "../assets/portraits/mazo.png"
import azim from "../assets/portraits/azim.png"
import tohir from "../assets/portraits/tohir.jpeg"

export default {
  components: {
    NavigationBar,
    TheFooter,
  },
  setup() {
    const teams = [
      {
        id: "ramzi",
        name: "Ramzi",
        title: "Frontend Developer",
        bio: "I used to be a backend developer with multiple language experince. Now I do full time Frontend development with Vue framework and also I build automation test for quality assurance.",
        img: ramzi,
        color: "orange",
      },
      {
        id: "harry",
        name: "Harry",
        title: "Project Manager",
        bio: "Pursuing my career in Informatics with a strong background of management in F&B industry. Intending to sharpen and strengthen my project management skills because of extensive in my current company. Honing my experience in security related field as ongoing projects are about Infosec and it helps me in flexing of related tasks.",
        img: harry,
        color: "green",
      },
      {
        id: "mazo",
        name: "Mazo",
        title: "Backend Developer",
        bio: "I completed my bachelors  in CZU and now doing my masters in the same university. Interested in data analysis and backened development",
        img: mazo,
        color: "red",
      },
      {
        id: "azim",
        name: "Azim",
        title: "Design Director",
        bio: "Interested in business intelligence filed, data warehousing, ETL and databases. Study at CULS is fun and a guide to vast area of correlated subjects such as economics, security, law, management and lastly informatics. Enjoy learning a drop from each which might be useful to enhance my general knowledge about so many things.",
        img: azim,
        color: "blue",
      },
      {
        id: "tohir",
        name: "Tohir",
        title: "Content Manager",
        bio: "I am a CCNA compatible EUC Technician of enterprise Network Infrastructure with more than 8 years experience. Troubleshooting, repair, and preventative maintenance of end user computing equipment and Network equipment at corporate locations. I work on assignments of a diverse scope where analysis of data and hardware requires evaluation of identifiable factors. I have exercised judgment with supervision within the generally defined practices and policies in selecting methods and techniques for obtaining solutions and acts as a liaison between customers, departments, and within the organization to lead problem resolution.",
        img: tohir,
        color: "pink",
      },
    ]
    return { teams }
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
