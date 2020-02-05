/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import moment from 'moment';
import { 
    Form,
    HasError,
    AlertError,
    AlertErrors, 
    AlertSuccess
  } from 'vform';

window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
Vue.component(AlertErrors.name, AlertErrors)
Vue.component(AlertSuccess.name, AlertSuccess)


import VueRouter from 'vue-router';
import Swal from 'sweetalert2';


const toast = Swal.fire({
  toast: true,
  position: 'top-end',
  icon: 'success',
  title: 'User Created in successfully',
  showConfirmButton: false,
  timer: 1500
})

window.Swal = toast;



Vue.use(VueRouter)

import VueProgressBar from 'vue-progressbar';
import Dashboard from './components/Dashboard.vue';
import Users from './components/Users.vue';
import Profile from './components/Profile.vue';

let routes = [
    { path: '/dashboard', component: Dashboard },
    { path: '/users', component: Users },
    { path: '/profile', component: Profile }
  ]

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
    })

  
Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '3px'
  })
    


Vue.filter('upText', function(text){
  return text.charAt(0).toUpperCase() + text.slice(1)
});

Vue.filter('myDate',function(created){
  return moment(created).format('MMMM Do YYYY');
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


const app = new Vue({
    el: '#app',
    router,
   
});
