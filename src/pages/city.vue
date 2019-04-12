<template>
  <div id="city">
    <div class="header">
      <div class="close iconfont icon-bulb"></div>
      <span>当前城市 - </span>
    </div>
    <div class="hot-city">
      <div class="lable">热门城市</div>
      <el-row class="city-index-detail" :gutter="12">
        <el-col class="city-item-detail" v-for="(item, index) in hotCityList" :key="index" :span="8">
          <div class="grid-content bg-purple">
            {{item.name}}
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="all-city">
      <div class="lable">热门城市</div>
      <el-row class="city-index-detail" :gutter="12">
        <el-col class="city-item-detail" v-for="(item, index) in cityList" :key="index" :span="8">
          <div class="grid-content bg-purple">
            {{item.name}}
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import axiosList from '../api/list'

export default {
  name: 'city',
  data() {
    return {
      cityList: []
    }
  },
  computed: {
    hotCityList: function () {
      return this.cityList.slice(0, 6)
    }
  },
  created() {

  },
  mounted() {
    axiosList.getCityList()
      .then((res) => {
        this.cityList = res.data.cities;
        console.log(this.cityList)
      })
  }
}
</script>

<style lang="scss">
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
</style>

