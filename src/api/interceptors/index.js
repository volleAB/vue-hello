let requestFunction = config => {
  //判断是否存在token，如果存在的话，则每个http header都加上token
  if (store.state.token) {
    config.headers.Authorization = `token ${store.state.token}`
  }
  return config;
}

let responseSuccessFunction = response => {
  return response;
}

let responseErrorFunction = error => { //默认除了2XX之外的都是错误的，就会走这里
  if (error.response) {
    switch (error.response.status) {
      case 401:
        store.dispatch('UserLogout'); //可能是token过期，清除它
        router.replace({ //跳转到登录页面
          path: 'login',
          query: { redirect: router.currentRoute.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
        });
    }
  }
  return Promise.reject(error.response);
}

let interceptors = {
  requestFunction,
  responseSuccessFunction,
  responseErrorFunction
}

export default interceptors;
