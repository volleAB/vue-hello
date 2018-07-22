<template>
  <div id="film">
    <div class="container">
      <div class="film-type clearfix">
          <div class="film-now fl" :class="{active: now}" @click="changeTab('now-playing')">正在热映</div>
          <div class="film-soon fr" :class="{active: soon}" @click="changeTab('coming-soon')">即将上映</div>
      </div>
      <div class="film">
        <div class="film-item clearfix" v-for="(item, index) in filmList" :key="index">
          <router-link :to="{name: 'detail', params: {id: item.id}}">
            <img :src="item.poster.origin" :alt="item.name">
            <div class="film-info">
              <h3>{{item.name}}</h3><br/>
              {{item.intro}}<br/>
              <span>{{item.cinemaCount}}家影院上映</span>
              <span>{{item.watchCount}}人购票</span><br/>
              <i class="grade">{{item.grade}}</i>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
require('../assets/sass/film.sass')
import axios from 'axios'

export default {
  data() {
    return {
      filmList: [],
      now: false,
      soon: false,
      newType: '',
      page: 2
    }
  },
  mounted () {
    window.addEventListener('scroll', this.getMore)
  },
  created () {
    document.body.scrollTop = 0;
    let newType = this.$route.params.type;
    if(newType == "now-playing") {
      this.now = true;
    }else {
      this.soon = true
    }
    // console.log(newType);
    let url = '/v4/api/film/' + newType + '?__t=1532160378830&page=1&count=5'
    let ajax = (method, url) => {
      return axios({
          method: method,
          baseURL: '/api',
          url: url,
        })
    }
    let getFilmList = new ajax('get', url)
      .then((res) => {
        // console.log(res);
        this.filmList = res.data.data.films;
      }).catch((err) => {
        console.log(err);
      })
  },
  methods: {
    changeTab (type) {
      if(this.newtype != type) {
        this.$route.params.type = type;
        console.log(this.$route.params.type);
        this.now = !this.now;
        this.soon = !this.soon;
        let url = '/v4/api/film/' + type + '?__t=1532160378830&page=1&count=5';
        let ajax = (method, url) => {
          return axios({
              method: method,
              baseURL: '/api',
              url: url
            })
        }
        let getFilmList = new ajax('get', url)
          .then((res) => {
            // console.log(res);
            this.filmList = res.data.data.films;
          }).catch((err) => {
            console.log(err);
          })
      }
    },
    getMore () {
      // console.log(window.scrollY);
      // if(window.scrollY > 400) {
      //   let url = '/v4/api/film/now-playing?page=' + this.page + '&count=7';
      //   let ajax = (method, url) => {
      //     return axios({
      //         method: method,
      //         baseURL: '/api',
      //         url: url
      //       })
      //   }
      //   let getFilmList = new ajax('get', url)
      //     .then((res) => {
      //       let moreFilm = res.data.data.films;
      //       this.filmList.push(moreFilm);
      //       // console.log(moreFilm);
      //     }).catch((err) => {
      //       console.log(err);
      //     })
      // }

    }
  }
}
</script>
