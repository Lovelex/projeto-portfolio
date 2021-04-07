import { auth } from "../../../plugins/firebase"

export default {
  namespaced: true,
  state: {
    loginError: null,
    logoutError: null,
    loginProgress: false
  },
  getters: {
    getLogoutError: state => state.logoutError,
    getLoginError: state => state.loginError,
    getLoginProgress: state => state.loginProgress
  },
  actions: {
    async login({ state }, payload) {
      state.loginProgress = true
      try {
        await auth.signInWithEmailAndPassword(payload.email, payload.password)
        state.loginError = null
        state.loginProgress = false
      } catch (e) {
        state.loginProgress = false
        state.loginError = e.message
        console.log(e.message)
      }
    },
    async logout({ state }) {
      try {
        await auth.signOut()
        state.logoutError = null
      } catch (e) {
        state.logoutError = e.message
        console.log(e.message)
      }
    }
  }
}