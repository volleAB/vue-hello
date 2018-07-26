<template>
  <div id="mine">
    <div class="user">
      <img src="../assets/images/user.jpg" alt="user">
      <swiper class="user-show" :options="swiperOption">
        <swiper-slide class='slide'>
          <div class="user-info">用户详情</div>
        </swiper-slide>
        <swiper-slide class='slide'>
          <div class="user-movie">最喜欢</div>
        </swiper-slide>
        <div class="swiper-scrollbar"   slot="scrollbar"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
require('../assets/icon/iconfont.css')
require('../assets/scss/login.scss')
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'


export default {
  data () {
    return {
      swiperOption: {
        autoHeight: true,
        speed: 400,
        scrollbar: {
    el: '.swiper-scrollbar',
  },
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  created () {
      console.log(this.$route.query.id);
  },
  methods: {

  }
}
</script>
