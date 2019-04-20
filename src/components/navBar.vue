<template>
  <!-- <div class="nav-bar" @click="showNav"> -->
  <div class="nav-bar">
    <el-row :gutter="20">
      <el-col :span="8">
        <router-link :to="{name: 'home'}">
          <!-- <div class="grid-content nav-bar-item" @click="whichNav = 'film'"> -->
          <div class="grid-content nav-bar-item">
            <img :src="whichNav == 'film' ? require('../assets/images/nav_film_active.png') : require('../assets/images/nav_film.png')" alt="">
            <span :class="{'nav-active' : whichNav == 'film'}">电影</span>
          </div>
        </router-link>
      </el-col>
      <el-col :span="8">
        <router-link :to="{name: 'cinemas'}">
          <!-- <div class="grid-content nav-bar-item" @click="whichNav = 'cinema'"> -->
          <div class="grid-content nav-bar-item">
            <img :src="whichNav == 'cinema' ? require('../assets/images/nav_cinema_active.png') : require('../assets/images/nav_cinema.png')" alt="">
            <span :class="{'nav-active' : whichNav == 'cinema'}">影院</span>
          </div>
        </router-link>
      </el-col>
      <el-col :span="8">
        <router-link :to="{name: 'mine'}">
          <!-- <div class="grid-content nav-bar-item" @click="whichNav = 'mine'"> -->
          <div class="grid-content nav-bar-item">
            <img :src="whichNav == 'mine' ? require('../assets/images/nav_mine_active.png') : require('../assets/images/nav_mine.png')" alt="">
            <span :class="{'nav-active' : whichNav == 'mine'}">我的</span>
          </div>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'navBar',
  data() {
    return {
      whichNav: 'film',
      isActive: true
    }
  },
  watch:{
    $route(to,from){
      if (to.path.includes('cinema')) {
        this.whichNav = 'cinema';
      } else if (to.path.includes('mine') || to.path.includes('login')) {
        this.whichNav = 'mine';
      } else {
        this.whichNav = 'film';
      }
      // console.log(to.path);
    }
  },
  methods: {
    showNav: function () {
      this.$emit('isActive', this.isActive);
    }
  }
}
</script>

<style lang="scss">
  .nav-bar {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    z-index: 10;
  }
  .nav-bar-item {
    position: relative;
    height: 50px;
    text-align: center;
    img {
      width: 20px;
      padding-top: 4px;
    }
    span {
      position: absolute;
      top: 28px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 12px;
    }
    .nav-active {
      color: #ff5f16;
    }
  }
</style>
