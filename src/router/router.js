import Vue from 'vue'
import VueRouter from 'vue-router'
import person from "../components/person"
import product from "../components/product"
import shop from "../components/shop"
import navigation from '../components/navigation.vue'
import login from '../components/login.vue'
import menu from '../components/menu.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: "",
    component: navigation,
    props: true,
    children: [
      { path: "/login", component: login, props: true },
    ]
  },
  {
    path: "",
    component: menu,
    props: true,
    children: [
      { path: "/person", component: person, props: true, meta: { restricted: true, title: 'Person' } },
      { path: "/product", component: product, props: true, meta: { restricted: true, title: 'Product' } },
      { path: "/shop", component: shop, props: true, meta: { restricted: true, title: 'Shop' } },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
