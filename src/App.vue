<template>
  <div id="app">
    <comheader @isActive="setActive"></comheader>
    <commes></commes>
    <router-view />
    <comsidebar :Active="isActive" ref="aName"></comsidebar>
  </div>
</template>

<script>
import comheader from './components/header'
import comsidebar from './components/sidebar'
import commes from './components/message'

export default {
  name: 'App',
  data() {
    return {
      isActive: false
    }
  },
  components: {
    comheader,
    comsidebar,
    commes
  },
  methods: {
    setActive(data) {
      this.isActive = data;
      console.log(this.isActive);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
