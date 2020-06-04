require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
import Vuex from 'vuex';

window.Vue.use(VueRouter);
window.Vue.use(Vuex);


import AppComponent from "./components/AppComponent";
import UsersComponent from "./components/users/UsersComponent";
import UserComponent from "./components/users/UserComponent";
import ShopsComponent from "./components/shops/ShopsComponent";

/** Устанавливаем маршруты */
/** Docs
 * https://router.vuejs.org/ru/guide/essentials/nested-routes.html
 */
const routes = [
    {
        path: '/',
        components: {
            /** "app" служит для старта старта компонента в app.blade.php
             * <router-view name="app"></router-view>
             * */
            app: AppComponent,
        },
    },
    {
        path: '/users',
        component: UsersComponent,
        children: [
            {
                name: 'user',
                path: 'user/:id',
                component: UserComponent
            }
        ]
    },
    {
        path: '/shops',
        component: ShopsComponent
    }
];

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('users-component', require('./components/users/UsersComponent').default);
Vue.component('user-component', require('./components/users/UserComponent').default);

Vue.component('shop-component', require('./components/shops/ShopComponent').default);

// const app = new Vue({
//     el: '#app',
// });
import store from './store'

const router = new VueRouter({
    // mode: 'history',
    routes });
const app = new Vue({router, store}).$mount('#app');


