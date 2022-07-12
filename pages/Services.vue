<template>
  <div class="main-wrapper__section section">
    <div class="container">
      <div class="section__with-aside">
        <aside class="section__aside toggle">
          <NuxtLink class="section__link" to="/services/business">
            Бізнесу
          </NuxtLink>
          <NuxtLink class="section__link" to="/services/person">
            Фіз особам
          </NuxtLink>
        </aside>
        <main>
          <NuxtChild />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>