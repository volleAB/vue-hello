<template>
  <div id="app">
    <comheader @isActive="setActive"></comheader>
    <router-view />
    <comsidebar :Active="isActive" ref="aName"></comsidebar>
  </div>
</template>

<script>
import comheader from './components/header'
import comsidebar from './components/sidebar'

export default {
  name: 'App',
  data() {
    return {
      isActive: false
    }
  },
  components: {
    comheader,
    comsidebar
  },
  methods: {
    setActive(data) {
      this.isActive = data;
      console.log(data);
    },
    // hideHeader() {

    // }
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
