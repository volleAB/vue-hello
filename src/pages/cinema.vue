<template>
  <div id="cinema">
    <div class="container">
      <div class="cinema-item" v-for="(item, index) in cinemaList" :key="index">
        <div class="item-info" @click="goPay(item.id)">
          {{item.name}}
          <div class="item-address">{{item.address}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
require('../assets/scss/cinema.scss')
import axios from 'axios'

export default {
  data () {
    return {
      cinemaList: []
    }
  },
  created () {
    let url = 'v4/api/cinema?__t=1532321869522';
    let ajax = (method, url) => {
      return axios({
        method: method,
        baseURL: '/api',
        url: url
      })
    }
    let getCinemaList = new ajax('get', url)
      .then((res) => {
        this.cinemaList = res.data.data.cinemas;
        this.cinemaList.splice(21, 90)
        console.log(this.cinemaList);
      }).catch((err) => {
        console.log(err);
      })
  },
  methods: {
    goPay (id) {
      this.$router.push({name: 'cinemaInfo', params: {id: id}});
    }
  }
}
</script>
