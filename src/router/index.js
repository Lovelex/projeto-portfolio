import Vue from 'vue'
import VueRouter from 'vue-router'

// Modules
import admin from './admin'
import login from './login'
import main from './main'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    login,
    admin,
    main
  ]
})

export default router
