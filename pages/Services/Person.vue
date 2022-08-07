<template>
  <ul class="section__list">
    <li
      v-for="(service, index) in getPersonServices"
      :key="index"
      class="section__item"
      @click="contactPopupOpen(service)"
    >
      {{ service }}
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      getPersonServices: 'getPersonServices'
    })
  },
    methods: {
    ...mapMutations([
      'contactPopupOpen'
    ])
  }
}
</script>

<style>
</style>