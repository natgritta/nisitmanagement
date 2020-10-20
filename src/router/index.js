import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import CreateNisit from '@/components/CreateNisit'
import ViewNisit from '@/components/ViewNisit'
import EditNisit from '@/components/EditNisit'
import RegSubject from '@/components/RegSubject'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/reg',
      name: 'reg-subject',
      component: RegSubject
    },
    {
      path: '/new',
      name: 'new-nisit',
      component: CreateNisit
    },
    {
      path: '/edit/:nisit_id',
      name: 'edit-nisit',
      component: EditNisit
    },
    {
      path: '/:nisit_id',
      name: 'view-nisit',
      component: ViewNisit
    }
  ]
})
