import { bindItem } from '../firebase/firestore/getDocs'
import state from '../state'
import getters from '../getters'
import mutations from '../mutations'
import actions from '../actions'

function newItem() {
  return {
    text: "",
    image: "",
  }
}

export default {
  namespaced: true,
  state: {
    ...state,
    item: {},
  },
  getters: {
    ...getters,
    getItem: state => state.item
  },
  mutations: {
    ...mutations,
  },
  actions: {
    ...actions,
    ...bindItem('sobre', 'items'),
    resetForm({ state }) { state.item = newItem() },
  }
}