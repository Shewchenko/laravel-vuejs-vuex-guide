<template>
    <div>
        <h2>
            Shops
        </h2>
        <div v-for="shop in shops">
            <shop-component
                v-bind:shop="shop"
            ></shop-component>
        </div>
    </div>
</template>

<script>
    import * as actions from "../../store/action-types";
    import * as getters from "../../store/getter-types";
    import {mapGetters, mapActions} from 'vuex'
    export default {
        name: "ShopsComponent",
        computed: {
            ...mapGetters('shops', {
                shops: getters.G_LIST
            })
        },
        methods: {
            ...mapActions('shops', {
                setShops: actions.A_GET_LIST,
                update: actions.A_UPDATE,
            }),
        },
        mounted() {
            console.log('UsersComponent mounted')
            /** если хранилище пустое, тогда заполняем его */
            if (this.shops.length === 0) {
                this.setShops();
            }
        }
    }
</script>

<style scoped>

</style>
