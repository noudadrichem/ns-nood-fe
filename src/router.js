import Vue from 'vue'
import Router from 'vue-router'
import Reiziger from './views/reiziger.vue'
import Conducteur from './views/conducteur.vue'
import Noodmelding from './components/noodmelding.vue'

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
      component: Reiziger,
      children: [{
        path: 'noodmelding',
        component: Noodmelding
      }, {
        path: 'noodmelding',
        component: Noodmelding
      }]
    },
    {
      path: '/conducteur',
      name: 'conducteur',
      component: Conducteur
    }
  ]
})
