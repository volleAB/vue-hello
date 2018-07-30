<template>
  <div id="film">
    <div class="container">
      <div class="film-type clearfix">
          <div class="film-now fl" :class="{active: now}" @click="changeTab('now-playing')">正在热映</div>
          <div class="film-soon fr" :class="{active: soon}" @click="changeTab('coming-soon')">即将上映</div>
      </div>
      <div class="film" :class="{showUp: now||soon}">
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
        <div class="loadMore" @click="getMore" :class="{hidden: more}">加载更多</div>
      </div>
    </div>
  </div>
</template>

<script>
require('../assets/scss/film.scss')
import axiosList from '../../api/list'

export default {
  data() {
    return {
      filmList: [],
      now: false,
      soon: false,
      newType: '',
      page: 2,
      more: false
    }
  },
  mounted () {
    // window.addEventListener('scroll', this.getMore);
  },
  created () {
    document.body.scrollTop = 0
    let newType = this.$route.params.type
    if(newType == "now-playing") {
      this.now = true;
    }else {
      this.soon = true
    }
    axiosList.getFilmList(newType)
      .then((res) => {
        this.filmList = res.data.data.films
      }).catch((err) => {
        console.log(err)
      })
  },
  methods: {
    changeTab (type) {
      this.more = false
      if(this.newType != type) {
        this.$router.push({name: 'film', params: {type: type}})
        this.now = !this.now
        this.soon = !this.soon
        axiosList.getFilmList(type)
          .then((res) => {
            this.filmList = res.data.data.films
          }).catch((err) => {
            console.log(err)
          })
      }
    },
    getMore () {
      this.more = true
      let newType = this.$route.params.type
      let page = this.page
      axiosList.getFilmMoreList(newType, page)
        .then((res) => {
          let moreFilm = res.data.data.films
          this.filmList = this.filmList.concat(moreFilm)//向当前数组添加
        }).catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
