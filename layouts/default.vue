<template>
  <div class="main-wrapper">
    <Header />
    <Nuxt />
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      window.addEventListener('resize', () => {
        setTimeout(() => {
          this.fixheight()
        }, 200)
      })

      window.addEventListener('orientationchange', () => {
        setTimeout(() => {
          this.fixheight()
        }, 200)
      })
    }, 100)

        const vh = window.innerHeight
      document.documentElement.style.setProperty('--vh', `${vh}px`)

  },
  
  methods: {
    fixheight() {
      const vh = window.innerHeight
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }
  }
}
</script>

<style>
a.nuxt-link-exact-active {
  display: none;
}
</style>