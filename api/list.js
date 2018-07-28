import axios from 'axios'
import store from '../src/store'
import router from '../src/router'

var instance = axios.create({
  timeout: 5000, //请求超过5秒即超时返回错误
  headers: { 'Content-Type': 'application/json;charset=UTF-8' },
});

export default {
  getHomeList(data) {
    return instance.post('/api/register', data);
  },

}
