<template>
  <div id="app">
    <commes></commes>
    <transition name="fade">
      <router-view />
    </transition>
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
.fade-enter-active, .fade-leave-active {
  top: 0;
  transition: all .6s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  position: absolute;
  top: 160px;
  opacity: 0;
}
</style>
