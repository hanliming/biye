import Vue from 'vue'
import Router from 'vue-router'
import { resolve } from 'uri-js';


// import Index from '../pages/home'
// import searchPage from '../pages/searchPage'
// import userPage from '../pages/userPage'
// import dynamicPage from '../pages/dynamicPage'
// import findPage from '../pages/findPage'
// import settingPage from '../pages/settingPage'
// import popupsComponent from '../pages/popupsComponent'
// import loginPage from '../pages/loginPage'
// import signupPage from '../pages/signupPage'
// import forgetPage from '../pages/forgetPage'
// import feedbackPage from '../pages/feedbackPage'

// // 详情页面路由
// import bannerdetailPage from '../pages/detailPage/bannerdetailPage'
// import huatiPage from '../pages/detailPage/huatiPage'
// import commentListsPage from '../pages/detailPage/commentsLists'
// import cinemaLineupPage from '../pages/detailPage/cinemaLineupPage'
// import allKindsPage from '../pages/detailPage/allKindsPage'
// import leaderboardPage from '../pages/detailPage/leaderboardPage'
// import dailyRecommendation from '../pages/detailPage/dailyRecommendation'

// import customMadePage from '../pages/detailPage/customMadePage'
// import dailEightMovies from '../pages/detailPage/dailEightMovies'

// import monthRecommendation from '../pages/detailPage/monthRecommendation'

// //组件页面
// import filmingComponent from '../pages/components/filmingComponent'
// import comingsoonComponent from '../pages/components/comingsoonComponent'

// import tonguelistComponent from '../pages/components/tonguelistComponent'

// import redlistComponent from '../pages/components/redlistComponent'



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'DashBoard',
      component: resolve => require(['../pages/DashBoard'],resolve),
      redirect: {
        name: 'Recommend'
      },
      children: [
        {
          path: 'Recommend',
          name: 'Recommend',
          component: resolve => require(['../pages/dashboard/Recommend'],resolve),
          meta: {
            pageTitle: '推荐'
          },
          children: [
            {
              path: 'ArticleDetail/:id?',
              name: 'ArticleDetail',
              component: resolve => require(['../pages/dashboard/Recommend/articlepage/ArticleDetail'],resolve),
              meta: {
                pageTitle: '文章单页'
              }
            }
          ]
        },
        {
          path: 'Find',
          name: 'Find',
          component: resolve => require(['../pages/dashboard/Find'],resolve),
          meta: {
            pageTitle: '发现'
          },
          children: [
            {
              path: 'AllKindsPage',
              name: 'AllKindsPage',
              component: resolve => require(['../pages/dashboard/find/AllKindsPage'],resolve),
              meta: {
                pageTitle: '电影分类'
              },
              children: [
                {
                  path: 'OneKind/:kid?',
                  name: 'OneKind',
                  component: resolve => require(['../pages/dashboard/find/allkindspage/OneKind'],resolve),
                  meta: {
                    pageTitle: '同一个分类页'
                  }
                }
              ]
            },
            
            {
              path: 'CinemaLineupPage',
              name: 'CinemaLineupPage',
              component: resolve => require(['../pages/dashboard/find/CinemaLineupPage'],resolve),
              meta: {
                pageTitle: '热映'
              },
              children: [
                {
                  path: 'FilmDetail/:id?',
                  name: 'FilmDetail',
                  component: resolve => require(['../pages/dashboard/find/cinemalineuppage/filmdetail'],resolve),
                  meta: {
                    pageTitle: '电影主页'
                  }
                }
              ]
            },

          ]
        },
        {
          path: 'Dynamic',
          name: 'Dynamic',
          component: resolve => require(['../pages/dashboard/Dynamic'],resolve),
          meta: {
            pageTitle: '动态'
          },
          children: [
            {
              path: 'CreateDynamic',
              name: 'CreateDynamic',
              component: resolve => require(['../pages/dashboard/dynamic/CreateDynamic'],resolve),
              meta: {
                pageTitle: '写动态'
              }
            },
            {
              path: 'CommentsLists',
              name: 'CommentsLists',
              component: resolve => require(['../pages/dashboard/dynamic/CommentsLists'],resolve),
              meta: {
                pageTitle: '评论列表'
              }
            },




          ]
        },
        {
          path: 'Mine',
          name: 'Mine',
          component: resolve => require(['../pages/dashboard/Mine'],resolve),
          meta: {
            pageTitle: '我的'
          },
          children: [
            {
              path: 'SettingPage',
              name: 'SettingPage',
              component: resolve => require(['../pages/dashboard/mine/SettingPage'],resolve),
              meta: {
                pageTitle: '设置'
              },
            },
            {
              path: 'SignupPage',
              name: 'SignupPage',
              component: resolve => require(['../pages/dashboard/mine/SignupPage'],resolve),
              meta: {
                pageTitle: '注册'
              }
            },
            {
              path: 'LoginPage',
              name: 'LoginPage',
              component: resolve => require(['../pages/dashboard/mine/LoginPage'],resolve),
              meta: {
                pageTitle: '登录'
              }
            },
            {
              path: 'ForgetPage',
              name: 'ForgetPage',
              component: resolve => require(['../pages/dashboard/mine/ForgetPage'],resolve),
              meta: {
                pageTitle: '忘记密码'
              }
            }
          ]
        },
        {
          path: 'Search',
          name: 'Search',
          component: resolve => require(['../pages/dashboard/Search'],resolve),
          meta: {
            pageTitle: '搜索'
          }
        }
      ]
      // path: '/',
      // name: 'Index',
      // component: resolve => require(['../pages/dashboard/Recommend'],resolve),
      // redirect: {
      //   name: 'Recommend'
      // },
      // children: [
      //   {

      //   }
      // ]
    },
    // {
    //   path: '/searchPage',
    //   name: 'searchPage',
    //   component: searchPage,
    // },
    // {
    //   path: '/userPage',
    //   name: 'userPage',
    //   component: userPage,
    // },
    // {
    //   path: '/dynamicPage',
    //   name: 'dynamicPage',
    //   component: dynamicPage,
    // },
    // {
    //   path: '/findPage',
    //   name: 'findPage',
    //   component: resolve => require(['../pages/findPage'], resolve),
    // },
    // {
    //   path: '/settingPage',
    //   name: 'settingPage',
    //   component: settingPage,
    // },
    // {
    //   path: '/loginPage',
    //   name: 'loginPage',
    //   component: loginPage,
    // },
    // {
    //   path: '/signupPage',
    //   name: 'signupPage',
    //   component: signupPage,
    // },
    // {
    //   path: '/popupsComponent',
    //   name: 'popupsComponent',
    //   component: popupsComponent,
    // },
    // {
    //   path: '/forgetPage',
    //   name: 'forgetPage',
    //   component: forgetPage,
    // },
    // {
    //   path: '/feedbackPage',
    //   name: 'feedbackPage',
    //   component: feedbackPage,
    // },
    // //组件页面
    // {
    //   path: '/filmingComponent',
    //   name: 'filmingComponent',
    //   component: filmingComponent,
      
    // },
    // {
    //   path: '/comingsoonComponent',
    //   name: 'comingsoonComponent',
    //   component: comingsoonComponent,
    // },
    // {
    //   path: '/tonguelistComponent',
    //   name: 'tonguelistComponent',
    //   component: tonguelistComponent,
      
    // },
    // {
    //   path: '/redlistComponent',
    //   name: 'redlistComponent',
    //   component: redlistComponent,
    // },





    // // 详情页面路由
    // {
    //   path: '/bannerdetailPage',
    //   name: 'bannerdetailPage',
    //   component: bannerdetailPage,
    // },
    // {
    //   path: '/huatiPage',
    //   name: 'huatiPage',
    //   component: huatiPage,
    // },
    // {
    //   path: '/commentListsPage',
    //   name: 'commentListsPage',
    //   component: commentListsPage,
    // },
    // {
    //   path: '/cinemaLineupPage',
    //   name: 'cinemaLineupPage',
    //   component: cinemaLineupPage,
    // },
    // {
    //   path: '/allKindsPage',
    //   name: 'allKindsPage',
    //   component: allKindsPage,
    // },
    // {
    //   path: '/leaderboardPage',
    //   name: 'leaderboardPage',
    //   component: leaderboardPage,
    // },
    
    // {
    //   path: '/dailyRecommendation',
    //   name: 'dailyRecommendation',
    //   component: dailyRecommendation,
    // },
    
    // {
    //   path: '/customMadePage',
    //   name: 'customMadePage',
    //   component: customMadePage,
    // },
    
    // {
    //   path: '/dailEightMovies',
    //   name: 'dailEightMovies',
    //   component: dailEightMovies,
    // },
    
    // {
    //   path: '/monthRecommendation',
    //   name: 'monthRecommendation',
    //   component: monthRecommendation,
    // },


  ]
})
