<template>
  <div id="film">
    <!-- <div class="container">
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
    </div> -->
  </div>
</template>

<script>
require('../assets/scss/film.scss')
import axiosList from '../api/list'

export default {
  data() {
    return {
      now: false,
      soon: false,
      newType: '',
      page: 2,
      more: false
    }
  },
  computed: {
    filmList: () => {
      console.log(this.$store.state.hotList);
      return this.$store.state.hotList;
    }
  },
  mounted () {
    // window.addEventListener('scroll', this.getMore);
    if(this.filmList.length < 1) {
      axiosList.getHotList()
        .then((res) => {
          this.filmList = res.data;
        })
    }
    console.log(this.filmList);
  },
  created () {
    document.body.scrollTop = 0
    let newId = this.$route.params.id
    console.log(newId)
  },
  methods: {

  }
}
</script>
