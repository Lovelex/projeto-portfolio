export default {
  closeFormDialog({ commit, dispatch }) {
    commit('setFormDialog', false)
    dispatch("resetForm")
  },
  closeDeleteDialog({ commit, dispatch }) {
    commit('setDeleteDialog', false)
    dispatch("resetForm")
  },
  openFormDialog({ commit }) { commit('setFormDialog', true) },
  openDeleteDialog({ commit }) { commit('setDeleteDialog', true) },
  setToSubmitMode({ commit }) { commit('setMode', 'submit') },
  setToUpdateMode({ commit }) { commit('setMode', 'update') },

  setForm({ state }, payload) { state.item = payload },

  openInSubmitMode({ dispatch }) {
    dispatch('setToSubmitMode')
    dispatch('openFormDialog')
    dispatch('resetForm')
  },

  openInUpdateMode({ dispatch, commit }, payload) {
    commit('setItem', payload)
    dispatch('setToUpdateMode')
    dispatch('openFormDialog')
  },

  openInDeleteMode({ dispatch, commit }, payload) {
    commit('setItem', payload)
    dispatch('openDeleteDialog')
  },
}
