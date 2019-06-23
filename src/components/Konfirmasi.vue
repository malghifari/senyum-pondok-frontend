<template>
    <home></home>
</template>

<script>
    import Home from "./MenuPage"
    export default {
        components: {Home},

    };

</script>

<style scoped>
    .main-div {
        height: 100%;
    }
    @media screen and (min-width: 540px) {
        .click-options{
            display: none;
        }
    }
</style>
