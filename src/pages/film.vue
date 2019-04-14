<template>
  <div id="film">
    <div class="container">
      <div class="film-header" :class="{show : canShow}">
        <div class="goBack" @click="goBack()">
          <span class="iconfont icon-close"></span>
        </div>
        <div class="title">{{filmList.name}}</div>
      </div>
      <div class="film-img">
        <img :src="filmList.poster" :alt="filmList.name">
      </div>
      <div class="film-info">
        <div class="col">
          <div class="film-name">
            <span>{{filmList.name}}</span>
            <span class="item">{{filmList.item.name}}</span>
          </div>
          <div class="film-grade grey-text">
            <span>{{filmList.grade}}</span>分
          </div>
        </div>
        <div class="film-category grey-text">
          {{filmList.category}}
        </div>
        <div class="film-premiere-time grey-text">
          {{getTime(filmList.premiereAt)}}
        </div>
        <div class="film-nation-runtime grey-text">
          <span>{{filmList.nation}} | </span>
          <span>{{filmList.runtime}}</span>
        </div>
        <div class="film-synopsis" :class="{hidden : !isShowSynopsis}">
          {{filmList.synopsis}}
        </div>
        <div class="toggle iconfont" :class="[!isShowSynopsis ? 'icon-down' : 'icon-upward']" @click="isShowSynopsis = !isShowSynopsis"></div>
      </div>
      <div class="actors">
        <span class="grey-text">演职人员</span>
        <div class="scrollbar">
          <ul class="actor-info">
            <li class="actor-item" v-for="(actor, index) in filmList.actors" :key="index">
              <img :src="actor.avatarAddress" :alt="actor.name">
              <div class="actor-name">
                <span>{{actor.name}}</span>
                <span>{{actor.role}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="photos">
        <span class="grey-text">剧照</span>
        <div class="scrollbar">
          <ul class="photos-info">
            <li class="photos-item">
              <img :src="require('../assets/images/f1.png')" alt="">
            </li>
            <li class="photos-item">
              <img :src="require('../assets/images/f2.png')" alt="">
            </li>
            <li class="photos-item">
              <img :src="require('../assets/images/f3.png')" alt="">
            </li>
            <li class="photos-item">
              <img :src="require('../assets/images/f4.png')" alt="">
            </li>
            <li class="photos-item">
              <img :src="require('../assets/images/f5.png')" alt="">
            </li>
          </ul>
        </div>
      </div>
      <div class="goSchedule" @click="goSchedule">
        <span>选座购票</span>
      </div>
    </div>
  </div>
</template>

<script>
require('../assets/scss/film.scss')
import axiosList from '../api/list'
import moment from 'moment'

export default {
  data() {
    return {
      newId: '',
      index: Number,
      isShowSynopsis: false,
      photosList: [],
      canShow: false
    }
  },
  computed: {
    filmList: function() {
      this.$store.state.hotList.map((value, index) => {
        if(this.$store.state.hotList[index].filmId == this.newId)
          return this.index = index;
      })
      console.log(this.$store.state.hotList[this.index]);
      return this.$store.state.hotList[this.index];
    }
  },
  mounted () {
    window.addEventListener('scroll', () => {
      let top = document.documentElement.scrollTop;
      if(top > 20) {
        this.canShow = true;
      } else {
        this.canShow = false;
      }
    });
    if(this.filmList.length < 1) {
      axiosList.getHotList()
        .then((res) => {
          this.filmList = res.data;
        })
    }
    // console.log(this.filmList);
  },
  created () {
    // document.body.scrollTop = 0;
    this.newId = this.$route.params.id
    console.log(this.newId)
  },
  methods: {
    getTime(date){
      let nowDate, year = new Date();
      year = year.getFullYear();
      nowDate = moment(date).format('MM-DD上映');
      nowDate = year + '-' + nowDate;
      return nowDate;
    },
    goBack() {
      window.history > 1 ? this.$router.go(-1) : this.$router.push('/');
    },
    goSchedule() {
      this.$router.push({path: `/film/${this.newId}/cinemas`})
    }
  }
}
</script>
