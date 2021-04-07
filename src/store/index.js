import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations } from 'vuexfire'

import firebase from './firebase/index'
import modules from './modules/index'
import snack from './snack/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ...firebase,
    ...modules,
    ...snack,
  },
  mutations: vuexfireMutations
})
