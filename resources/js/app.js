
require('./bootstrap');

window.Vue = require('vue');
// Vue router
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('Master', require('./components/Admin/Master.vue').default);
import {routes} from './routes';

const router = new VueRouter({
  routes,
  mode:'history' // short for `routes: routes`
});

const app = new Vue({
    el: '#app',
    router // When we declare a constant here then we can use the constant everywhere
});
