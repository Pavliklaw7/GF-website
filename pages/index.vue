<template>
  <div class="main-wrapper">
    <header class="main-wrapper__header header">
      <div class="container">
        <div class="header__inner">
          <div class="header__logo">Gapter & Franz <span>{{ $t('law_firm') }}</span></div>
          <nav class="heder__nav nav">
            <ul class="nav__list">
              <li class="nav__item">
                <nuxt-link to="#" class="nav__link">{{ $t('services') }}</nuxt-link>
              </li>
              <li class="nav__item">
                <nuxt-link to="#" class="nav__link">{{ $t('pricing') }}</nuxt-link>
              </li>
              <li class="nav__item">
                <nuxt-link to="#" class="nav__link">{{ $t('blog') }}</nuxt-link>
              </li>
              <li class="nav__item">
                <a href="tel:+380635830168" class="nav__link btn secondary"
                  >{{ $t('call_now') }}</a
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
          <h2 class="section__title">{{ $t('alexandr_pavlik') }}</h2>
          <h3 class="section__subTitle">{{ $t('legal_attorney') }}</h3>
          <div class="section__text">
            {{$t('a_long_record_of_successfully_resolving_complex_divorce_family_law_matters')}}
          </div>
          <button class="section__btn btn primary">{{ $t('book_a_call') }}</button>
        </div>
      </div>
    </main>
    <img
      src="~/assets/img/intro_img.jpeg"
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
