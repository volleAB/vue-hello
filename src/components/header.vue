<template>
  <div id="header">
    <div class="menu" @click="$store.dispatch('switch_show')"><i class="icon iconfont icon-menu"></i></div>
    <div class="my-icon">
      <p>{{title}}</p>
    </div>
    <div class="right-item">
      <div class="city">武汉<i class="icon iconfont icon-bottom"></i></div>
      <div class="mine" @click="goMine">
        <i class="icon iconfont icon-people"></i>
      </div>
    </div>
  </div>
</template>

<script>
require('../assets/icon/iconfont.css');
require('../assets/scss/header.scss');
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
        this.isActive = false
      }else {
        this.isActive = true
      }
      // console.log(this.isActive);
      this.$emit('isActive', this.isActive)
    },
    goMine () {
      console.log(this.$store.state.loginState)
      if(this.$store.state.loginState) {
        this.$router.push({name: 'mine'})
      }else {
        this.$router.push({name: 'login'})
      }
    }
  }
}
</script>
