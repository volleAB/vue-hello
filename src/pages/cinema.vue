<template>
  <div id="cinema">
    <div class="dateWrap">
      <div class="tabs-bar">
        <ul class="tabs-nav" ref="tabsNav">
          <li v-for="(date, index) in dateList" :key="index" @click="getLeft(index)">
            <span :class="{active : nowDateNav == index}">{{date}}</span>
          </li>
          <div class="tab-bottom" :style="{left: nowLeft + 'px'}"></div>
        </ul>
      </div>
    </div>
    <div class="filter">
      <div class="tab">
        <div class="district" @click="canShowDistructs = !canShowDistructs">
          全城<span class="iconfont icon-down"></span>
        </div>
        <div class="specify">
          最近去过<span class="iconfont icon-down"></span>
        </div>
      </div>
    </div>
    <div class="filter-box">
      <ul class="districts" :class="{showDistructs : canShowDistructs}">
        <li class="district-item" v-for="(value, index) in districtName" :key="index">
          <span>{{value}}</span>
        </li>
      </ul>
    </div>
    <div class="cinemas">
      <div class="cinema-item" v-for="(item, index) in cinemaList" :key="index">
        <div class="item-info" @click="goPay(item.cinemaId)">
          {{item.name}}
          <div class="item-address">{{item.address}}</div>
        </div>
        <div class="price">
          ￥<span>{{item.lowPrice / 100}}</span>起
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axiosList from '../api/list'

export default {
  data () {
    return {
      cinemaList: [],
      dateList: [],
      canShowDistructs: false,
      nowDateNav: 0,
      nowLeft: Number
    }
  },
  computed: {
    districtName() {
      let dNmaeArr = []
      let getDistrictName = () => {
        let newArr = [];
        dNmaeArr.push('全部');
        this.cinemaList.map((value, index) => {
          dNmaeArr.push(this.cinemaList[index].districtName);
        })
        // for(let i = 0; i < dNmaeArr.length; i++) {
        //   if(newArr.indexOf(dNmaeArr[i]) == -1) {
        //     newArr.push(dNmaeArr[i]);
        //   }
        // }
        newArr = [...new Set(dNmaeArr)];
        return newArr;
      }
      return getDistrictName();
    }
  },
  mounted () {
    axiosList.getCinemasList()
      .then((res) => {
        console.log(res);
        this.cinemaList = res.data.cinemas;
      }).catch((err) => {
        console.log(err);
      })
    this.getDateList();
    this.navWidth = this.$refs.tabsNav.offsetWidth / 5;
    console.log(navWidth);
  },
  methods: {
    goPay(id) {
      this.$router.push({name: 'cinemaInfo', params: {id: id}});
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
      date.setDate(date.getDate() + 1);
      d3 = '后天' + (date.getMonth() + 1) + '月' + date.getDate() + '日';
      date.setDate(date.getDate() + 1);
      d4 = weekday[date.getDay()] + (date.getMonth() + 1) + '月' + date.getDate() + '日';
      date.setDate(date.getDate() + 1);
      d5 = weekday[date.getDay()] + (date.getMonth() + 1) + '月' + date.getDate() + '日';
      this.dateList = [d1, d2, d3, d4, d5];
    },
    getLeft(index) {
      this.nowDateNav = index;
      if(this.nowDateNav > 0) {
        console.log(this.navWidth);
        this.nowLeft = this.nowDateNav * this.navWidth + 10;
      } else {
        this.nowLeft = 12;
      }
    }
  }
}
</script>
