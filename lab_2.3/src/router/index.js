import Vue from 'vue'
import VueRouter from 'vue-router'
import lab from '../views/lab.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'lab',
    component: lab
  },
]

const router = new VueRouter({
  routes
})

export default router
