<template>
    <div v-if="user">
        <h3>{{user.name}}</h3>
        <div>
            {{user.id}}
            <input v-model="user.name" type="text">
            <input v-model="user.email" type="text">
            <button v-on:click="update(user)">Сохранить</button>
            <button v-on:click="del(user)">Удалить</button>
        </div>
    </div>
</template>

<script>
    import * as actions from "../../store/action-types";
    import {mapActions} from 'vuex'
    export default {
        name: "UserComponent",
        props: ['user'],
        methods: {
            ...mapActions('users', {
                update: actions.A_UPDATE,
                del: actions.A_DELETE,
            }),
        },
        mounted() {
            console.log('UserComponent mounted')
        }
    }
</script>

<style scoped>

</style>
