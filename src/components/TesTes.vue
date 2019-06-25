<template>
    <div class="main-navbar">
        {{ aas }}
        {{ title }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            aas: "hanif",
        };
    },
    props : ["title"]
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

    @media screen and (min-width: 1366px) {
        .nav-bound {
            width: 1366px;
            margin: auto;
        }
    }
</style>