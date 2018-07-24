const actions = {
  switch_show(context) {
    context.commit('switch_show');
  },
  switch_conut(context) {
    context.commit('switch_conut');
  },
  getList(context) {
    context.commit('getList');
  }
}

export default actions
