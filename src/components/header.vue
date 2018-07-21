<template>
  <div id="header">
    <div class="menu" @click="showNav"><i class="icon iconfont icon-menu"></i></div>
    <div class="my-icon">
      <p>{{title}}</p>
    </div>
    <div class="right-item">
      <div class="city">武汉<i class="icon iconfont icon-bottom"></i></div>
      <router-link :to="{name: 'mine'}">
        <div class="mine">
          <i class="icon iconfont icon-people"></i>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
require('../assets/icon/iconfont.css');
require('../assets/sass/header.sass');
export default {
  data() {
    return{
      title: "卖座电影",
      isActive: false
    }
  },
  methods: {
    showNav: function () {
      if(this.isActive) {
        this.isActive = false;
      }else {
        this.isActive = true;
      }
      // console.log(this.isActive);
      this.$emit('isActive', this.isActive);
    }
  }
}
</script>
