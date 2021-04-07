import Vue from 'vue'
import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyA6Dx0zGu6s_uhIVnvfWTuiTUQR8jzYGLQ",
  authDomain: "projeto-portfolio-dd683.firebaseapp.com",
  databaseURL: "https://projeto-portfolio-dd683.firebaseio.com",
  projectId: "projeto-portfolio-dd683",
  storageBucket: "projeto-portfolio-dd683.appspot.com",
  messagingSenderId: "286478608922",
  appId: "1:286478608922:web:9e4e81999fc7c20f403fa3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()
const db = firebaseApp.firestore()
const storage = firebaseApp.storage()

Vue.prototype.$auth = auth
Vue.prototype.$storage = storage
Vue.prototype.$db = db

export { auth, db, storage }