import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/home'
import searchPage from '../pages/searchPage'
import userPage from '../pages/userPage'
import dynamicPage from '../pages/dynamicPage'
import findPage from '../pages/findPage'
import settingPage from '../pages/settingPage'
import popupsComponent from '../pages/popupsComponent'
import loginPage from '../pages/loginPage'
import signupPage from '../pages/signupPage'
import forgetPage from '../pages/forgetPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/searchPage',
      name: 'searchPage',
      component: searchPage,
    },
    {
      path: '/userPage',
      name: 'userPage',
      component: userPage,
    },
    {
      path: '/dynamicPage',
      name: 'dynamicPage',
      component: dynamicPage,
    },
    {
      path: '/findPage',
      name: 'findPage',
      component: findPage,
    },
    {
      path: '/settingPage',
      name: 'settingPage',
      component: settingPage,
    },
    {
      path: '/loginPage',
      name: 'loginPage',
      component: loginPage,
    },
    {
      path: '/signupPage',
      name: 'signupPage',
      component: signupPage,
    },
    {
      path: '/popupsComponent',
      name: 'popupsComponent',
      component: popupsComponent,
    },
    {
      path: '/forgetPage',
      name: 'forgetPage',
      component: forgetPage,
    },

  ]
})
