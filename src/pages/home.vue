<template>
  <div id="home">
    <div class="banner">
      <div class="location">
        <span>武汉</span>
        <i class="iconfont icon-bottom"></i>
      </div>
      <el-carousel class="banner-swiper" trigger="click" height="54vw" arrow="never">
        <el-carousel-item  class='slide' v-for="item in bannerList" :key="item.bannerId">
          <a target='_blank' :href="item.actionData">
						<img :src="item.imgUrl" alt="">
					</a>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="container">
      <div class="select-type">
        <div class="select-item">
          <span :class="{selected : isHot}" @click="selected()">正在热映</span>
        </div>
        <div class="select-item">
          <span :class="{selected : !isHot}" @click="selected()">即将上映</span>
        </div>
      </div>
      <section class="home-view">
        <div class="hot">
          <ul>
            <li class="moive" v-for="(item, index) in hotList" :key="index">
              <router-link :to="{name: 'detail', params:{ id: item.filmId }}">
                <div class="movie-item">
                  <div class="movie-item-img">
                    <img :src="item.poster" :alt="item.name">
                  </div>
                  <div class="movie-item-info">
                    <div class="movie-item-info-col">
                      <span class="name">{{item.name}}</span>
                      <span class="item">{{item.item.name}}</span>
                    </div>
                    <div class="movie-item-info-col">
                      <span>观众评分</span>
                      <span> {{item.grade}}</span>
                    </div>
                    <div class="movie-item-info-col">
                      <span class="lable">主演：</span>
                      <div class="movie-item-actors">
                        <span class="movie-item-actor" v-for="(actor, index) in item.actors" :key="index">
                          {{actor.name}}
                        </span>
                      </div>
                    </div>
                    <div class="movie-item-info-col">
                      <span>{{item.nation}} | </span>
                      <span>{{item.runtime}}分钟</span>
                    </div>
                    <div class="movie-buy">
                      购票
                    </div>
                  </div>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="soon" v-show="!isHot">
          <ul>
            <li class="moive" v-for="(item, index) in soonList" :key="index">
              <router-link :to="{name: 'detail', params:{ id: item.filmId }}">
                <div class="movie-item">
                  <div class="movie-item-img">
                    <img :src="item.poster" :alt="item.name">
                  </div>
                  <div class="movie-item-info">
                    <div class="movie-item-info-col">
                      <span class="name">{{item.name}}</span>
                      <span class="item">{{item.item.name}}</span>
                    </div>
                    <div class="movie-item-info-col">
                      <span class="lable">主演：</span>
                      <div class="movie-item-actors">
                        <span class="movie-item-actor" v-for="(actor, index) in item.actors" :key="index">
                          {{actor.name}}
                        </span>
                      </div>
                    </div>
                    <div class="movie-order">
                      预约
                    </div>
                  </div>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
require('../assets/scss/home.scss');
import 'swiper/dist/css/swiper.css'
import axiosList from '../api/list'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { mapActions } from 'vuex'

export default {
  name: "home",
  data() {
    return {
      bannerList: [],
      hotList: [],
      soonList: [],
      isHot: true
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    username () {
      return this.$route.params.username;
    }
  },
  created () {
    axiosList.getBannerList()
      .then((res) => {
        this.bannerList = res.data;
        console.log(this.bannerList);
      }).catch((err) => {
        console.log(err)
      })
    axiosList.getHotList('1')
      .then((res) => {
        this.hotList = res.data.films;
        console.log(this.hotList);
      }).catch((err) => {
        console.log(err)
      })
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    },
    selected() {
      this.isHot = !this.isHot;
    }
  }
}
</script>
