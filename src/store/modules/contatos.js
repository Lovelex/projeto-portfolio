import { bindItems } from '../firebase/firestore/getDocs'
import state from '../state'
import getters from '../getters'
import mutations from '../mutations'
import actions from '../actions'

function newItem() {
  return {
    url: null,
    value: "",
    icon:
    {
      label: "Twitter",
      icon: "mdi-twitter",
    },

  }
}

export default {
  namespaced: true,
  state: {
    ...state,
    items: [],
    item: new newItem()
  },
  getters: {
    ...getters,
    getItems: state => state.items
  },
  mutations: {
    ...mutations,
  },
  actions: {
    ...actions,
    ...bindItems('contatos'),
    resetForm({ state }) { state.item = newItem() },
  }
}