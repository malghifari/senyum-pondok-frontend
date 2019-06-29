<template>
    <div id="historyinfaq" >
        <nav-bar></nav-bar>
        <b-container class="bv-example-row">
            <b-row>
                <b-col cols="12" sm="3">
                    <div class="click-options" v-on:click="toggleOptions">ss</div>
                    <menu-page class="options" v-if="showOptions"></menu-page>
                </b-col>
                <b-col cols="12" sm="9">
                    <div id="tabel-history-container">
                        <tabel-history></tabel-history>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import NavBar from "./NavBar"
    import MenuPage from "./MenuPage"
    import TabelHistory from "./TabelHistory"
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
        components: {NavBar,MenuPage,TabelHistory},

    };

</script>

<style scoped>
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
    #tabel-history-container {
        text-align: center;
        padding: 5%;
        margin: 3% auto;
        box-shadow: inset 0px 0px 2px 2px #a7aeba;
        background-color: white;
    }
    .container {
        margin: 0px !important;
        max-width: 100%;
    }
    #tabel-history {
        text-align: center;
    }
    #historyinfaq {
        background-color: #F2F3F4;
    }
    @media screen and (min-width: 540px) {
        .click-options{
            display: none;
        }
        .main-navbar {
            margin: auto;
            padding: 10px 0;
        }
        #tabel-history-container {
            width: 80%;
            height : 80%;
        }
        #historyinfaq {
            height: 100%;
        }
        #menupage-container {
            height : 100%;
        }
    }
</style>
