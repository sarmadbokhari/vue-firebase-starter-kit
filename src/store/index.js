import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
import { firebaseMutations } from 'vuexfire'

Vue.use(Vuex)

const modules = {}

const state = {
  user: null
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations: {
    ...mutations,
    ...firebaseMutations
  },
  modules,
})
