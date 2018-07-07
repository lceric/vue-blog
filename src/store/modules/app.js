const app = {
  state: {
    navHidden: false,
    footerHidden: false
  },
  mutations: {
    UPDATE_NAV_HIDDEN: (state, flag) => {
      state.navHidden = flag
    },
    UPDATE_FOOTER_HIDDEN: (state, flag) => {
      state.footerHidden = flag
    }
  },
  actions: {
    updateNavHidden: ({ commit }, flag) => {
      commit('UPDATE_NAV_HIDDEN', flag)
    },
    updateFooterHidden: ({ commit }, flag) => {
      commit('UPDATE_FOOTER_HIDDEN', flag)
    }
  }
}
export default app
