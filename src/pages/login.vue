<template>
  <div id="login">
    <lottie :options="defaultOptions" :height="200" :width="200" v-on:animCreated="handleAnimation"/>
    <div class="login-item" :class="{loginUp: login}">
      <div class="form-group">
        <input type="text" placeholder="输入手机号" v-model="loginForm.name">
        <div class="input-bg"></div>
      </div>
      <div class="form-group">
        <input type="password" placeholder="输入密码" v-model="loginForm.pass">
        <div class="input-bg"></div>
      </div>
      <button @click="submitForm()">登录</button>
      <button class="register" @click="goRegister">去注册</button><br/>
      <span class="err">{{err}}</span>
    </div>
    <div class="register-item" :class="{loginUp: !login}">
      <div class="form-group">
        <input type="text" placeholder="输入手机号" v-model="registerForm.name">
        <div class="input-bg"></div>
      </div>
      <div class="form-group">
        <input type="password" placeholder="输入密码" v-model="registerForm.pass">
        <div class="input-bg"></div>
      </div>
      <div class="form-group">
        <input type="password" placeholder="确认密码" v-model="registerForm.checkPass">
        <div class="input-bg"></div>
      </div>
      <button @click="registerIt">注册</button>
      <button class="register" @click="goRegister">去登录</button><br/>
      <span class="err">{{err}}</span>
    </div>
  </div>
</template>

<script>
require('../assets/scss/login.scss');
import Lottie from 'vue-lottie';
import axios from '../api/axios.js';
import * as lottieLogin from '../assets/icon/login.json';

export default {
  data () {
      return {
        defaultOptions: {animationData: lottieLogin, loop: true},
        err: '',
        loginForm: {
          name: '',
          pass: '',
          checkPass: '',
        },
        registerForm: {
          name: '',
          pass: '',
          checkPass: '',
        },
        login: true
      }
  },
  components: {
    'lottie': Lottie
  },
  methods: {
    submitForm() {
      let reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
      //登录
      if (reg.test(this.loginForm.name) && this.loginForm.pass!='') {
        this.$store.state.loginState = true;
        axios.userLogin(this.loginForm)
          .then(({ data }) => {
            //账号不存在
            if (data.info === false) {
              this.err = '账号不存在';
              this.$store.dispatch('switch_mes', this.err);
              return
            }
            if (data.success) {
              //拿到返回的token和username，并存到store
              let token = data.token;
              let username = data.username;
              this.$store.state.username = data.username;
              this.$store.dispatch('UserLogin', token);
              this.$store.dispatch('UserName', username);
              this.$store.dispatch('SetCookieUserName', username);
              //跳到目标页
              this.$router.push({name: 'mine'});
            }
          });
      } else {
        console.log('error submit!!');
        this.err = '手机号不正确或者密码为空';
        return false
      }
    },
    goRegister () {
      this.login = !this.login;
    },
    registerIt () {
      let reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
      //注册
      if (reg.test(this.registerForm.name)&&this.registerForm.pass!=''&&this.registerForm.checkPass==this.registerForm.pass) {
        axios.userRegister(this.registerForm)
        .then(({ data }) => {
          console.log(data);
          if(data.success) {
            console.log('注册成功');
          }
          this.err = '注册成功';
        })
      } else {
        console.log('error submit!!');
        this.err = '手机号不正确或者密码确认错误';
        return
      }
    },
    handleAnimation: function (anim) {
      this.anim = anim;
    }
  }
}
</script>
