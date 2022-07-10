<template>
  <div class="main-wrapper__popup popup">
    <div class="popup__close" @click="contactPopupClose()">
      <img
        src="@/assets/img/ui/cross_black.svg"
        alt="cross"
        class="popup__close-img"
      />
    </div>
    <div class="popup__inner">
      <p v-if="!success" class="popup__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sit
        beatae officiis est modi. Minus magnam explicabo odit perferendis iure
        impedit consequuntur doloremque tempora accusamus exercitationem. Quod
        nam sequi mollitia!
      </p>
      <form v-if="!success" action="#" class="popup__form form">
        <div class="form__row">
          <input type="text" class="form__input" placeholder="Name" />
          <input type="email" class="form__input" placeholder="Email" />
        </div>
        <input type="text" class="form__input" placeholder="phone" />
        <textarea
          class="form__textarea"
          name="description"
          id="description"
          cols="30"
          rows="10"
        ></textarea>
      </form>
      <div v-else class="popup__success">success</div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      success: false
    }
  },
  methods: {
    ...mapMutations({
      contactPopupClose: 'contactPopupClose'
    })
  }
}
</script>

<style>
</style>