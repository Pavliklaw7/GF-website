<template>
  <header class="main-wrapper__header header">
    <div class="container">
      <div class="header__inner">
        <nuxt-link to="/" class="header__logo"
          >Gapter & Franz <span>Law Firm</span></nuxt-link
        >
        <nav class="header__nav nav" :class="{ open: isMenuOpen }">
          <ul class="nav__list" :class="$route.name != '' ? 'primary' : ''">
            <li class="nav__item">
              <nuxt-link to="/services" class="nav__link">Services</nuxt-link>
            </li>
            <li class="nav__item">
              <nuxt-link to="/price" class="nav__link">Pricing</nuxt-link>
            </li>
            <li class="nav__item">
              <nuxt-link to="blog" class="nav__link">Blog</nuxt-link>
            </li>
            <li class="nav__item">
              <a href="tel:+380674339373" class="nav__link btn secondary"
                >Call Now</a
              >
            </li>
          </ul>
        </nav>
        <div
          class="menu-toggle d-block-900"
          :class="{ open: isMenuOpen }"
          @click="menuToggle()"
        >
          <div class="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="cross">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  mounted() {
    console.log((this.$route.name !== ''))
  },
  computed: {
    ...mapGetters({
      isMenuOpen: 'isMenuOpen'
    }),
  },
  methods: {
    ...mapMutations({
      menuToggle: 'menuToggle'
    }),
    isLinkActive(route) {
      console.log('r', this.$route.name === route)
      return this.$route.name === route;
    }
  }

}
</script>

<style>
</style>
