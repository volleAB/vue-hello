const mutations = {
  switch_show(state) {
    state.show = state.show?false:true;
  },
  switch_conut(state) {
    state.count++;
    console.log(state.count);
  },
}

export default mutations
