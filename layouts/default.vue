<template>
  <div>
    <div
      class="main-wrapper"
      :class="{
        blured: isContactPopupOpen,
        fluidH: $route.path != '/',
        fixed: isMenuOpen,
      }"
    >
      <TheHeader />
      <Nuxt />
      <TheFooter v-if="path !== '/'" />
    </div>
    <ContactPopup v-if="isContactPopupOpen" :value="''" />
    <div v-if="isContactPopupOpen" class="layer"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      isMenuOpen: 'isMenuOpen',
      isContactPopupOpen: 'isContactPopupOpen',

    }),
    path() {
      return this.$route.fullPath;
    }
  },
    watch: {
      isContactPopupOpen() {
      if (this.isContactPopupOpen) {
        document.documentElement.style.overflow = 'hidden'
        return
      }

      document.documentElement.style.overflow = 'auto'
    }
  },
  mounted() {
    setTimeout(() => {
        window.addEventListener("resize", () => {
            setTimeout(() => {
                this.fixheight();
            }, 200);
        });
        window.addEventListener("orientationchange", () => {
            setTimeout(() => {
                this.fixheight();
            }, 200);
        });
    }, 100);
    const vh = window.innerHeight;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  },
    methods: {
        fixheight() {
            const vh = window.innerHeight;
            document.documentElement.style.setProperty("--vh", `${vh}px`);
        }
    },
}
</script>

<style>
</style>