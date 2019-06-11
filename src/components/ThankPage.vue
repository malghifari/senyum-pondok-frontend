<template>
    <div class="main-div">
        <nav-bar></nav-bar>
        <div class="main-content">
            <b-row class="main-row justify-content-md-center">
                <b-col sm="4">
                    <div class="form-box">
                        <h5>
                            Pendaftaran Sukses
                        </h5>
                        <p>
                            Terima kasih telah menjadi <strong>#OrangTuaAsuh</strong> untuk adik-adik Pondok Senyum Indonesia. Semoga menjadi amal kebaikan yang terus mengalir bagi kita semua. Untuk sementara, Sistem Informasi saat ini hanya menerima pendaftaran, fitur-fitur lainnya Insya Allah akan segera menyusul. Hubungi kami di 082121908986 (WhatsApp).
                        </p>
                    </div>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
    import NavBar from "./NavBar"
    export default {
        data() {
            return {
            };
        },
        components: {NavBar}
    };
</script>

<style scoped>
    .form-box {
        margin: auto;
        margin-top: 30px;
        width: 80%;
        padding: 10px;
        overflow: auto;
    }

    .form-box > h5 {
        text-align: left; margin: 0px; margin-bottom: 20px;
    }

    .form-box > p {
        text-align: left; margin: 0px; margin-bottom: 20px;
    }
    

    .link-register-desc {
        font-size: 15px;
        text-align: center;
        margin-top: 10px;
    }

    @media screen and (min-width: 540px) {
        .form-box {
            display: block;
            margin: auto;
            width: 80%;
            background-color: #fff;
            border-radius: 3px;
            box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24);
            padding: 30px;
        }
        .main-div {
            background-color: #f2f3f4; height: 100%;
            overflow: auto;
        }
        .main-row {
            margin-top: 70px;
        }
        .form-box > h5 {
            text-align: center; margin: 20px; margin-bottom: 30px;
        }
    }
    @media screen and (min-width: 1366px) {
        .main-content {
            width: 1366px;
            margin: auto;
        }        
    }
</style>
