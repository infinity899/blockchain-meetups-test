import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import EventsListing from './components/EventsListing.vue'
import Event from './components/Event.vue'

const router = new VueRouter({
  routes: [
    { path: '/event/:id', component: Event },
    { path: '/listing', component: EventsListing }
  ],
  mode: 'history'
})

Vue.use(VueRouter)

Vue.config.productionTip = false



new Vue({
  render: h => h(App),
  router
}).$mount('#app')
