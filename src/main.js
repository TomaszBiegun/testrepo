import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/app.scss'
import VTooltip from 'v-tooltip'

Vue.use(VTooltip)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
