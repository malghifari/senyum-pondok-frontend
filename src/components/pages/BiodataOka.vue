<template>
    <div class="main-div">
        <nav-bar></nav-bar>
        <div class="main-content">
            <b-row class="main-row justify-content-md-center">
                <biodata-oka-table></biodata-oka-table>
            </b-row>
        </div>
    </div>
</template>

<script>
    import NavBar from "../NavBar"
    import BiodataOkaTable from "../BiodataOkaTable"
    export default {
        data() {
            return {
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
        components: {NavBar, BiodataOkaTable}
    }
</script>

<style scoped>
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
