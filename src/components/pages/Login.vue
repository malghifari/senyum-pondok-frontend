<template>
    <div class="main-div">
        <nav-bar></nav-bar>
        <modal
            :message="passed_message"
            variant="danger"
            :handleOk="afterOkHide"
            >
        </modal>
        <div class="main-content">
            <b-row class="main-row justify-content-md-center">
                <b-col sm="4">
                    <login v-model="message"></login>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
    import NavBar from "../NavBar"
    import Login from "../Login"
    import Modal from "../Modal"

    export default {
        data() {
            return {
                message: '',
                passed_message: ''
            }
        },
        mounted() {
            let role = localStorage.role;
            if (role == 'oka') {
                this.$router.push('/oka/upload-infaq');
            }
            if (role == 'admin') {
                this.$router.push('/admin/summary');
            }
        },
        watch: {
            message(new_message) {
                if (new_message == '') {
                    return
                }
                this.passed_message = this.message
                this.message = ''
                this.$bvModal.show('bv-modal-example')
            },
        },
        methods: {
            afterOkHide() {
                this.$bvModal.hide('bv-modal-example')
            },
        },
        components: {NavBar, Login, Modal}
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
