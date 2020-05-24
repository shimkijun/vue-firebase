import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    editable: true,
    firebaseUser: null
  },
  mutations: {
    setEdit (state, edit) {
      state.editable = edit
    },
    setFirebaseUser (state, fu) {
      state.firebaseUser = fu
    }
  },
  actions: {
  },
  modules: {
  }
})
