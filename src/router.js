import Vue from 'vue'
import Router from 'vue-router'
import Reiziger from './views/reiziger.vue'
import Conducteur from './views/conducteur.vue'
import Noodmelding from './components/noodmelding.vue'
import Noodmeldingmaken from './components/noodmeldingmaken.vue'
import NoodSituatieOverzicht from './components/noodSituatieOverzicht.vue'

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
        path: 'noodSituatieOverzicht',
        component: NoodSituatieOverzicht
      }, {
        path: 'maken',x§
        component: 'Noodmeldingmaken
      }]
    },
    {
      path: '/conducteur',
      name: 'conducteur',
      component: Conducteur
    }
  ]
})
