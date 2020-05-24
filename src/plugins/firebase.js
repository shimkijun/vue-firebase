import Vue from 'vue'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-database'
import firebaseConfig from '../../firebaseConfig'
import store from '../store/index'

firebase.initializeApp(firebaseConfig)

firebase.auth().onAuthStateChanged(firebaseUser =>
  store.commit('setFirebaseUser', firebaseUser)
)

Vue.prototype.$firebase = firebase
