<template>
  <div>
    <div class="main-wrapper__popup popup" :class="{ active: active }">
      <div class="popup__close" @click="contactPopupClose">
        <img
          src="@/assets/img/ui/cross_black.svg"
          alt="cross"
          class="popup__close-img"
        />
      </div>
      <div v-if="!success" class="popup__inner">
        <p class="popup__text">
          Шановний клієнте, залишь свій запит і я обов'язково зв'яжусь с тобою
          найближчим часом для обговорення та вирішення твого питання.
        </p>
        <form
          ref="form"
          class="popup__form form"
          action="https://formsubmit.co/pavliklaw7@gmail.com"
          method="POST"
          @submit.prevent="sendEmail"
        >
          <div class="form__row">
            <input
              v-model="form.name"
              name="name"
              type="text"
              class="form__input"
              placeholder="Ім'я"
            />
            <!-- <input
              v-model="form.email"
              name="email"
              type="email"
              class="form__input"
              placeholder="Єл. пошта"
            /> -->
          </div>
          <input
            v-model="form.phone"
            name="phone"
            type="tel"
            class="form__input"
            placeholder="Телефон"
          />
          <textarea
            v-model="form.description"
            class="form__textarea"
            name="description"
            placeholder="Опишіть своє питання"
          ></textarea>
          <button class="form__btn btn primary" type="submit">
            Відправити
          </button>
        </form>
      </div>
      <div v-else class="popup__inner">
        <p class="popup__text">success</p>
      </div>
    </div>
    <div :class="{ active: active }" class="layer"></div>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser';

import { mapMutations, mapGetters } from 'vuex'

export default {
  props: {
    active: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        description: '',
      },

      success: false
    }
  },
  computed: {
    ...mapGetters({
      getContactPopupDescr: 'getContactPopupDescr',
    }),
    // propModel: {
    //   get () { return this.getContactPopupDescr },
    //   set (value) { this.$emit('update:prop', value) },
    // },
  },
 mounted() {
    if (window.emailjs) {
      window.emailjs.init(process.env.EMAILJS_PUBLIC_TOKEN)
    } else {
      console.error("EmailJS не загружен")
    }
  },
  methods: {
    ...mapMutations({
      contactPopupClose: 'contactPopupClose'
    }),
    resetFormInputs() {
      this.name = ''
      this.email = ''
      this.phone = ''
      this.description = ''
    },
    sendEmail() {
      emailjs.send(process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, this.form, process.env.EMAILJS_PUBLIC_TOKEN)
        .then(() => {
          this.form.name = ''
          this.form.email = ''
          this.form.message = ''
        })
        .catch((error) => {
          console.error('Ошибка отправки:', error)
        })

      this.contactPopupClose();
      this.resetFormInputs()
    },
  }
}
</script>

<style>
</style>
