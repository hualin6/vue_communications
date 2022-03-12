import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import A from '../views/A.vue';
import B from '../views/B.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/A',
    meta: { title: '首页', icon: 'home' },
    children: [
      {
        path: '/A',
        name: 'A',
        component: A,
        meta: { title: '方式一', icon: 'global' },
      },
      {
        path: '/B',
        name: 'B',
        component: B,
        meta: { title: '方式二', icon: 'windows' },
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
