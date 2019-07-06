<template>
    <div class="main-div">
        <nav-bar></nav-bar>
        <alert :message=message colour="danger" v-if="message"></alert>
        <div class="main-content">
            <b-row class="main-row justify-content-md-center">
                <orang-baik></orang-baik>
                <b-col sm="4">
                    <register v-model="message"></register>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
    import NavBar from "../NavBar"
    import Register from "../Register"
    import Alert from "../Alert"
    import OrangBaik from "../OrangBaik"

    export default {
        data() {
            return {
                message: ''
            }
        },
        mounted() {
            let role = localStorage.role;
            if (role == 'oka' && localStorage.access_token) {
                this.$router.push('/oka/upload-infaq');
            }
            if (role == 'admin' && localStorage.access_token) {
                this.$router.push('/admin/summary');
            }
        },
        components: {NavBar, Register, Alert, OrangBaik}
    }
</script>

<style scoped>
    .main-row {
        margin-right: 0; 
        margin-left: 0
    }

    @media screen and (min-width: 540px) {
        .main-div {
            background-color: #f2f3f4;
            height: 100%;
            padding-bottom: 100px;
            overflow-y: auto;
            overflow-x: hidden;
        }
        .main-row {
            margin-top: 70px;
        }
    }
    @media screen and (min-width: 1366px) {
        .main-content {
            width: 1366px;
            margin: auto;
        }        
    }
</style>
