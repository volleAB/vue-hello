<template>

    <div class="container">
      <div class="film-img">
        <img :src="getFilmList.poster" :alt="getFilmList.name">
      </div>
      <div class="film-info">
        <div class="col">
          <div class="film-name">
            <span>{{getFilmList.name}}</span>
            <span class="item">{{getFilmList.item.name}}</span>
          </div>
          <div class="film-grade grey-text">
            <span>{{getFilmList.grade}}</span>分
          </div>
        </div>
        <div class="film-category grey-text">
          {{getFilmList.category}}
        </div>
        <div class="film-premiere-time grey-text">
          {{getTime(getFilmList.premiereAt)}}
        </div>
        <div class="film-nation-runtime grey-text">
          <span>{{getFilmList.nation}} | </span>
          <span>{{getFilmList.runtime}}</span>
        </div>
        <div class="film-synopsis" :class="{hidden : !isShowSynopsis}">
          {{getFilmList.synopsis}}
        </div>
        <div class="toggle iconfont" :class="[!isShowSynopsis ? 'icon-down' : 'icon-upward']" @click="isShowSynopsis = !isShowSynopsis"></div>
      </div>
      <div class="actors">
        <span class="grey-text">演职人员</span>
        <div class="scrollbar">
          <ul class="actor-info">
            <li class="actor-item" v-for="(actor, index) in getFilmList.actors" :key="index">
              <img :src="actor.avatarAddress" :alt="actor.name">
              <div class="actor-name">
                <span>{{actor.name}}</span>
                <span>{{actor.role}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="photos">
        <span class="grey-text">剧照</span>
        <div class="scrollbar">
          <ul class="photos-info">
            <li class="photos-item">
              <img :src="require('../assets/images/f1.png')" alt="">
            </li>
            <li class="photos-item">
              <img :src="require('../assets/images/f2.png')" alt="">
            </li>
            <li class="photos-item">
              <img :src="require('../assets/images/f3.png')" alt="">
            </li>
            <li class="photos-item">
              <img :src="require('../assets/images/f4.png')" alt="">
            </li>
            <li class="photos-item">
              <img :src="require('../assets/images/f5.png')" alt="">
          </li>
        </ul>
      </div>
    </div>
    <div class="goSchedule" @click="goSchedule">
      <span>选座购票</span>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  data() {
    return {
      isShowSynopsis: false,
      photosList: [],
      canShow: false
    }
  },
  props: {
    getFilmList: {},
    getNewId: Number
  },
  mounted () {
    console.log(this.getFilmList);
    window.addEventListener('scroll', () => {
      let top = document.documentElement.scrollTop;
      if(top > 20) {
        this.canShow = true;
      } else {
        this.canShow = false;
      }
    });
    if(this.getFilmList.length < 1) {
      axiosList.getHotList()
        .then((res) => {
          this.getFilmList = res.data;
        })
    }
    // console.log(this.filmList);
  },
  methods: {
    getTime(date){
      let nowDate, year = new Date();
      year = year.getFullYear();
      nowDate = moment(date).format('MM-DD上映');
      nowDate = year + '-' + nowDate;
      return nowDate;
    },
    goSchedule() {
      this.$router.push({path: `/film/${this.getNewId}/cinemas`})
    }
  }
}

</script>
