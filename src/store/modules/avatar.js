import { bindItem } from '../firebase/firestore/getDocs'
import state from '../state'
import getters from '../getters'
import mutations from '../mutations'
import actions from '../actions'

export default {
  namespaced: true,
  state: {
    ...state,
    item: {}
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
    ...bindItem('avatar', 'items')
  }
}