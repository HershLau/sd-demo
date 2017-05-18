import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import VueRouter from 'vue-router/dist/vue-router.common.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'



Vue.use(VueRouter)
Vue.use(ElementUI)

import index from './components/index/index.vue'
import inventory from './components/inventory/inventory.vue'
import homePage from './components/home-page/home-page.vue'

const router = new VueRouter({
  routes: [
    { path: '/', component: index,
      children: [
          { path: '', component: homePage },
          { path: 'inventory', component: inventory }
      ]}
  ]
})

new Vue(Vue.util.extend({ router }, App)).$mount('#app')
