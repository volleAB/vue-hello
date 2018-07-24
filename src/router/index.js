import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import Film from '../pages/film'
import Detail from '../pages/detail'
import Mine from '../pages/mine'
import Cinema from '../pages/cinema'
import CinemaInfo from '../pages/cinemaInfo'
import Pay from '../pages/pay'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

// export default new Router({
//   routes: [
//     // {
//     //   path: '/',
//     //   name: 'HelloWorld',
//     //   component: HelloWorld
//     // },
//     {
//       path: '/',
//       name: 'home',
//       component: require('../pages/home')//() => import('../pages/home')
//     },
//     {
//       path: '/film',
//       name: 'film',
//       component: require('../pages/film')//() =>import('../pages/film')
//     }
//   ]
// })

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/film/:type',
    name: 'film',
    component: Film,
    meta: {
      title: '电影'
    }
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail,
    meta: {
      title: '详情页'
    }
  },
  {
    path: '/cinema',
    name: 'cinema',
    component: Cinema,
    meta: {
      title: '影院'
    }
  },
  {
    path: '/cinema/:id',
    name: 'cinemaInfo',
    component: CinemaInfo,
    meta: {
      title: '影院'
    }
  },
  {
    path: '/mine',
    name: 'mine',
    component: Mine,
    meta: {
      title: '个人中心'
    }
  },
  {
    path: '/pay',
    name: 'pay',
    component: Pay,
    meta: {
      title: '支付中心'
    }
  },
]

const router = new Router({
  routes
})

const app = new Vue({
  router
}).$mount('#app')

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router;
