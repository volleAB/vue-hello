import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import Film from '../pages/film'
import FilmDetail from '../pages/filmDetail'
import Mine from '../pages/mine'
import Cinema from '../pages/cinema'
import CinemaInfo from '../pages/cinemaInfo'
import Pay from '../pages/pay'
import Login from '../pages/login'
import City from '../pages/city'
import store from '../store/index'
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
    path: '/film/:id',
    component: Film,
    children: [
      {
        path: '',
        name: 'film',
        component: FilmDetail,
        meta: {
          title: '电影'
        }
      },
      {
        path: 'cinemas',
        name: 'cinema',
        component: Cinema,
        meta: {
          title: '影院'
        }
      },
    ]
  },
  {
    path: '/cinemas',
    name: 'cinemas',
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
    },
    beforeEnter: (to, from, next) => {
      let token = store.state.token;
      let username = store.state.username;
      if(token == null || username == '') {
        return next({path: '/login'});
      }
      next();
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
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/city',
    name: 'city',
    component: City,
    meta: {
      title: '城市'
    }
  }
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
    document.title = to.meta.title;
  }
  // let token = store.state.token;
  // if(to.meta.title == '个人中心' && token) {
  //   return next();
  // } else {
  //   return next({path: '/login'});
  // }
  next();
})

export default router;
