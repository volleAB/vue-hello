<template>
  <div id="sidebar" :class="{active: Active}" @click="get">
    <ul>
      <li class="item" v-for="(item, index) in menuList" v-bind:key="index">
        <router-link :to='item.path'>
          <span>{{item.name}}</span>
          <i class="icon iconfont icon-right"></i>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
require('../assets/icon/iconfont.css')
require('../assets/sass/sidebar.sass')

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
			}
  },
  props: {
    Active: Boolean
  },
  methods: {
    get: function () {
      console.log(this.Active);
    }
  }
}
</script>
