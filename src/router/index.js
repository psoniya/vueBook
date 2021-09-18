import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/Login.vue';
import Books from '../components/Books.vue';
import Ping from '../components/Ping.vue';
import Register from '../components/Register.vue';
import Signup from '../components/Signup.vue';
import Home from '../components/Home.vue';
import Add from '../components/Add.vue';
import Update from '../components/Update.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Ping',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/books',
      name: 'Books',
      component: Books,
    },
    {
      path: '/ping',
      name: 'Ping',
      component: Ping,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/add',
      name: 'Add',
      component: Add,
    },
    {
      path: '/update/:id',
      name: 'Update',
      component: Update,
    },
  ],
});
