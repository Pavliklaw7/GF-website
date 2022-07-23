<template>
  <div class="main-wrapper__popup popup">
    <div class="popup__close" @click="contactPopupClose()">
      <img
        src="@/assets/img/ui/cross_black.svg"
        alt="cross"
        class="popup__close-img"
      />
    </div>
    <div v-if="!success" class="popup__inner">
      <p class="popup__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sit
        beatae officiis est modi. Minus magnam explicabo odit perferendis iure
        impedit consequuntur doloremque tempora accusamus exercitationem. Quod
        nam sequi mollitia!
      </p>
      <form action="#" class="popup__form form" @submit.prevent="postData()">
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
          v-model="description"
          class="form__textarea"
          name="description"
          placeholder="Опишіть своє питання"
        ></textarea>
        <button class="form__btn btn primary" type="submit">Відправити</button>
      </form>
    </div>
    <div v-else class="popup__inner">
      <p class="popup__text">success</p>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      description: '',
      success: false
    }
  },
  methods: {
    ...mapMutations({
      contactPopupClose: 'contactPopupClose'
    }),
    async postData() {
      const data = {
        name: this.name,
        email: this.email,
        phone: this.phone,
        description: this.description,
      }

      try {
            // send a POST request to create a new entry
            const msgs = await fetch(`${this.$store.state.apiUrl}/clients`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({data})
            })
        if (msgs) {
          this.success = true
          console.log(msgs)
        } 
          } catch (error) {
            console.log(error);
          }
    }
  }
}
</script>

<style>
</style>