<template>
  <div id="city">
    <div class="header clearfix">
      <span class="iconfont icon-close fl" @click="goBack()"></span>
      <span>当前城市 - {{$store.state.city}}</span>
    </div>
    <div class="search">
      <span class="iconfont icon-search"></span>
      <input type="text" placeholder="输入城市名" @click="isSearch = true" v-model="cityName">
      <span  @click="isSearch = false">取消</span>
    </div>
    <div class="hot-city" v-show="!isSearch">
      <div class="lable">热门城市</div>
      <el-row class="city-index-detail" :gutter="12">
        <el-col class="city-item-detail" v-for="(item, index) in hotCityList" :key="index" :span="8">
          <div class="grid-content bg-purple" @click="changeCity(item.name)">
            {{item.name}}
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="all-city" v-show="!isSearch">
      <div class="lable">全部城市</div>
      <el-row class="city-index-detail" :gutter="12">
        <el-col class="city-item-detail" v-for="(item, index) in cityList" :key="index" :span="8" @click="changeCity(item.name)">
          <div class="grid-content bg-purple">
            {{item.name}}
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="search-result">
      <el-row class="city-index-detail" :gutter="12" v-show="!(cityResult == 'Not Found')">
        <el-col class="city-item-detail" v-for="(item, index) in cityResult" :key="index" :span="24" @click="changeCity(item.name)">
          <div class="grid-content bg-purple">
            {{item}}
          </div>
        </el-col>
      </el-row>
      <div class="search-err" v-show="cityResult == 'Not Found'">
        Not Found
      </div>
    </div>
  </div>
</template>

<script>
import axiosList from '../api/list'

export default {
  name: 'city',
  data() {
    return {
      cityList: [],
      cityName: '',
      isSearch: false
    }
  },
  computed: {
    hotCityList: function() {
      return this.cityList.slice(0, 6);
    },
    cityResult: function() {
      let result = [];
      this.cityList.map((value, index) => {
        if(this.cityList[index].name.includes(this.cityName) && this.cityName != '') {
          result.push(this.cityList[index].name);
        }
      })
      if(result.length == 0) {
        return 'Not Found';
      } else {
        return result;
      }
    }
  },
  created() {

  },
  mounted() {
    axiosList.getCityList()
      .then((res) => {
        this.cityList = res.data.cities;
      })
  },
  methods: {
    changeCity(city) {
      this.$store.state.city = city;
      console.log(this.$store.state.city);
    },
    goBack() {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
  .header {
    padding: 8px 4px;
    font-size: 18px;
    color: #000;
    :nth-child(2) {
      padding-top: 6px;
      transform: translateX(-20px);
    }
  }
  .city-item-detail {
    padding: 16px 10px;
    color: #000;
  }
  .grid-content {
    width: 100%;
    overflow: hidden;
    overflow:hidden;
    text-overflow: ellipsis;     //省略号
    white-space: nowrap;    //文本不换行
  }
  .lable {
    padding-left: 20px;
    font-size: 13px;
    color: #797d82;
    text-align: left;
  }
  .icon-close {
    font-size: 36px;
  }
  .search {
    padding: 6px;
    input {
      padding: 4px 0 4px 12px;
      border: none;
      font-size: 16px;
    }
    :nth-child(3) {
      padding-left: 20px;
    }
  }
</style>

