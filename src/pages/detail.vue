<template>
  <div id="detail">
    <div class="movie-detail-img">
      <img :src="filmDetail.cover.origin">
    </div>
    <div class="movie-detail-info">
      <h3>影片介绍</h3>
      <button class="bubbly-button" @click="$store.dispatch('switch_conut')">喜欢</button>
      <p>
        导演：{{filmDetail.director}}<br/>
        主演：<span v-for="(item, index) in filmDetail.actors" :key="index">{{item.name}} | </span><br/>
        地区语言：{{filmDetail.nation}}（{{filmDetail.language}}）<br/>
        类型：{{filmDetail.category}}<br/>
        上映时间：{{filmDetail.premiereAt|getDay}}<br/>
        {{filmDetail.synopsis}}
      </p>
    </div>
    <div class="buy" @click="goCinema">立即购票</div>
  </div>
</template>

<script>
require('../assets/scss/detail.scss');
import axios from 'axios';
import {mapGetters, mapActions} from 'vuex';

export default {
  data () {
    return {
      filmDetail: []
    }
  },
  filters:{
    getDay:function(time){
      let date = new Date(time*1),
          year = date.getFullYear(),
          month = date.getMonth()+1 > 9 ? date.getMonth()+1 : '0' + (date.getMonth() + 1),
          day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
      return year + '-' + month + '-' + day;
    }
	},
  created () {
    //TODO
    let newId = this.$route.params.id;
    // console.log(newId);
    let url = '/v4/api/film/' + newId + '?__t=1532153429284'
    let ajax = (method, url) => {
      return axios({
          method: method,
          baseURL: '/api',
          url: url
        })
    }
    let getFilmDetail = new ajax('get', url)
      .then((res) => {
        this.filmDetail = res.data.data.film;
        console.log(res.data.data.film);
      }).catch((err) => {
        console.log(err);
      })
  },
  computed: {
    // mapGetters(['gettersMsg']),
  },
  methods: {
    goCinema () {
      this.$router.push({name: 'cinema'});
      this.$store.state.movieName = this.filmDetail.name;
    }
  }
}
</script>
