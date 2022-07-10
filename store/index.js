export const state = () => ({
  apiUrl: process.env.STRAPI_API_URL,
  url: process.env.STRAPI_URL,
  isMenuOpen: false,
  isContactPopupOpen: true,
})

export const getters = {
  isMenuOpen(state) {
    return state.isMenuOpen
  },
  isContactPopupOpen(state) {
    return state.isContactPopupOpen
  }
}

export const mutations = {
  menuToggle(state, payload) {
    if (payload) {
      state.isMenuOpen = !state.isMenuOpen;
    } else {
      state.isMenuOpen = false
    }
  },
  contactPopupOpen(state) {
    state.isContactPopupOpen = true
  },
  contactPopupClose(state) {
    state.isContactPopupOpen = false
  }
}

export const actions = {

}
