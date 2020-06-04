<template>
    <div>
        <h2>
            Users
        </h2>
        <div v-for="user in users">
            <user-component
                v-bind:user="user"
            ></user-component>
        </div>
    </div>
</template>

<script>
    import * as actions from "../../store/action-types";
    import * as getters from "../../store/getter-types";
    import {mapGetters, mapActions} from 'vuex'
    export default {
        name: "UsersComponent",
        computed: {
            ...mapGetters('users', {
                users: getters.G_LIST
            })
        },
        methods: {
            ...mapActions('users', {
                setUsers: actions.A_GET_LIST,
                update: actions.A_UPDATE,
            }),
        },
        mounted() {
            console.log('UsersComponent mounted')
            /** если хранилище пустое, тогда заполняем его */
            if (this.users.length === 0) {
                this.setUsers();
            }
        }
    }
</script>

<style scoped>

</style>
