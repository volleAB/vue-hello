<template>
  <div id="film">
    <div class="container">
      <div class="film">
        <div class="film-item clearfix">
          <!-- <img :src="item.poster.origin" :alt="item.name">
          <div class="film-info">
            <h3>{{item.name}}</h3><br/>
            {{item.intro}}<br/>
            <span>{{item.cinemaCount}}家影院上映</span>
            <span>{{item.watchCount}}人购票</span><br/>
            <i class="grade">{{item.grade}}</i>
          </div> -->
          {{filmList}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
require('../assets/scss/film.scss')
import axiosList from '../api/list'

export default {
  data() {
    return {
      newId: '',
      index: Number,
      more: false
    }
  },
  computed: {
    filmList: function() {
      this.$store.state.hotList.map((value, index) => {
        if(this.$store.state.hotList[index].filmId == this.newId)
          return this.index = index;
      })
      return this.$store.state.hotList[this.index];
    }
  },
  mounted () {
    // window.addEventListener('scroll', this.getMore);
    if(this.filmList.length < 1) {
      axiosList.getHotList()
        .then((res) => {
          this.filmList = res.data;
        })
    }
    // console.log(this.filmList);
  },
  created () {
    // document.body.scrollTop = 0;
    this.newId = this.$route.params.id
    console.log(this.newId)
  },
  methods: {

  }
}
</script>
