<template>
<div id="film">
  <div class="film-header" :class="{show : canShow}">
    <div class="goBack" @click="goBack()">
      <span class="iconfont icon-close"></span>
    </div>
    <div class="title">{{filmList.name}}</div>
  </div>
  <router-view :getFilmList="filmList" :getNewId="newId"/>
</div>

</template>

<script>
require('../assets/scss/film.scss')
import axiosList from '../api/list'

export default {
  data() {
    return {
      canShow: false
    }
  },
  computed: {
    filmList: function() {
      this.$store.state.hotList.map((value, index) => {
        if(this.$store.state.hotList[index].filmId == this.newId)
          return this.index = index;
      })
      // console.log(this.$store.state.hotList);
      return this.$store.state.hotList[this.index];
    }
  },
  created () {
    // document.body.scrollTop = 0;
    this.newId = this.$route.params.id;
    console.log(this.newId);
  },
  mounted () {
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
    goBack() {
      window.history > 1 ? this.$router.go(-1) : this.$router.push('/');
    },
  }
}
</script>
