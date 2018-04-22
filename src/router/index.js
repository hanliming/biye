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
import feedbackPage from '../pages/feedbackPage'

// 详情页面路由
import bannerdetailPage from '../pages/detailPage/bannerdetailPage'
import huatiPage from '../pages/detailPage/huatiPage'
import commentListsPage from '../pages/detailPage/commentsLists'
import cinemaLineupPage from '../pages/detailPage/cinemaLineupPage'
import allKindsPage from '../pages/detailPage/allKindsPage'
import leaderboardPage from '../pages/detailPage/leaderboardPage'
import dailyRecommendation from '../pages/detailPage/dailyRecommendation'

import customMadePage from '../pages/detailPage/customMadePage'
import dailEightMovies from '../pages/detailPage/dailEightMovies'

import monthRecommendation from '../pages/detailPage/monthRecommendation'

//组件页面
import filmingComponent from '../pages/components/filmingComponent'
import comingsoonComponent from '../pages/components/comingsoonComponent'

import tonguelistComponent from '../pages/components/tonguelistComponent'

import redlistComponent from '../pages/components/redlistComponent'



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
    {
      path: '/feedbackPage',
      name: 'feedbackPage',
      component: feedbackPage,
    },
    //组件页面
    {
      path: '/filmingComponent',
      name: 'filmingComponent',
      component: filmingComponent,
      
    },
    {
      path: '/comingsoonComponent',
      name: 'comingsoonComponent',
      component: comingsoonComponent,
    },
    {
      path: '/tonguelistComponent',
      name: 'tonguelistComponent',
      component: tonguelistComponent,
      
    },
    {
      path: '/redlistComponent',
      name: 'redlistComponent',
      component: redlistComponent,
    },





    // 详情页面路由
    {
      path: '/bannerdetailPage',
      name: 'bannerdetailPage',
      component: bannerdetailPage,
    },
    {
      path: '/huatiPage',
      name: 'huatiPage',
      component: huatiPage,
    },
    {
      path: '/commentListsPage',
      name: 'commentListsPage',
      component: commentListsPage,
    },
    {
      path: '/cinemaLineupPage',
      name: 'cinemaLineupPage',
      component: cinemaLineupPage,
    },
    {
      path: '/allKindsPage',
      name: 'allKindsPage',
      component: allKindsPage,
    },
    {
      path: '/leaderboardPage',
      name: 'leaderboardPage',
      component: leaderboardPage,
    },
    
    {
      path: '/dailyRecommendation',
      name: 'dailyRecommendation',
      component: dailyRecommendation,
    },
    
    {
      path: '/customMadePage',
      name: 'customMadePage',
      component: customMadePage,
    },
    
    {
      path: '/dailEightMovies',
      name: 'dailEightMovies',
      component: dailEightMovies,
    },
    
    {
      path: '/monthRecommendation',
      name: 'monthRecommendation',
      component: monthRecommendation,
    },


  ]
})
