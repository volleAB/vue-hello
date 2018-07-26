const actions = {
  switch_show(context) {
    context.commit('switch_show');
  },
  switch_conut(context) {
    context.commit('switch_conut');
  },
  UserLogin({ commit }, data){
    commit('LOGIN', data);
  },
  UserLogout({ commit }){
      commit('LOGOUT');
  },
  UserName({ commit }, data){
      commit('USERNAME', data);
  }
}

export default actions
