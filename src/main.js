// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import axios from 'axios'

Vue.prototype.$http = axios


Vue.use(iView);
Vue.use(Vuex);

Vue.config.productionTip = false

//导航钩子
router.beforeEach((to, from, next) => {
  typeof to.meta.pageTitle !== undefined && setDocumentTitle(to.meta.pageTitle)
  next()
});
//权限管理钩子
router.beforeEach((to, from, next) => {
  if (to.name == 'Login' && window.localStorage.user_rule_list && window.localStorage.user_rule_list) {
    next({
      name: 'Article'
    });
  }
  if (to.meta.requireAuth) {
    if (window.localStorage.user_rule_list == '{}') {
      next({
        name: 'Login'
      });
    }
    if (window.localStorage.user_rule_list) {
      next()
    } else {
      next({
        name: 'Login'
      });
    }
  } else {
    next()
  }
});
/**
 * 兼容微信设置页面的title
 */
let setDocumentTitle = function (title) {
  document.title = title;
  let ua = navigator.userAgent;
  if (/\bMicroMessenger\/([\d\.]+)/.test(ua) && /ip(hone|od|ad)/i.test(ua)) {
    var i = document.createElement('iframe');
    i.src = '/favicon.ico';
    i.style.display = 'none';
    i.onload = function () {
      setTimeout(function () {
        i.remove();
      }, 9);
    };
    document.body.appendChild(i);
  }
};

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})



