<template>
  <div id="pay">
    <lottie :options="defaultOptions" :height="200" :width="200" v-on:animCreated="handleAnimation"/>
    <div class="pay-info">
      <div class="pay-info-item">
        <span class="iconfont icon-address"></span>
        <span>{{cinema}}</span>
      </div>
      <div class="pay-info-item">
        <span class="iconfont icon-conversation"></span>
        <span>{{movie}}</span>
      </div>
      <div class="pay-info-item">
        <span class="iconfont icon-history"></span>
        <span>{{date}}</span>
      </div>
      <div class="pay-info-item">
        <span class="iconfont icon-face"></span>
        <span>{{row}}排{{col}}号</span>
      </div>
      <div class="pay-info-item">
        <span class="iconfont icon-safety"></span>
        <span>{{price}}元</span>
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
      col: '',
      row: '',
      moive: '',
      cinema: '',
      price: parseInt((Math.random() + 1) * 60),
      defaultOptions: {animationData: lottiePay, loop: true}
    }
  },
  components: {
    Lottie
  },
  created () {
    this.col = this.$route.query.info.col;
    this.row = this.$route.query.info.row;
    this.movie = this.$route.query.info.movieName;
    this.cinema = this.$route.query.info.cinemaName;
    this.date = this.$route.query.info.date;
    // console.log(this.$route.query);
  },
  methods: {
    handleAnimation(anim) {
      this.anim = anim;
    },
    payTic() {
      // axios.addFilmTicket
      this.$message({
        message: '恭喜你，支付成功',
        type: 'success'
      });
      this.$router.push({name: 'home'});
    }
  }
}
</script>
