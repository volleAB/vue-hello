const mutations = {
  switch_show(state) {
    state.show = state.show?false:true;
  },
  switch_conut(state) {
    state.count++;
    console.log(state.count);
  },
  switch_mes(state, data) {
    state.messageGol = data;
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
  },
  setCookies: (state, data) => {
    state.cookieUserName = data;
    let Days = 30;
    let exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = 'name' + '=' + escape(data) + ';expires=' + exp.toGMTString();
  }
}

export default mutations
