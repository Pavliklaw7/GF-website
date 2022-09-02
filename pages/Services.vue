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
          <p class="section__text">
            Нижче ви можете ознайомитись зі списком послуг, які я надаю своїм
            Клиєнтам по всій території України:
          </p>
          <NuxtChild />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    document.body.classList.add('overflowed');
  }

}
</script>

<style>
</style>