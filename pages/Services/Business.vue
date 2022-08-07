<template>
  <ul class="section__list">
    <li
      v-for="(service, index) in getBusinessServices"
      :key="index"
      class="section__item"
      @click="contactPopupOpen(service)"
    >
      {{ service }}
    </li>
  </ul>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      getBusinessServices: 'getBusinessServices',
    })
  },
  methods: {
    ...mapMutations([
      'contactPopupOpen'
    ])
  }
}
</script>
