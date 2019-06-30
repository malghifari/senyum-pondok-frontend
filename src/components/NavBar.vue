<template>
    <div class="main-navbar">
        <b-navbar  class="nav-bound" toggleable="lg" type="dark">
            <b-navbar-brand href="#">
                <div class="brand-senyum-indonesia">
                    <img src="../assets/logo-senyum-indonesia-putih.svg" class="logo" onerror="this.onerror=null; this.src='../assets/logo-senyum-indonesia-putih.png'">
                </div>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="font-style">
                    <b-nav-item href="/admin/biodata-oka" v-if="access_token !== '' && role == 'admin'">Biodata OKA</b-nav-item>
                    <b-nav-item href="/admin/status-infaq" v-if="access_token !== '' && role == 'admin'">Status Infaq</b-nav-item>
                    <b-nav-item href="/admin/verifikasi-infaq" v-if="access_token !== '' && role == 'admin'">Verifikasi Infaq</b-nav-item>
                    <b-nav-item href="/admin/upload-infaq" v-if="access_token !== '' && role == 'admin'">Upload Infaq OKA</b-nav-item>
                    <b-nav-item href="/oka/upload-infaq" v-if="access_token !== '' && role == 'oka'">Upload Infaq</b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="/login" v-if="access_token == ''">Login</b-nav-item>
                    <b-nav-item href="/register" v-if="access_token == ''">Register</b-nav-item>
                    <b-nav-item v-on:click=logout v-if="access_token !== ''">Logout</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    methods: {
        viewForm () {
            this.$emit('view');
        },
        logout () {
            this.role = '';
            this.access_token = '';
            this.$router.push('/');
            window.location.reload();
        }
    },
    computed: {
        access_token: {
            get: () => {return localStorage.access_token ? localStorage.access_token : '';},
            set: (new_token) => {localStorage.access_token = new_token;}
        },
        role: {
            get: () => {return localStorage.role ? localStorage.role : '';},
            set: (new_role) => {localStorage.role = new_role;}
        },
    }
}
</script>

<style scoped>
    .main-navbar {
        background-color: #d71149;
        width: 100%;
    }

    .logo {
        width: 125px;
        margin-left: 1vh;
        padding: 0px;
    }

    .font-style {
        font-weight: bold;
    }

    @media screen and (min-width: 1366px) {
        .nav-bound {
            width: 1366px;
            margin: auto;
        }
    }
</style>