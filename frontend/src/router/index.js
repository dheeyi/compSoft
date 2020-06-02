import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/view/Home'
import Software from '@/components/view/Software'
import Logout from '@/components/view/Logout'

import VueSweetalert2 from 'vue-sweetalert2'

Vue.use(VueSweetalert2)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/software',
      name: 'Software',
      component: Software
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    }
  ]
})
