import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import EventsListing from './components/EventsListing.vue'
import Event from './components/Event.vue'
import Search from './components/Search.vue'
import Vuex from 'vuex'
import store from './store'

var VueTruncate = require('vue-truncate-filter')

const router = new VueRouter({
  routes: [
    { path: '/listing/:id', component: EventsListing },
    { 
      name: 'event',
      path: '/listing/:id/:name',
      component: Event, 
    },
    { path: '/', component: Search}
  ],
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } 
      return { x: 0, y: 0 }

  },
})

Vue.use(Vuex)
Vue.use(VueTruncate)
Vue.use(VueRouter)

Vue.config.productionTip = false



new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
