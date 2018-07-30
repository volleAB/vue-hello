<template>
  <div id="mine">
    <div class="user">
      <img src="../assets/images/user.jpg" alt="user">
      <swiper class="user-show" :options="swiperOption">
        <swiper-slide class='slide'>
          <div class="user-info">
            <h3>用户详情</h3>
            <ul>
              <li>用户名：{{userName}}</li>
              <li>创建日期：{{creatTime}}</li>
            </ul>
          </div>
        </swiper-slide>
        <swiper-slide class='slide'>
          <div class="user-movie">
            <h3>最喜欢</h3>
            <ul>
              <li v-for="(item, index) in favMovie" :key="index">{{item}}</li>
            </ul>
          </div>
        </swiper-slide>
        <div class="swiper-scrollbar" slot="scrollbar"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
require('../assets/icon/iconfont.css')
require('../assets/scss/login.scss')
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import axios from '../../api/axios'

export default {
  data () {
    return {
      swiperOption: {
        autoHeight: true,
        speed: 400,
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      },
      userName: '',
      creatTime: '',
      favMovie: []
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  created () {
    let data = {
      name: this.$store.state.username
    }
    axios.getOneUser(data)
      .then(({ data }) => {
        console.log(data);
        let reg = /^(2+\d{3})/
        this.userName = data.data.username
        this.creatTime = data.data.create_time.match(reg)[0]
        this.favMovie = data.data.favorite_movie
      })
  },
  methods: {

  }
}
</script>
