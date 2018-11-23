import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false

const LOCAL = true
Vue.prototype.$apiUrl = LOCAL ? 'http://localhost:5001/' : ''

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
