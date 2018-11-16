import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Work from '@/views/Work.vue'
import Contact from '@/views/Contact.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/',        component: Home },
    { path: '/about',   component: About },
    { path: '/work',    component: Work },
    { path: '/contact', component: Contact }
  ]
})

export default router