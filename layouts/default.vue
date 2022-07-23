<template>
  <div>
    <div
      class="main-wrapper"
      :class="{
        blured: isContactPopupOpen,
        fluidH: $route.path != '/',
      }"
    >
      <Header />
      <Nuxt />
      <Footer v-if="path !== '/'" />
    </div>
    <ContactPopup v-if="isContactPopupOpen" />
    <div class="layer" v-if="isContactPopupOpen"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      isContactPopupOpen: 'isContactPopupOpen'
    }),
    path() {
      return this.$route.fullPath;
    }
  },
  mounted() {
    console.log(this.$route);

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