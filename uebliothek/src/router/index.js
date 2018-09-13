import Vue from 'vue'
import Router from 'vue-router'
import Uebliothek from '@/components/Uebliothek'
import Exercises from '@/components/Exercises'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Uebliothek',
      component: Uebliothek
    },
    {
      path: '/exercises',
      name: 'Exercises',
      component: Exercises
    }
  ]
})
