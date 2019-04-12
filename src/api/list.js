import axios from 'axios'
// import store from '../store'
// import router from '../router'
import config from './config'
import bannerData from '../data/banner'
import hotList1 from '../data/hotList1'
import hotList2 from '../data/hotList2'
import hotList3 from '../data/hotList3'
import soonList from '../data/soonList'
import cityList from '../data/city'

var instance = axios.create(config.movieConfig)

export default {
  getBannerList() {
    return new Promise((resolve, rejevt) =>{
      resolve(bannerData);
    })
  },
  getHotList(data) {
    return new Promise((resolve, rejevt) =>{
      if(data == '1') {
        resolve(hotList1);
      } else if(data == '2') {
        resolve(hotList2);
      } else if(data == '3') {
        resolve(hotList2);
      } else {
        resolve('err')
      }
    })
  },
  getSoonList() {
    return new Promise((resolve, reject) => {
      resolve(soonList);
    })
  },
  getCityList() {
    return new Promise((resolve, rejevt) =>{
      resolve(cityList);
    })
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
