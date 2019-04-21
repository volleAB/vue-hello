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
          <li>创建日期：{{creatTime}}年</li>
          <li>
            电影票：{{filmTics.length}}张
            <el-button type="text" @click="check = true">查看</el-button>
          </li>
        </ul>
      </div>
      <!-- <div> -->
        <div class="filmTic" :class="{active : check}">
          <div class="filmTic-list-box">
            <ul class="filmTic-list">
              <li class="filmTic-list-item" v-for="(tic, index) in filmTics" :key="index" :class="{hidden : !tic.effective}">
                <div class="tic-info">
                  {{tic.date}}
                  {{tic.row}}排
                  {{tic.col}}号
                  {{tic.movie}}
                  {{tic.cinema}}
                  {{tic.price}}元
                </div>
                <el-button type="danger" @click="delTic(index)">退票</el-button>
              </li>
            </ul>
          </div>
          <div class="filmTic-close" @click="check = false">
            <span class="iconfont icon-close"></span>
          </div>
        </div>
      <!-- </div> -->

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
      filmTics: [],
      check: false
    }
  },
  components: {
  },
  mounted () {
    let data = {
      name: this.$store.state.username
    }
    // console.log(this.$store.state.username);
    axios.getOneUser(data)
      .then(({ data }) => {
        console.log(data);
        let reg = /^(2+\d{3})/;
        this.userName = data.data.username;
        this.creatTime = data.data.create_time.match(reg)[0];
        this.filmTics = data.data.film_tickets;
      })
  },
  methods: {
    delTic(index) {
      let data = {
        name: this.$store.state.username,
        index
      }
      axios.delFilmTicket(data)
        .then((res) => {
          console.log(res);
          this.filmTics.splice([data.index], 1);
        }, (err) => {
          console.log(err);
        })
    }
  }
}
</script>
