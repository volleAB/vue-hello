<template>
  <div id="pay">
    <div class="container" @click="on = false">
      <img src="../assets/images/pay.jpg" alt="pay">
      <div class="pay-info">
        <div class="cinema-name clearfix">
          <i class="icon iconfont icon-bulb"></i>
          <div class="cinema-location">{{movie}}</div>
        </div>
        <div class="cinema-name clearfix">
          <i class="icon iconfont icon-movie"></i>
          <div class="cinema-location">{{cinema}}</div>
        </div>
        <div class="cinema-name clearfix">
          <i class="icon iconfont icon-ticket"></i>
          <div class="cinema-location">座位：{{row}}行{{col}}列</div>
        </div>
        <div class="cinema-name clearfix">
          <i class="icon iconfont icon-ticket"></i>
          <div class="cinema-location">金额为：50元</div>
        </div>
      </div>
      <div class="box" :class="{block: on}">
        购买成功
      </div>
    </div>
    <div class="buy" @click="on = true">
      购买
    </div>
  </div>
</template>

<script>
require('../assets/scss/pay.scss')

export default {
  data () {
    return {
      col: '',
      row: '',
      moive: '',
      cinema: '',
      on: false
    }
  },
  created () {
    this.col = this.$route.query.col;
    this.row = this.$route.query.row;
    this.movie = this.$store.state.movieName;
    this.cinema = this.$store.state.cinemaName;
    console.log(this.cinema)
  },
  methods: {

  }
}
</script>
