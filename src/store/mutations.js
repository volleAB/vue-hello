const mutations = {
  switch_show(state) {
    state.show = state.show?false:true;
  },
  switch_conut(state) {
    state.count++;
    console.log(state.count);
  },
  LOGIN: (state, data) => {
    //更改token的值
    state.token = data;
    window.sessionStorage.setItem('token', data);
  },
  LOGOUT: (state) => {
      //登出的时候要清除token
      state.token = null;
      window.sessionStorage.removeItem('token');
  },
  USERNAME: (state, data) => {
      //把用户名存起来
      state.username = data;
      window.sessionStorage.setItem('username', data);
  }
}

export default mutations
