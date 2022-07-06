<template>
  <div class="main-wrapper">
    <Header />
    <main class="main-wrapper__section section">
      <div class="container">
        <div class="section__inner">
          <h2 class="section__title">Alexandr Pavlik</h2>
          <h3 class="section__subTitle">Legal Attorney</h3>
          <div class="section__text">
            A long record of successfully resolving complex divorce & family law
            matters.
          </div>
          <button class="section__btn btn primary d-none-768">
            Book a Call
          </button>

          <!-- <img
            src="~/assets/img/intro_img.jpeg"
            alt="img"
            class="main-wrapper__img"
          /> -->
        </div>
      </div>
      <img
        src="~/assets/img/intro_img.jpeg"
        alt="img"
        class="main-wrapper__img"
      />
      <button class="section__btn btn primary d-block-768">Book a Call</button>
    </main>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
export default {
    name: "IndexPage",
    components: { Header }
}
</script>
