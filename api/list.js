import axios from 'axios'
import store from '../src/store'
import router from '../src/router'

var instance = axios.create({
  baseURL: '/movieapi',
  timeout: 5000, //请求超过5秒即超时返回错误
  headers: { 'Content-Type': 'application/json;charset=UTF-8' }
});

export default {
  getHomeList(data) {
    return instance.get('/v4/api/billboard/home?__t=1531896508443', data);
  },
  getHotList(data) {
    return instance.get('/v4/api/film/now-playing?__t=1532070953742&page=1&count=5', data);
  },
  getSoonList(data) {
    return instance.get('/v4/api/film/coming-soon?__t=1532073609355&page=1&count=3', data);
  },
  getCinemaList(data) {
    return instance.get('/v4/api/cinema?__t=1532321869522', data)
  },
  getCinemaInfo(newId) {
    return instance.get('/v4/api/cinema/' + newId + '?__t=1532335419519')
  },
  getFilmDetail(newId) {
    return instance.get('/v4/api/film/' + newId + '?__t=1532153429284')
  },
  getFilmList(newType) {
    return instance.get('/v4/api/film/' + newType + '?__t=1532160378830&page=1&count=5')
  },
  getFilmMoreList(newType,page) {
    return instance.get('/v4/api/film/' + newType + '?page=' + page + '&count=7')
  }
}
