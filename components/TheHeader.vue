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
            <!-- <li class="nav__item">
              <NuxtLink to="/services/business" class="nav__link"
                >Послуги</NuxtLink
              >
            </li> -->
            <!-- <li class="nav__item">
              <NuxtLink
                :to="$route.path !== '/' ? '/' : '/services/business'"
                type="button"
                class="header__btn btn"
                :class="$route.path !== '/' ? 'primary' : 'secondary'"
              >
                {{ $route.path !== '/' ? 'Головна' : 'Послуги' }}
              </NuxtLink>
            </li> -->
          </ul>
        </nav>
        <!-- <div
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
        </div> -->
      </div>
    </div>
  </header>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  mounted() {
    console.log(this.$)
  },
  computed: {
    ...mapGetters({
      isMenuOpen: 'isMenuOpen'
    }),
    isLinkActive(route) {
      return this.$route.path === route;
    }
  },
  methods: {
    ...mapMutations({
      menuToggle: 'menuToggle',
      contactPopupOpen: 'contactPopupOpen',

    }),
  }

}
</script>

<style>
</style>
