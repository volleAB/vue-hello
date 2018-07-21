<template>
  <div id="film">
    <div class="container">
      <div class="film">
        <div class="film-item" v-for="(item, index) in typeList" :key="index">
          {{item.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      typeList: []
    }
  },
  created () {
    let newType = this.$route.params.type;
    // console.log(newType);
    let url = '/v4/api/film/' + newType + '?__t=1532160378830&page=1&count=5'
    let ajax = (method, url) => {
      return axios({
          method: method,
          baseURL: '/api',
          url: url
        })
    }
    let getTypeList = new ajax('get', url)
      .then((res) => {
        console.log(res);
        this.typeList = res.data.data.films;
      }).catch((err) => {
        console.log(err);
      })
  },
  methods: {

  }
}
</script>
