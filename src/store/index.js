import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import settings from '@/store/modules/settings.js'
import getters from '@/store/getteers.js'
export default new Vuex.Store({
  modules: {
    settings
  },
  getters
})
