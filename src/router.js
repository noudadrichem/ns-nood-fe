import Vue from 'vue'
import Router from 'vue-router'
import Reiziger from './views/reiziger.vue'
import Conducteur from './views/conducteur.vue'
import Noodmelding from './components/noodmelding.vue'
import Opties from './components/opties.vue'

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
        path: '',
        component: Opties
      }]
    },
    {
      path: '/conducteur',
      name: 'conducteur',
      component: Conducteur
    }
  ]
})
