<template>
  <div id="home">
    <div class="banner">
      <swiper class="banner-swiper" :options="swiperOption">
				<swiper-slide class='slide' v-for="(item, index) in homeList" :key="index">
					<a target='_blank' :href="item.url">
						<img :src="item.imageUrl" alt="">
					</a>
				</swiper-slide>
			</swiper>
    </div>
    <div class="container">
      <section class="home-view">
        <div class="hot">
          <ul>
            <li class="moive" v-for="(item, index) in hotList" :key="index">
              <router-link :to="{name: 'detail', params:{ id: item.id }}">
                <div class="movie-item">
                  <div class="movie-item-img">
                    <img :src="item.cover.origin" alt="">
                  </div>
                  <div class="movie-item-info clearfix">
                    <div class="movie-item-name fl">
                      {{item.name}}<br/>
                      <span>{{item.cinemaCount}}家影院上映 {{item.watchCount}}人购票</span>
                    </div>
                    <div class="movie-item-grade fr">{{item.grade}}</div>
                  </div>
                </div>
              </router-link>
            </li>
          </ul>
          <div class="more">
            <router-link :to="{name: 'film', params: {type: 'now-playing'}}">
              更多热映电影
            </router-link>
          </div>
        </div>
        <div class="soon">
          <div class="soon-line"></div>
          <ul>
            <li class="moive" v-for="(item, index) in soonList" :key="index">
              <router-link :to="{name: 'detail', params:{ id: item.id }}">
                <div class="movie-item">
                  <div class="movie-item-img">
                    <img :src="item.cover.origin" alt="">
                  </div>
                  <div class="movie-item-info clearfix">
                    <div class="movie-item-name fl">
                      {{item.name}}<br/>
                      <span>{{item.intro}}</span>
                    </div>
                    <div class="movie-item-grade fr">{{item.grade}}</div>
                  </div>
                </div>
              </router-link>
            </li>
          </ul>
          <div class="more">
            <router-link :to="{name: 'film', params: {type: 'coming-soon'}}">
              更多即将上映电影
            </router-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
require('../assets/scss/home.scss');
import 'swiper/dist/css/swiper.css'
import axios from 'axios'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
import {mapActions} from 'vuex'

export default {
  name: "home",
  data() {
    return {
      homeList: [],
      hotList: [],
      soonList: [],
      swiperOption: {
        autoHeight: true,
        speed: 400,
        autoplay : {
          delay: 5000,
        },
        loop : true,
        // effect : 'fade',
      }
    }
  },
  computed: {
    username () {
      // 我们很快就会看到 `params` 是什么
      return this.$route.params.username
    }
  },
  created () {
    let ajax = (method, url) => {
      return axios({
          method: method,
          baseURL: '/api',
          url: url
        })
    }
    let getHomeList = new ajax('get', 'v4/api/billboard/home?__t=1531896508443')
      .then((res) => {
        this.homeList = res.data.data.billboards;
        // console.log(res.data.data.billboards);
      }).catch((err) => {
        console.log(err);
      })
    let getHotList = new ajax('get', '/v4/api/film/now-playing?__t=1532070953742&page=1&count=5')
      .then((res) => {
        this.hotList = res.data.data.films;
        console.log(res.data.data.films);
      }).catch((err) => {
        console.log(err);
      })
    let getSoonList = new ajax('get', '/v4/api/film/coming-soon?__t=1532073609355&page=1&count=3')
      .then((res) => {
        this.soonList = res.data.data.films;
        console.log(res.data.data.films);
      }).catch((err) => {
        console.log(err);
      })
      // this.$store.dispatch('switch_conut')
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    },
  }
}
</script>
