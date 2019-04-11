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
import axiosList from '../api/list'

export default {
  data () {
    return {
      cinemaList: []
    }
  },
  created () {
    axiosList.getCinemaList()
      .then((res) => {
        this.cinemaList = res.data.data.cinemas;
        this.cinemaList.splice(21, 90)
      }).catch((err) => {
        console.log(err)
      })
  },
  methods: {
    goPay (id) {
      this.$router.push({name: 'cinemaInfo', params: {id: id}})
    }
  }
}
</script>
