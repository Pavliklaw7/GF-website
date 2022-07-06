<template>
  <header class="main-wrapper__header header">
    <div class="container">
      <div class="header__inner">
        <div class="header__logo">Gapter & Franz <span>Law Firm</span></div>
        <nav class="header__nav nav" :class="{ open: isMenuOpen }">
          <ul class="nav__list">
            <li class="nav__item">
              <nuxt-link to="#" class="nav__link">Services</nuxt-link>
            </li>
            <li class="nav__item">
              <nuxt-link to="#" class="nav__link">Pricing</nuxt-link>
            </li>
            <li class="nav__item">
              <nuxt-link to="#" class="nav__link">Blog</nuxt-link>
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
  computed: {
    ...mapGetters({
      isMenuOpen: 'isMenuOpen'
    }),
  },
  methods: {
    ...mapMutations({
      menuToggle: 'menuToggle'
    })
  }

}
</script>

<style>
</style>
