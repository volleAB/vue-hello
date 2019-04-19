<template>
  <div id="mine">
    <img src="../assets/images/b1.jpeg" alt="user">
    <div class="user-show">
      <div class="user-pic">
        <img src="../assets/images/user.jpg" alt="user">
      </div>
      <div class="user-info">
        <h3>用户详情</h3>
        <ul>
          <li>用户名：{{userName}}</li>
          <li>创建日期：{{creatTime}}</li>
          <li>电影票：{{filmTics}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
require('../assets/icon/iconfont.css')
require('../assets/scss/login.scss')
import axios from '../api/axios'

export default {
  data () {
    return {
      swiperOption: {
        autoHeight: true,
        speed: 400,
      },
      userName: '',
      creatTime: '',
      filmTics: []
    }
  },
  components: {
  },
  mounted () {
    let data = {
      name: this.$store.state.username
    }
    console.log(this.$store.state.username);
    axios.getOneUser(data)
      .then(({ data }) => {
        console.log(data);
        let reg = /^(2+\d{3})/
        this.userName = data.data.username
        this.creatTime = data.data.create_time.match(reg)[0]
        this.favMovie = data.data.favorite_movie
      })
  },
  methods: {

  }
}
</script>
