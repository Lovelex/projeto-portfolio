import { auth } from '@/plugins/firebase'

import Login from '@/views/login/Login'

export default {
  beforeEnter(to, from, next) {
    if(!auth.currentUser) {
      next()
    }
    if(auth.currentUser) {
      next({ name: 'Admin' })
    }
  },
  path: '/login',
  name: 'Login',
  component: Login
}