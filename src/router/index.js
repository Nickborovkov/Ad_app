import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/Home";
import Login from "../components/Auth/Login";
import Registration from "../components/Auth/Registration";
import Orders from "../components/User/Orders";
import AddList from "../components/Ads/AddList";
import NewAd from "../components/Ads/NewAd";
import Ad from "../components/Ads/Ad";

Vue.use(VueRouter)

const routes = [
  {
    path: ``,
    name: `home`,
    component: Home,
  },
  {
    path: `/ad/:id`,
    name: `ad`,
    component: Ad,
  },
  {
    path: `/login`,
    name: `login`,
    component: Login,
  },
  {
    path: `/registration`,
    name: `registration`,
    component: Registration,
  },
  {
    path: `/orders`,
    name: `orders`,
    component: Orders,
  },
  {
    path: `/list`,
    name: `list`,
    component: AddList,
  },
  {
    path: `/new`,
    name: `new`,
    component: NewAd,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
