export const state = () => ({
  isMenuOpen: false,
})

export const getters = {
  isMenuOpen(state) {
    return state.isMenuOpen
  }
}

export const mutations = {
  menuToggle(state, payload) {
    if (payload) {
      state.isMenuOpen = !state.isMenuOpen;
    } else {
      state.isMenuOpen = false
    }
  }
}

export const actions = {

}
