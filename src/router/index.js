import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ProductDetail from '../pages/ProductDetail.vue'
import CartPage from '../pages/CartPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/product/:id', component: ProductDetail, props: true },
  { path: '/cart', component: CartPage },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
