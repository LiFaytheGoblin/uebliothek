import Vue from 'vue'
import Router from 'vue-router'
import Uebliothek from '@/components/Uebliothek'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Uebliothek',
      component: Uebliothek
    }
  ]
})
