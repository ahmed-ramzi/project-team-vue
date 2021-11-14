<template>
  <div>
    <section class="topSection">
      <navigation-bar />
      <img src="../assets/illlustrations/contact-us.png" alt="Contact Us" class="image" />
    </section>

    <section class="form"></section>
  </div>
</template>

<script>
import NavigationBar from "../src/components/NavigationBar.vue"

export default {
  components: {
    NavigationBar,
  },
  setup() {},
}
</script>
