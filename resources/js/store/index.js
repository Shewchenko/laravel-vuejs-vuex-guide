import Vue from 'vue';
import Vuex from 'vuex';
import shops from "./modules/shops";
import users from './modules/users'

Vue.use(Vuex);

/** Сообщаем vuex какие есть модули */
export default new Vuex.Store({
    modules: {
        shops,
        users
    }
});
