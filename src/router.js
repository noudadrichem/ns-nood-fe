import Vue from 'vue'
import Router from 'vue-router'
import Reiziger from './views/reiziger.vue'
import Conducteur from './views/conducteur.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/reiziger'
    },
    {
      path: '/reiziger',
      name: 'reiziger',
      component: Reiziger
    },
    {
      path: '/conducteur',
      name: 'conducteur',
      component: Conducteur
    }
  ]
})
