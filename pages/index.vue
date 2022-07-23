<template>
  <main class="main-wrapper__section section">
    <div class="container">
      <div class="section__inner">
        <h2 class="section__title">Александр Павлік</h2>
        <h3 class="section__subTitle">Адвокат | засновник компанії</h3>
        <div class="section__text">Ваш вибір, мій пріоритет!</div>
        <button
          class="section__btn btn primary d-none-768"
          @click="contactPopupOpen()"
        >
          Консультація
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
  watch: {
    $route(to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    },
  },
  methods: {
    ...mapMutations({
      contactPopupOpen: 'contactPopupOpen',
    }),
  }
}
</script>
