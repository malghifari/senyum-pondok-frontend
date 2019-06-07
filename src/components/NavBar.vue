<template>
    <div>
        <b-navbar toggleable="lg" type="dark" style="background-color: #d71149">
            <b-navbar-brand href="#">
                <b-row>
                    <b-col class="brand-senyum-indonesia" cols="12">
                        <b-row>
                            <b-col style="flex-grow: 0.2">
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
    .logo {
        width: 6vh;
        height: auto;
    }
    .brand-name {
        padding-top: 4px;
        padding-left: 6px;
        font-size: 17px;
    }
    .brand-senyum-indonesia {
        margin-left: 250px;
    }
    .brand-name-senyum {
        font-weight: bold
    }
</style>