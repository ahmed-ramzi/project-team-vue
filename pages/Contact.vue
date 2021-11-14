<template>
  <div>
    <section class="topSection">
      <navigation-bar />

      <img src="../assets/illlustrations/contact-us.png" alt="Contact Us" class="image" />

      <div class="contact">
        <h4>Do Not Hesistate To</h4>
        <h2>Contact Us</h2>
        <h4>Anytime</h4>
      </div>
    </section>

    <section class="form" v-if="!messageSent">
      <strong
        ><h4>Feel Free to<br />Fill The Form</h4></strong
      >
      <Form @submit="sendMessage" :validation-schema="schema">
        <div class="field">
          <strong>
            <label>First Name</label>
          </strong>
          <Field name="Name" placeholder=" John Martin " class="fieldStyle" />
          <ErrorMessage name="Name" class="error" />
        </div>

        <div class="field">
          <strong>
            <label>Email</label>
          </strong>
          <Field name="Email" placeholder=" email@example.com " class="fieldStyle" />
          <ErrorMessage name="Email" class="error" />
        </div>

        <div class="field">
          <strong>
            <label>Message</label>
          </strong>
          <Field name="Message" placeholder="  Tell how can we help you... " class="fieldMessage" />
          <ErrorMessage name="Message" class="error" />
        </div>

        <button>Submit</button>
      </Form>
    </section>

    <section class="form" v-else>
      <div class="messageSent">
        <div>
          <strong><h4>Your Message Has Been Sent</h4></strong>
          <p>We will respond to you within 24 hours</p>
        </div>

        <img src="../assets/illlustrations/messageSent.png" alt="Message Sent" class="image" />
      </div>
    </section>

    <the-footer></the-footer>
  </div>
</template>

<script>
import NavigationBar from "../src/components/NavigationBar.vue"
import TheFooter from "../src/components/TheFooter.vue"
import { Form, Field, ErrorMessage } from "vee-validate"
import * as yup from "yup"
import { ref } from "@vue/reactivity"

export default {
  components: {
    NavigationBar,
    TheFooter,
    Form,
    Field,
    ErrorMessage,
  },
  setup() {
    const messageSent = ref(false)
    const sendMessage = (e) => {
      messageSent.value = !messageSent.value
    }
    const schema = yup.object({
      Name: yup.string().required(),
      Message: yup.string().required(),
      Email: yup.string().required().email(),
    })
    return {
      schema,
      messageSent,
      sendMessage,
    }
  },
}
</script>

<style scoped>
.topSection {
  @apply space-y-8 pb-16 flex flex-col items-center;
}
.contact {
  @apply text-center;
}

img {
  @apply sm:w-1/2;
}

Form {
  @apply space-y-8 flex flex-col items-center;
}

button {
  @apply bg-yellow-500 text-white px-4 shadow-inner rounded-full border border-white;
}
.form {
  @apply bg-pink-600 flex py-12 flex-col items-center;
}

.messageSent {
  @apply flex flex-col items-center;
}
.field {
  @apply flex flex-col text-center;
}
label {
  @apply text-white;
}
.fieldStyle {
  @apply rounded-lg bg-gray-50 text-center ring-inset shadow-lg w-80 mx-4;
}

.fieldMessage {
  @apply rounded-lg bg-gray-50 text-center ring-inset shadow-lg w-80 py-3 mx-4;
}
.error {
  @apply text-yellow-200;
}
/* General Styling */
h1 {
  @apply text-9xl text-gray-600;
}
h2 {
  @apply text-7xl text-gray-600 text-pink-600;
}
h4 {
  @apply text-3xl text-gray-600;
}
strong > h4 {
  @apply text-3xl text-white text-center pb-8;
}
p {
  @apply text-white text-center;
}
</style>
