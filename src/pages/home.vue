<template>
  <div id="home" @scroll="getMoreList()">
    <div class="banner">
      <router-link :to="{name: 'city'}">
        <div class="location">
            <span>{{$store.state.city}}</span>
            <i class="iconfont icon-down"></i>
        </div>
      </router-link>
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
        <ul>
          <li class="select-item" :class="{selected : isHot}" @click="selected()">正在热映</li>
          <li class="select-item" :class="{selected : !isHot}" @click="selected()">即将上映</li>
          <div class="tab-bottom" :class="{tab_bottom_move : !isHot}"></div>
        </ul>
      </div>
      <section class="home-view">
        <!-- loading有点错误 -->
        <div class="loading" v-show="hotList.length < 1">
          <img src="../assets/images/loading.gif" alt="loading">
          <span>加载中...</span>
        </div>
        <div class="hot" v-show="isHot">
          <ul>
            <li class="moive" v-for="(item, index) in hotList" :key="index">
              <router-link :to="{name: 'film', params:{ id: item.filmId }}">
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
              <router-link :to="{name: 'film', params:{ id: item.filmId }}">
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
                    <div class="movie-buy">
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
import 'swiper/dist/css/swiper.css';
import axiosList from '../api/list';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import { mapActions } from 'vuex';

export default {
  name: "home",
  data() {
    return {
      bannerList: [],
      hotList: [],
      soonList: [],
      isHot: true,
      clientHeight: Number,
      update: true,
      getHotList: false
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
  },
  mounted() {
    axiosList.getBannerList()
      .then((res) => {
        this.bannerList = res.data;
      }).catch((err) => {
        console.log(err);
      })
    axiosList.getHotList('1')
      .then((res) => {
        this.getHotList = true;
        this.hotList = res.data.films;
        this.$store.state.hotList = this.hotList;
      }).catch((err) => {
        console.log(err)
      })
    this.openMessage();
    this.clientHeight = document.documentElement.clientHeight;
    // console.log('clientHeight' + this.clientHeight);
    this.$nextTick(() => {
      window.addEventListener('scroll', this.getMoreList);
    })
  },
  destroyed() {
    window.removeEventListener('scroll', this.getMoreList);
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    },
    selected() {
      this.isHot = !this.isHot;
      if(!this.isHot) {
        if(this.soonList < 1) {
         axiosList.getSoonList()
          .then((res) => {
            this.soonList = res.data.films;
          })
        }
      }
    },
    openMessage() {
      const h = this.$createElement;
      this.$message({
          message: h('p', null, [
            h('span', { style: 'color: teal' }, '只用于学习(￣▽￣)／')
          ])
        });
    },
    getMoreList() {
      if(document.documentElement.scrollTop > this.clientHeight - 380 && this.update) {
          axiosList.getHotList('2')
            .then((res) => {
              this.hotList.push(...res.data.films);
              console.log(this.hotList);
            }).catch((err) => {
              console.log(err);
            })
          this.update = false;
        }
    }
  }
}
</script>
