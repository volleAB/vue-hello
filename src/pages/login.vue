<template>
  <div id="login">
    <div class="login-item">
      <div class="form-group">
        <input type="text" placeholder="输入手机号" v-model="phoneNum">
        <div class="input-bg"></div>
      </div>
      <div class="form-group">
        <input type="password" placeholder="输入密码" v-model="passWord">
        <div class="input-bg"></div>
      </div>
      <button @click="submit">登录</button>
    </div>
    <span class="err">{{err}}</span>
  </div>
</template>

<script>
require('../assets/scss/login.scss')

export default {
  data () {
      return {
        phoneNum: '',
        passWord: '',
        err: ''
      }
  },
  methods: {
    submit () {
      let reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;//检测手机号
      if(reg.test(this.phoneNum)) {
        this.$router.push({name: 'mine', query: {id: '123'}});
      }else {
        this.err = '请输入正确的手机号！！！';
        // console.log(reg.test(this.phoneNum));
      }
    }
  }
}
</script>
