<template>
    <div class="main-div">
        <nav-bar></nav-bar>
        <alert :message=message colour="success" v-if="message == 'Infaq berhasil disubmit'"></alert>
        <alert :message=message colour="danger" v-if="message == 'Upload infaq gagal. Coba beberapa saat lagi. Hubungi teknis (087848471386)'"></alert>
        <div class="main-content">
            <b-row class="main-row justify-content-md-center">
                <b-col sm="4">
                    <admin-upload-infaq v-model="message"></admin-upload-infaq>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
    import NavBar from "../NavBar"
    import AdminUploadInfaq from "../AdminUploadInfaq"
    import Alert from "../Alert"

    export default {
        data() {
            return {
                message: '',
            }
        },
        mounted() {
            let role = localStorage.role;
            if (!localStorage.access_token) {
                this.$router.push('/');
            }
            if (role !== 'admin') {
                this.$router.push('/');
            }
        },
        components: {NavBar, AdminUploadInfaq, Alert}
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
