// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/index';
import { Button, Select, Carousel, CarouselItem, col, row, Message } from 'element-ui';
// import lottie from 'vue-lottie'

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Select);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(col);
Vue.use(row);

// Vue.component('lottie', lottie);

Vue.prototype.$message = Message;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
