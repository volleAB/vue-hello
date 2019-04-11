<template>
  <transition name="fade">
    <div class="message" v-if="isShow" :class="{errmes: isErr}">
      {{message}}
    </div>
  </transition>
</template>

<script>
export default {
  name: 'message',
    data () {
      return {
        message: '',
        time: 3000,
        isShow: false,
        isErr: false
      }
    },
    mounted () {
      this.close()
    },
    methods: {
      close () {
        let that = this
        if(that.message != that.$store.state.messageGol) {
          this.isShow = true
          that.message = that.$store.state.messageGol
        }
        window.setTimeout(function() {
          that.isShow = false
        }, this.time)
      }
    }
}
</script>

<style type="text/css">
  .message {
    position: fixed;
    max-width: 300px;
    width: 60%;
    padding: 20px 50px;
    color: #000000;
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0px 0px 10px #3ffb3f78;
    top:20%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    animation: mesShow ease-in .6s 1;
  }
  .errmes {
    box-shadow: 0px 0px 10px red;
  }

  @keyframes mesShow {
    from {
      opacity: 0;
      transform: translate(-50%, -120%) rotateX(60deg);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) rotateX(0deg);
    }
  }
</style>
