<template>
    <div class="main-div">
        <nav-bar></nav-bar>
        <div class="main-content">
            <b-row class="main-row justify-content-md-center">
                <b-col sm="4">
                    <div class="form-box">
                        <h5>
                            Masuk ke akun Anda
                        </h5>
                        <b-form @submit="onSubmit" v-if="show">
                            <b-form-group 
                            id="input-group-1"
                            >
                            <b-form-input 
                                id="input-1" 
                                v-model="form.whatsapp" 
                                required
                                placeholder="Nomor WhatsApp Anda"
                                style="border-radius: 3px; font-size: 0.9rem;"
                                >
                            </b-form-input>
                            </b-form-group>

                            <b-form-group 
                            id="input-group-2"
                            >
                            <b-form-input 
                                id="input-2" 
                                v-model="form.password" 
                                required 
                                type="password"
                                placeholder="Password"
                                style="border-radius: 3px; font-size: 0.9rem;"
                                >
                            </b-form-input>
                            </b-form-group>

                            <b-button block type="submit" style="background-color: #d71149; border-color:  #d71149; border-radius: 3px">MASUK</b-button>

                            <p class="link-register-desc">
                                Belum punya akun? <a class="link-register" href="/register">Daftar</a>
                            </p>
                        </b-form>
                    </div>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
    import NavBar from "./NavBar"
    import axios from 'axios'

    export default {
        data() {
        return {
            form: {
                whatsapp: '',
                password: '',
            },
            show: true,
            access_token: '',
            role: ''
        };
        },
        watch: {
            access_token(new_token) {
                localStorage.access_token = new_token;
            },
            role(new_role) {
                localStorage.role = new_role;
            }
        },
        mounted() {
            if (localStorage.access_token) {
                this.access_token = localStorage.access_token;
            }
            if (localStorage.role) {
                this.role = localStorage.role;
            }
        },
        methods: {
            login(payload) {
                console.log(process.env.VUE_APP_BASE_API);
                const path = process.env.VUE_APP_BASE_API + 'user/login';
                axios.post(path, payload)
                    .then((res) => {
                        console.log(res);
                        this.access_token = res.data.data.access_token;
                        this.role = res.data.data.role;
                        if (this.role == "admin") {
                            this.$router.push("admin/biodata-oka")
                        } else {
                            window.location.reload();
                        }
                    })
                    .catch((error) => {
                    console.log(error)
                });
            },
            onSubmit(evt) {
                evt.preventDefault();
                const payload = {
                    whatsapp: this.form.whatsapp,
                    password: this.form.password
                };
                this.login(payload);
            },
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
    
    .link-register {
        color: #d71149;
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
