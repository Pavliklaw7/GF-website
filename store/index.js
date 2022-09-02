export const state = () => ({
  apiUrl: process.env.STRAPI_API_URL,
  url: process.env.STRAPI_URL,
  isMenuOpen: false,
  isContactPopupOpen: false,
  popapValue: '',
  businessServices: [
    'Усні та письмові консультації',
    'Комплексна правова допомога та захист юридичних осіб (абонентське обслуговування)',
    'Реєстрація бізнесу (всі види реєстрацій)',
    'Досудове вирішення спорів та медіація',
    'Судова практика: господарські, податкові та адміністративні справи',
    'Юридичний консалтинг',
    'Супровід перевірок',
    'Супровід тендерів',
    'Супровід девелоперських проектів',
    'Супровід виконавчих проваджень',
    'Отримання сертифікатів та дозволів',
    'Супровід відкриття рахунків в банках інших юрисдикцій',
    'Супровід IT компаній',
    'Супровід еміграційних питань',
    'Супровід отримання ліцензій та сертифікатів',
    'Податкові питання'
  ],
  personServices: [
    'Усні та письмові консультації',
    'Комплексна правова допомога та захист фізичних осіб',
    'Супровід цивільних суперечок',
    'Супровід сімейних суперечок',
    'Супровід спорів пов`язаних з ДТП',
    'Супровід суперечок пов`язаних з адміністративними правопорушеннями',
    'Представництво особи у кримінальному процесі',
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
