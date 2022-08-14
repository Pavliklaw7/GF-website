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
          action="#"
          class="popup__form form"
          @submit.prevent="postData()"
        >
          <div class="form__row">
            <input
              v-model="name"
              type="text"
              class="form__input"
              placeholder="Ім'я"
            />
            <input
              v-model="email"
              type="email"
              class="form__input"
              placeholder="Єл. пошта"
            />
          </div>
          <input
            v-model="phone"
            type="text"
            class="form__input"
            placeholder="Телефон"
          />
          <textarea
            v-model="propModel"
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
      name: '',
      email: '',
      phone: '',
      description: '',
      success: false
    }
  },
  computed: {
    ...mapGetters({
      getContactPopupDescr: 'getContactPopupDescr',
    }),
    propModel: {
      get () { return this.getContactPopupDescr },
      set (value) { this.$emit('update:prop', value) },
    },
  },
  methods: {
    ...mapMutations({
      contactPopupClose: 'contactPopupClose'
    }),
    postData() {
      const data = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        description: this.description,
      }

      console.log(data);
    },
    sendEmail() {
      try {
        emailjs.sendForm('service_rwlaglf', 'template_mr0xn0f', this.$refs.form,
          'T1s9GAiwYR1Hht8DD').then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });

      } catch (error) {
        console.log({ error })
      }

      this.contactPopupClose();
    },
  }
}
</script>

<style>
</style>