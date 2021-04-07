export default {
  setFormDialog: (state, payload) => state.dialog.form = payload,
  setDeleteDialog: (state, payload) => state.dialog.delete = payload,
  setMode: (state, payload) => state.mode = payload,
  setItem: (state, payload) => state.item = payload,
}