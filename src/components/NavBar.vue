<template>
    <div>
        <b-navbar class="main-navbar" toggleable="lg" type="dark">
            <b-navbar-brand href="/" class="nav-bound">
                <div class="brand-senyum-indonesia">
                    <img src="../assets/logo-senyum-indonesia-putih.png" class="logo">
                </div>
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
        width: 100px;
        margin-left: 1vh;
        padding: 0px;
    }

    @media screen and (min-width: 1366px) {
        .nav-bound {
            width: 1366px;
            margin: auto;
        }
    }
</style>