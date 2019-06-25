<template>
    <div class="main-div" >
        <nav-bar></nav-bar>
        <b-container class="bv-example-row">
            <b-row>
                <b-col cols="12" sm="3">
                    <div class="click-options" v-on:click="toggleOptions">ss</div>
                    <menu-page class="options" v-if="showOptions"></menu-page>
                </b-col>
                <b-col cols="12" sm="9">
                    <div class="content">
                        <form-konfirmasi></form-konfirmasi>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import NavBar from "./NavBar"
    import MenuPage from "./MenuPage"
    import FormKonfirmasi from "./FormKonfirmasi"
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
        components: {NavBar,MenuPage,FormKonfirmasi},

    };

</script>

<style scoped>
    .main-div {
        height: 100%;
    }
    .bv-example-row {
        width: 100% !important;
        height: 100% !important;
        margin: 0px !important;
        padding: 0px !important;
    }
    .col-12 {
        width: 100% !important;
        padding: 0px !important;
    }
    .row {
        width: 100% !important;
        padding: 0px !important;
        margin: 0px !important;   
        height: 100% !important;
    }
    .click-options {
        width: 100%;
    }
    .options {
        width: 100%;
    }
    .content {
        text-align: center;
    }
    .container {
        margin: 0px !important;
        max-width: 100%;
    }
    @media screen and (min-width: 540px) {
        .click-options{
            display: none;
        }
        .main-navbar {
            margin: auto;
            padding: 10px 0;
        }
    }
</style>
