<template>
    <div>
        <div class="title m-b-md">
            Tutorial Vuejs Vuex Route
        </div>
        <div><router-link to="/users">Show Users</router-link></div>
        <div><router-link to="/shops">Show Shops</router-link></div>
    </div>
</template>

<script>
    export default {
        name: "AppComponent",
        mounted() {
            console.log('AppComponent mounted.')
        }
    }
</script>

<style scoped>
    a {
        font-size: 2em;
    }
</style>
