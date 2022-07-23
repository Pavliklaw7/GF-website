<template>
  <header class="main-wrapper__header header">
    <div class="container">
      <div class="header__inner">
        <nuxt-link to="/" class="header__logo"
          >Gapter & Franz <span>Law Firm</span></nuxt-link
        >
        <nav class="header__nav nav" :class="{ open: isMenuOpen }">
          <ul
            class="nav__list"
            :class="$route.path != '/' ? 'primary' : ''"
            @click="menuToggle(false)"
          >
            <li class="nav__item">
              <NuxtLink to="/services/business" class="nav__link"
                >Services</NuxtLink
              >
            </li>
            <!-- <li class="nav__item">
              <NuxtLink to="/price" class="nav__link">Pricing</NuxtLink>
            </li> -->
            <!-- <li class="nav__item">
              <NuxtLink to="blog" class="nav__link">Blog</NuxtLink>
            </li> -->
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
          @click="menuToggle(true)"
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
    isLinkActive(route) {
      return this.$route.path === route;
    }
  },
  mounted() {
    console.log('event', this.$event)
  },
  methods: {
    ...mapMutations({
      menuToggle: 'menuToggle'
    }),
    
  }

}
</script>

<style>
</style>
