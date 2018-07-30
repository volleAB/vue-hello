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
// import axios from 'axios'
import axiosList from '../../api/list'
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
        loop: true,
        autoHeight: true,
        speed: 400,
        autoplay : {
          delay: 5000,
        },
      }
    }
  },
  computed: {
    username () {
      return this.$route.params.username
    }
  },
  created () {
    axiosList.getHomeList()
      .then((res) => {
        this.homeList = res.data.data.billboards
      }).catch((err) => {
        console.log(err)
      })
    axiosList.getHotList()
      .then((res) => {
        this.hotList = res.data.data.films
      }).catch((err) => {
        console.log(err)
      })
    axiosList.getSoonList()
      .then((res) => {
        this.soonList = res.data.data.films
      }).catch((err) => {
        console.log(err)
      })
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
