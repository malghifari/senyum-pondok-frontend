<template>
    <div>
        <b-navbar class="main-navbar" toggleable="lg" type="dark">
            <b-navbar-brand href="#">
                <b-row>
                    <b-col class="brand-senyum-indonesia" cols="12">
                        <b-row>
                            <b-col class="col-logo">
                                <img src="../assets/logo-senyum-putih.png" class="logo">
                            </b-col>
                            <b-col class="brand-name">
                                <b-row class="brand-name-senyum">
                                    Senyum
                                </b-row>
                                <b-row class="brand-name-indonesia">
                                    Indonesia
                                </b-row>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row> 
            </b-navbar-brand>
        </b-navbar>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .main-navbar {
        background-color: #d71149;
    }

    .logo {
        width: 6vh;
        height: auto;
        margin-right: 0px;
    }

    .brand-name {
        font-size: 13px;

    }
    .brand-name-senyum {
        font-weight: bold
    }

    .col-logo {
        padding-right: 3px;
    }

    @media screen and (min-width: 540px) {
        .brand-name {
            padding-top: 4px;
            padding-left: 6px;
            font-size: 17px;
        }
        .brand-senyum-indonesia {
            margin-left: 250px;
        }
        .brand-name-senyum {
            font-weight: bold;
        }
        .col-logo {
            flex-grow: 0.2;
        }
    }
</style>