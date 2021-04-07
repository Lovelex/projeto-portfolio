import { bindItemsOrderBy, bindItemsWhere } from '../firebase/firestore/getDocs'
import state from '../state'
import getters from '../getters'
import mutations from '../mutations'
import actions from '../actions'

function newItem() {
  return {
    isNew: true,
    name: "",
    email: "",
    message: ""
  }
}

export default {
  namespaced: true,
  state: {
    ...state,
    item: new newItem(),
    items: [],
    itemsWhere: []
  },
  getters: {
    ...getters,
    getItems: state => state.items,
    getItemsWhereLength: state => state.itemsWhere.length
  },
  mutations: {
    ...mutations,
  },
  actions: {
    ...actions,
    ...bindItemsOrderBy('mensagens', ["createdAt", "asc"], "items"),
    ...bindItemsWhere('mensagens', ["isNew", true]),
    resetForm({ state }) { state.item = newItem() },
  }
}