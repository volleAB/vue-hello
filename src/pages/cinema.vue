<template>
  <div id="cinema">
    {{this.districtName}}
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
  computed: {
    districtName() {
      let dNmaeArr = []
      let getDistrictName = () => {
        let newArr = [];
        this.cinemaList.map((value, index) => {
          dNmaeArr.push(this.cinemaList[index].districtName);
        })
        // for(let i = 0; i < dNmaeArr.length; i++) {
        //   if(newArr.indexOf(dNmaeArr[i]) == -1) {
        //     newArr.push(dNmaeArr[i]);
        //   }
        // }
        newArr = [...new Set(dNmaeArr)];
        return newArr;
      }
      return getDistrictName();
    }
  },
  mounted () {
    axiosList.getCinemasList()
      .then((res) => {
        console.log(res);
        this.cinemaList = res.data.cinemas;
      }).catch((err) => {
        console.log(err);
      })
  },
  methods: {
    goPay (id) {
      this.$router.push({name: 'cinemaInfo', params: {id: id}})
    }
  }
}
</script>
