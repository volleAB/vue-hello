const actions = {
  switch_show({ commit }) {
    commit('switch_show');
  },
  switch_conut({ commit }) {
    commit('switch_conut');
  },
  switch_mes({ commit }, data) {
    commit('switch_mes', data);
  },
  UserLogin({ commit }, data) {
    commit('LOGIN', data);
  },
  UserLogout({ commit }) {
    commit('LOGOUT');
  },
  UserName({ commit }, data) {
    commit('USERNAME', data);
  },
  SetCookieUserName({ commit }, data) {
    commit('setCookies', data);
  }
}

export default actions
