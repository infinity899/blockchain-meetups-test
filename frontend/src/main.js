import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import EventsListing from './components/EventsListing.vue'
import Event from './components/Event.vue'
import Vuex from 'vuex'
import store from './store'


const router = new VueRouter({
  routes: [
    { path: '/event/:id', component: Event },
    { path: '/listing/:id', component: EventsListing }
  ],
  mode: 'history'
})

Vue.use(Vuex)

Vue.use(VueRouter)

Vue.config.productionTip = false



new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
