<template>
  <main class="main-wrapper__section section">
    <div class="container">
      <div class="section__inner">
        <h2 class="section__title">Александр Павлік</h2>
        <h3 class="section__subTitle">Адвокат | засновник компанії</h3>
        <div class="section__text">Ваш вибір мій пріоритет!</div>
        <button
          class="section__btn btn primary d-none-768"
          @click="contactPopupOpen()"
        >
          Book a Call
        </button>
      </div>
    </div>
    <img
      src="~/assets/img/intro_img.jpeg"
      alt="img"
      class="main-wrapper__img"
    />
    <button
      type="button"
      class="section__btn btn primary d-block-768"
      @click="contactPopupOpen()"
    >
      Book a Call
    </button>
  </main>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: "IndexPage",
  data() {
    return {
      success: false,
        name: "Stas2",
        email: "stas@email.com2",
        description: "bla bla bla 2",
        phone: '4545252fs5', 
      }
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    },
  },
  mounted() {
    // this.fetchSomething()
    // this.postData()
      
    },
  methods: {
    ...mapMutations({
      contactPopupOpen: 'contactPopupOpen',
    }),
    async fetchSomething() {
      const data = await this.$axios.$get(`${this.$store.state.apiUrl}/visitor-messages`)
      console.log(data)
    },
    async postData() {
      const data = {
        name: this.name,
        email: this.email,
        description: this.description,
        phone: this.phone
      }
      try {
            // send a POST request to create a new entry
            const msgs = await fetch(`${this.$store.state.apiUrl}/visitor-messages`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({data})
            })
        if (msgs) {
          this.success = true
          console.log(msgs)
        } 
          } catch (error) {
            console.log(error);
          }

      // this.$axios.$post(`${this.$store.state.apiUrl}/clients`, JSON.stringify(postData) ).then(function (response) {
      //   console.log(response);
      // })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
    }
  }
}
</script>
