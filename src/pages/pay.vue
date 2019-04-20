<template>
  <div id="pay">
    <lottie :options="defaultOptions" :height="200" :width="200" v-on:animCreated="handleAnimation"/>
    <div class="pay-info">
      <div class="pay-info-item">
        <span class="iconfont icon-address"></span>
        <span>{{payInfo.cinema}}</span>
      </div>
      <div class="pay-info-item">
        <span class="iconfont icon-conversation"></span>
        <span>{{payInfo.movie}}</span>
      </div>
      <div class="pay-info-item">
        <span class="iconfont icon-history"></span>
        <span>{{payInfo.date}}</span>
      </div>
      <div class="pay-info-item">
        <span class="iconfont icon-face"></span>
        <span>{{payInfo.row}}排{{payInfo.col}}号</span>
      </div>
      <div class="pay-info-item">
        <span class="iconfont icon-safety"></span>
        <span>{{payInfo.price}}元</span>
      </div>
    </div>
    <el-button type="success" round class="pay" @click="payTic">购买</el-button>
  </div>
</template>

<script>
require('../assets/scss/pay.scss')
import axios from '../api/axios'
import Lottie from 'vue-lottie';
import * as lottiePay from '../assets/icon/pay.json';


export default {
  data () {
    return {
      payInfo: {
        name: this.$store.state.username,
        col: '',
        row: '',
        moive: '',
        cinema: '',
        price: parseInt((Math.random() + 1) * 60),
        date: '',
        effective: true
      },
      defaultOptions: {animationData: lottiePay, loop: true}
    }
  },
  components: {
    Lottie
  },
  created () {
    this.payInfo.col = this.$route.query.info.col;
    this.payInfo.row = this.$route.query.info.row;
    this.payInfo.movie = this.$route.query.info.movieName;
    this.payInfo.cinema = this.$route.query.info.cinemaName;
    this.payInfo.date = this.$route.query.info.date;
    // console.log(this.$route.query);
  },
  methods: {
    handleAnimation(anim) {
      this.anim = anim;
    },
    payTic() {
      axios.addFilmTicket(this.payInfo)
        .then((res) => {
          console.log(res);
        }, (err) => {
          console.log(err);
        })
      this.$message({
        message: '恭喜你，支付成功',
        type: 'success'
      });
      this.$router.push({name: 'home'});
    }
  }
}
</script>
