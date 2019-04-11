<template>
  <div id="app">
    <commes></commes>
    <router-view />
  </div>
</template>

<script>
import commes from './components/message'

export default {
  name: 'App',
  data() {
    return {
      isActive: false
    }
  },
  components: {
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
