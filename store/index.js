export const state = () => ({
  apiUrl: process.env.STRAPI_API_URL,
  url: process.env.STRAPI_URL,
  isMenuOpen: false,
  isContactPopupOpen: false,
  popapValue: '',
  businessServices: [
    'Регистрация бизнеса (все виды регистраций)',
    'Регистрация бизнеса (все виды регистраций) 2',
    'Регистрация бизнеса (все виды регистраций) 3',
    'Регистрация бизнеса (все виды регистраций)',
    'Регистрация бизнеса (все виды регистраций)',
    'Регистрация бизнеса (все виды регистраций)',
    'Регистрация бизнеса (все виды регистраций)',
    'Регистрация бизнеса (все виды регистраций)',
    'Регистрация бизнеса (все виды регистраций)',
    'Регистрация бизнеса (все виды регистраций)',
    'Регистрация бизнеса (все виды регистраций)',
  ],
  personServices: [
    'Устные и письменные консультации',
    'Комплексная правовая помощь и защита физических лиц',
    'Сопровождение гражданских споров',
    'Сопровождение семейных споров',
    'Сопровождение споров связанных с ДТП',
    'Сопровождение споров связанных с административными правонарушениями',
    'Представительство лица в криминальном процессе',
    'Представительство лица в криминальном процессе',
    'Представительство лица в криминальном процессе',
  ]
})

export const getters = {
  isMenuOpen(state) {
    return state.isMenuOpen
  },
  isContactPopupOpen(state) {
    return state.isContactPopupOpen
  },
  getContactPopupDescr(state) {
    return state.popapValue
  },
  getBusinessServices(state) {
    return state.businessServices
  },
  getPersonServices(state) {
    return state.personServices
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
  contactPopupOpen(state, payload) {
    if (payload) {
      state.popapValue = payload
    } else {
      state.popapValue = ''
    }

    state.isContactPopupOpen = true
  },
  contactPopupClose(state) {
    state.isContactPopupOpen = false
  }
}

export const actions = {

}
