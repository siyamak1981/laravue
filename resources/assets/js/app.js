

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


import Gate from "./Gate";
Vue.prototype.$gate = new Gate(window.user);

window.Fire = new Vue();
window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
Vue.component(AlertErrors.name, AlertErrors)
Vue.component(AlertSuccess.name, AlertSuccess)


import VueRouter from 'vue-router';
import Swal from 'sweetalert2'
window.Swal = Swal;

Vue.use(VueRouter)

import VueProgressBar from 'vue-progressbar';
import Vue from 'vue';
Vue.use(VueProgressBar, {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  inverse: false
})


Vue.component('pagination', require('laravel-vue-pagination'));
import Dashboard from './components/Dashboard.vue';
import Developer from './components/Developer.vue';
import Users from './components/Users.vue';
import Profile from './components/Profile.vue';
import NotFound from './components/NotFound.vue';

let routes = [
    { path: '/dashboard', component: Dashboard },
    { path: '/developer', component: Developer },
    { path: '/users', component: Users },
    { path: '/profile', component: Profile },
    { path: '*', component: NotFound }
  ]

const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
    })

  
Vue.filter('upText', function(text){
  return text.charAt(0).toUpperCase() + text.slice(1)
});

Vue.filter('myDate',function(created){
  return moment(created).format('MMMM Do YYYY');
});

Vue.component(
  'passport-clients',
  require('./components/passport/Clients.vue').default
);

Vue.component(
  'passport-authorized-clients',
  require('./components/passport/AuthorizedClients.vue').default
);

Vue.component(
  'passport-personal-access-tokens',
  require('./components/passport/PersonalAccessTokens.vue').default
);
Vue.component(
  'not-found',
  require('./components/NotFound.vue').default
);

const app = new Vue({
  el: '#app',
  router,
  data:{
      search: ''
  },
  methods:{
    searchit: _.debounce(() => {
        Fire.$emit('searching');
    },1000),
    printme(){
      window.print(); 
    }
},
});
