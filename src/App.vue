<template>
  <div id="app">
    <!-- <commes></commes> -->
    <transition name="fade">
      <router-view />
    </transition>
    <!-- <navBar :class="{hidden : isHidden}" @isActive="test"></navBar> -->
    <navBar :class="{navBarhidden : isHidden}"></navBar>
  </div>
</template>

<script>
import commes from './components/message'
import navBar from './components/navBar'

export default {
  name: 'App',
  data() {
    return {
      isHidden: false
    }
  },
  components: {
    // commes,
    navBar
  },
  watch:{
    $route(to, from){
      if(to.path.includes('film')) {
        this.isHidden = true;
      } else {
        this.isHidden = false;
      }
    }
  },
  computed: {
  },
  mounted() {

  },
  methods: {
    test(data) {
      this.isHidden = data;
      console.log(this.isHidden);
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
.navBarhidden {
  visibility: hidden;
}
</style>
