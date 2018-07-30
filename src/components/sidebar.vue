<template>
  <div id="sidebar" :class="{active: this.$store.state.show}" @click="get">
    <ul>
      <li class="item" v-for="(item, index) in menuList" v-bind:key="index">
        <router-link :to='item.path'>
          <span @click="$store.dispatch('switch_show')">{{item.name}}</span>
          <i class="icon iconfont icon-right"></i>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
require('../assets/icon/iconfont.css')
require('../assets/scss/sidebar.scss')

export default {
  data() {
    let menuList = [
				{
					name:'首页',
					path:'/'
				},
				{
					name:'影片',
					path:'/film/now-playing'
        },
        {
					name:'影院',
					path:'/cinema'
        },
        {
					name:'我的',
					path:'/mine'
				}
      ]
      return {
        menuList: menuList,
        thisActive: Boolean
			}
  },
  props: {
    Active: Boolean
  },
  methods: {
    get: function () {
      console.log(this.thisActive)
    },
    hideSide () {
      this.thisActive = false
      console.log(this.thisActive)
    }
  }
}
</script>
