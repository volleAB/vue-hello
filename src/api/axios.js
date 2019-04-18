import axios from 'axios'
import config from './config'
import interceptors from './interceptors'

//创建axios实例
let instance = axios.create(config.userConfig);

//request拦截器
instance.interceptors.request.use(interceptors. requestFunction);

//respone拦截器
instance.interceptors.response.use(interceptors. responseSuccessFunction, interceptors.responseErrorFunction);

export default {
  //用户注册
  userRegister(data) {
    return instance.post('/register', data);
  },
  //用户登录
  userLogin(data) {
    return instance.post('/login', data);
  },
  //获取所有用户
  getUser() {
    return instance.get('/user');
  },
  //获取某个用户
  getOneUser(data) {
    return instance.post('/oneUser', data);
  },
  //删除用户
  delUser(data) {
    return instance.post('/delUser', data);
  },
  //添加我喜欢
  getFavMoive(data) {
    return instance.post('/movie', data)
  }
}
