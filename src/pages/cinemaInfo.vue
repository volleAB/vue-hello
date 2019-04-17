<template>
  <div id="cinema">
    <div class="film-header" :class="{show : canShow}">
      <div class="goBack" @click="goBack()">
        <span class="iconfont icon-close"></span>
      </div>
      <div class="title">{{cinemaInfo.name}}</div>
    </div>
    <div class="cinema-name">
      <span>{{cinemaInfo.name}}</span>
    </div>
    <div class="cinema-address">
      <span class="iconfont icon-address"></span>
      <div class="cinema-location">{{cinemaInfo.address}}</div>
    </div>
    <div class="cinema-phone">
      <span class="iconfont icon-addto"></span>
      <div class="cinema-tel">
        {{cinemaInfo.phone}}
      </div>
    </div>
    <div class="cinema-film-item">
      <div class="cinema-film-poster">
        <img :src="filmInfo.poster" :alt="filmInfo.name">
      </div>
      <div class="cinema-film-info">
        <div class="cinema-film-name">
          <span>{{filmInfo.name}}</span>
          <span>{{filmInfo.grade}}分</span>
        </div>
        <div class="cinema-film-main">
          <span>{{filmInfo.category}} |</span>
          <span>{{filmInfo.runtime}}分钟 |</span>
          <span>{{filmInfo.director}} |</span>
          <div class="cinema-film-actors">
            <span v-for="(actor, index) in filmInfo.actors" :key="index">
              {{actor.name}}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="dateWrap">
      <ul class="tabs-nav" ref="tabsNav">
        <li v-for="(date, index) in dateList" :key="index">
          <!-- <span :class="{active : nowDateNav == index}">{{date}}</span> -->
          <span>{{date}}</span>
        </li>
        <div class="tab-bottom" :style="{left: nowLeft + 'px'}"></div>
      </ul>
    </div>
    <div class="play-time">
      <span>{{filmInfo.filmType.name}}</span>
      <span>{{filmInfo.language}}</span>
      <span>￥{{cinemaInfo.lowPrice / 100}}起</span>
    </div>
    <div class="cinema-seat">
      <i class="icon iconfont icon-seat"></i>
      <div class="go-seat">
        <h3>订座票</h3>
        <span>选好场次及座位，到影院自助机取票</span>
        <button @click="on = true,err = ''">立即订座</button>
      </div>
    </div>
    <div class="cinema-buy" @click="goPay">立即下单</div>
  </div>
</template>

<script>
require('../assets/scss/cinema.scss')
import axiosList from '../api/list'

export default {
  data () {
    return {
      cinemaInfo: {},
      filmInfo: {},
      on: false,
      canShow: false,
      dateList: [],
      nowLeft: Number
    }
  },
  // create() {

  // },
  mounted() {
    this.cinemaInfo = this.$store.state.cinema;
    this.filmInfo = this.$store.state.hotList[this.$store.state.filmIndex];
    this.getDateList()
    window.addEventListener('scroll', () => {
      let top = document.documentElement.scrollTop;
      if(top > 20) {
        this.canShow = true;
      } else {
        this.canShow = false;
      }
    });
  },
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
      this.on = false;
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
    },
    goBack() {
      window.history > 1 ? this.$router.go(-1) : this.$router.push('/');
    },
    getDateList() {
      let date = new Date();
      let d1, d2, d3, d4, d5;
      let weekday=new Array(7);
      weekday[0]="周天";
      weekday[1]="周一";
      weekday[2]="周二";
      weekday[3]="周三";
      weekday[4]="周四";
      weekday[5]="周五";
      weekday[6]="周六";
      d1 = '今天' + (date.getMonth() + 1) + '月' + date.getDate() + '日';
      date.setDate(date.getDate() + 1);
      d2 = '明天' + (date.getMonth() + 1) + '月' + date.getDate() + '日';
      date.setDate(date.getDate() + 1);
      d3 = '后天' + (date.getMonth() + 1) + '月' + date.getDate() + '日';
      this.dateList = [d1, d2, d3];
    }
  }
}
</script>
