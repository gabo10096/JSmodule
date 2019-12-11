import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component:  () => import('./views/Home.vue'),
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('./views/Admin.vue'),
      meta:{
        requiresAuth: true,
        is_admin: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/dashboard',
      name: 'userboard',
      component: () => import('./views/UserBoard.vue'),
      meta:{
        requiresAuth: true
      }
    },
  ]
})

router.beforeEach((to,from,next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem('jwt')) {
      next({
        path: '/login'
      })
    }else{
      let user = JSON.parse(localStorage.getItem('user'))
      console.log(user)
      if (to.matched.some(record => record.meta.is_admin)) {
        if (user.roles.includes('admin')) {
          next()
        }else{
          next({name:'userboard'})
        }
      }else{
        next()
      }
    }
  }else{
    next()
  }
})

export default router