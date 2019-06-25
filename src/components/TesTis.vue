<template>
    <div>
        <tes-tes title="Hanif"></tes-tes>
    </div>
</template>

<script>
    import TesTes from "./TesTes";
    export default {
        components : {TesTes},
    };
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

    @media screen and (min-width: 1366px) {
        .nav-bound {
            width: 1366px;
            margin: auto;
        }
    }
</style>