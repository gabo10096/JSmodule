import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {path: '/comida'},
]

const router = new Router({
  mode:'history',
  routes
})

Vue.config.productionTip = false

new Vue({
  router, 
  render: h => h(App),
}).$mount('#app')
