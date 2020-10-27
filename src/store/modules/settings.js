const state = {
  // 侧边栏折叠状态
  sidebarCollapse: false
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebarCollapse = !state.sidebarCollapse
  }
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
