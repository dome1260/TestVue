import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Dome from './views/dome.vue'
import Grade from './views/grade.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
     
      component: About
    },
    {
      path: '/grade',
      name: 'grade',
     
      component: Grade
    },
    {
      path: '/dome',
      name: 'dome',
     
      component: Dome
    }
  ]
})
