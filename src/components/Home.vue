<template>
    <div class="main-div" >
        <nav-bar></nav-bar>
        <div class="click-options" v-on:click="toggleOptions">ss</div>
        <menu-page class="options" v-if="showOptions"></menu-page>
    </div>
</template>

<script>
    import NavBar from "./NavBar"
    import MenuPage from "./MenuPage"
    export default {
        data() {
        return {
            showOptions: true,
        };
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault();
                alert(JSON.stringify(this.form));
            },
            toggleOptions(evt) {
                this.showOptions = !this.showOptions;
            },
        },
        components: {NavBar,MenuPage},

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
