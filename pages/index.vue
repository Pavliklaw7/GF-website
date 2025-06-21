<template>
  <main class="main-wrapper__section section">
    <div class="container">
      <div class="section__inner">
        <h1 class="section__title">Адвокат Олександр Павлік</h1>
        <!-- <h3 class="section__subTitle">Адвокат | засновник компанії</h3> -->
        <div class="section__text">Ваш вибір, мій пріоритет!</div>
        <div class="section__text"> <strong>26</strong> років досвіду !</div>
        <div class="section__text">Більше 2500 успішних кейсів</div>
        <button
          class="section__btn btn primary d-none-768"
          @click="contactPopupOpen()"
        >
          Консультація
        </button>
      </div>
    </div>
    <img
      src="~/assets/img/intro_img.jpeg"
      alt="img"
      class="main-wrapper__img"
    />
    <button
      type="button"
      class="section__btn btn primary d-block-768"
      @click="contactPopupOpen('test')"
    >
      Консультація
    </button>
  </main>
</template>

<script>
import { mapMutations } from 'vuex'

/* some changes string */

export default {
  name: "IndexPage",
  head() {
    return {
      title: 'Адвокат Олександр Павлік | Юридичні послуги в Києві',
      meta: [
        { hid: 'description', name: 'description', content: 'Консультація і юридичні посліги віл адвоката Олександра Павліка в Києві.' },
        { hid: 'keywords', name: 'keywords', content: 'адвокат, юрист, юридические услуги, консультации, Киев, адвокат, юрист, юридичні послуги, консультація, Київ, lawyer, lawfirm, ligal services, law, law services, consultation, Kyiv' },
        { hid: 'og:title', property: 'og:title', content: 'Адвокат Олександр Павлік' },
        { hid: 'og:description', property: 'og:description', content: 'Професійна юридична допомога в Києві' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:image', property: 'og:image', content: 'https://example.com/images/preview.jpg' },
      ],
      script: [
    {
      type: 'application/ld+json',
      json: {
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": "Адвокат Александр Павлік",
        // "image": "https://example.com/images/preview.jpg",
        // "url": "https://example.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "вул. Саксаганського, 37К",
          "addressLocality": "Київ",
          // "postalCode": "101000",
          "addressCountry": "UA"
        },
        "telephone": "+38-050-310-40-02"
      }
    }
  ]
    }
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    },
  },
  methods: {
    ...mapMutations({
      contactPopupOpen: 'contactPopupOpen',
    }),
  }
}
</script>
