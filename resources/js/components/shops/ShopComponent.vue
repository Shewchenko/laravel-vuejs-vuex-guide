<template>
    <div v-if="shop">
        <h3>{{shop.name}}</h3>
        <div>
            {{shop.id}}
            <input v-model="shop.name" type="text">
            <input v-model="shop.address" type="text">
            <button v-on:click="update(shop)">Сохранить</button>
            <button v-on:click="del(shop)">Удалить</button>
        </div>
    </div>
</template>

<script>
    import * as actions from "../../store/action-types";
    import {mapActions} from 'vuex'
    export default {
        name: "ShopComponent",
        props: ['shop'],
        methods: {
            ...mapActions('shops', {
                update: actions.A_UPDATE,
                del: actions.A_DELETE,
            }),
        },
        mounted() {
            console.log('ShopComponent mounted')
        }
    }
</script>

<style scoped>

</style>
