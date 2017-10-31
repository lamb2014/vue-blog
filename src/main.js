// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import api from './api'
import VueProgressBar from 'vue-progressbar'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'



Vue.config.productionTip = false
Vue.mixin({
  beforeCreate(){
    if(!this.$api){
      this.$api=api;
    }
  }
})

const options = {
  color: '#20a0ff',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.5s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}
Vue.use(VueProgressBar, options)
Vue.use(ElementUI)
/* eslint-disable no-new */
const user = api.SDK.User.current()
// console.log(user)
if (user) {
  store.commit('setUser', user);
}
new Vue({
  el: '#app',
  router,
  store,
  // template: '<App/>',
  // components: { App }
  render: h => h(App),
})
