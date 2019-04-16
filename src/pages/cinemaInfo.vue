<template>
  <div id="cinema">
    <!-- <div class="container">
      <div class="cinema-banner">
        <img src="../assets/images/cinema.png" alt="">
      </div>
      <div class="cinema-name clearfix">
        <i class="icon iconfont icon-movie"></i>
        <div class="cinema-location">{{cinemaInfo.name}}</div>
      </div>
      <div class="cinema-seat clearfix">
        <i class="icon iconfont icon-seat"></i>
        <div class="go-seat">
          <h3>订座票</h3>
          <span>选好场次及座位，到影院自助机取票</span>
          <button @click="on = true,err = ''">立即订座</button>
        </div>
      </div>
      <div class="cinema-address clearfix">
        <i class="icon iconfont icon-location"></i>
        <div class="cinema-location">{{cinemaInfo.address}}</div>
      </div>
      <div class="cinema-phone clearfix">
        <i class="icon iconfont icon-phone"></i>
        <div class="cinema-tel">
          {{cinemaInfo.telephones[0]}}
        </div>
      </div>
      <div class="choice" :class="{block: on}">
        您的座位：<br/>
        <input type="text" v-model="row">行
        <input type="text" v-model="col">列
        <button @click="goGet">提交</button>
        <div class="choice-err">
          {{mes}}
        </div>
      </div>
      <div class="err">
        {{err}}
      </div>
      <div class="cinema-buy" @click="goPay">立即下单</div>
    </div> -->
  </div>
</template>

<script>
// require('../assets/scss/cinema.scss')
import axiosList from '../api/list'

export default {
  data () {
    return {
      cinemaInfo: [],
      on: false,
      mes: '',
      err: ''
    }
  },
  // mounted() {
  //   let newId = this.$route.params.id;
  //   axiosList.getCinemaInfo(newId)
  //     .then((res) => {
  //       this.cinemaInfo = res.data.data.cinema
  //     }).catch((err) => {
  //       console.log(err)
  //     })
  // },
  methods: {
    goGet (el) {
      let reg = /^[0-9]{1,2}/
      this.mes = ''
      if(!this.col || !this.row) {
        this.on = true
        this.mes = "请填写行列！！！"
        return
      }else if(!reg.test(this.col) || !reg.test(this.row)) {
        this.on = true
        this.mes = "请填写两位数数字！！！"
        return
      }
      console.log(this.col, this.row);
      this.on = false
    },
    goPay () {
      if(!this.col || !this.row) {
        this.err = "请填写座次！！！"
        return
      }else if(this.$store.state.movieName == '') {
        return
      }
      this.$store.state.cinemaName = this.cinemaInfo.address
      this.$router.push({name: 'pay', query: {col: this.col, row: this.row}})
    }
  }
}
</script>
