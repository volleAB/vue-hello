<template>
  <div id="mine">
    <div class="user">
      <img src="../assets/images/user.jpg" alt="user">
      <div class="user-show">
        <div class='slide'>
          <div class="user-info">
            <h3>用户详情</h3>
            <ul>
              <li>用户名：{{userName}}</li>
              <li>创建日期：{{creatTime}}</li>
              <li>喜爱：</li>
            </ul>
          </div>
        </div>
        <div class='slide'>
          <div class="user-movie">
            <h3>最喜欢</h3>
            <ul>
              <li v-for="(item, index) in favMovie" :key="index">{{item}}</li>
            </ul>
          </div>
        </div>
        <div class="swiper-scrollbar" slot="scrollbar"></div>
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
      favMovie: []
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
