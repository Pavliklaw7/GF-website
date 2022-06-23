<template>
  <div class="main-wrapper">
    <header class="main-wrapper__header header">
      <div class="container">
        <div class="header__inner">
          <div class="header__logo">Gapter & Franz <span>Law Firm</span></div>
          <nav class="heder__nav nav">
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
                <a href="tel:+380635830168" class="nav__link btn secondary"
                  >Call Now</a
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <main class="main-wrapper__section section">
      <div class="container">
        <div class="section__inner">
          <h2 class="section__title">Alexandr Pavlik</h2>
          <h3 class="section__subTitle">Legal Attorney</h3>
          <div class="section__text">
            A long record of successfully resolving complex divorce & family law
            matters.
          </div>
          <button class="section__btn btn primary">Book a Call</button>
        </div>
      </div>
    </main>
    <img
      src="@/assets/img/intro_img.jpeg"
      alt="img"
      class="main-wrapper__img"
    />
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
