<template>
  <div id="cinema">
    <div class="container">
      <div class="cinema-banner"></div>
      <div class="cinema-seat"></div>
      <div class="cinema-address"></div>
      <div class="cinema-phone"></div>
      <div class="cinema-tic"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  created () {
    let newId = this.$route.params.id;
    let url = 'https://m.maizuo.com/v4/api/cinema/' + newId + '?__t=1532335419519';
    let ajax
  },
  methods: {

  }
}
</script>
