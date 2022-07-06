export const state = () => ({
  isMenuOpen: false,
})

export const getters = {
  isMenuOpen(state) {
    return state.isMenuOpen
  }
}

export const mutations = {
  menuToggle(state) {
    state.isMenuOpen = !state.isMenuOpen;
  }
}

export const actions = {

}
