import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import Categories from '@/views/Categories.vue'
import Contact from '@/views/Contact.vue'
import ErrorPage from '@/views/ErrorPage.vue'
import CarInfo from '../components/cars/CarInfo.vue'
import EachCar from '../components/cars/EachCar.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView
    },
    {
      path: '/categories',
      name: 'Categories',
      component: Categories
    },
     {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
       {
      path: '/view/car/:carType',
      name: 'EachCar',
      component: EachCar
    },
    {
      path: '/view/car/:carName/:carId',
      name: 'CarInfo',
      component: CarInfo
    },
    {
      path: '/:catchAll(.*)',
      name: 'ErrorPage',
      component: ErrorPage
    },
    
   
  ]
})

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  document.title = `Car Shop Store |  ${to.name}`;
  next()
})
export default router
