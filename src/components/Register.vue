<template>
    <div class="main-div">
        <nav-bar></nav-bar>
        <div class="main-content">
            <b-row class="main-row justify-content-md-center">
                <b-col class="orang-baik" sm="4">
                    <h2>
                        Hai #OrangBaik
                    </h2>
                    <p class="greeting">
                        Selamat bergabung di Pondok Senyum Indonesia, rumah bagi adik-adik istimewa dari pelosok Jawa Barat
                    </p>
                </b-col>
                <b-col sm="4">
                    <div class="form-box">
                        <h5>
                            Daftar Menjadi <strong>#OrangTuaKakakAsuh</strong>
                        </h5>
                        <p class="greeting-2">
                            Selamat bergabung di Pondok Senyum Indonesia, rumah bagi adik-adik istimewa dari pelosok Jawa Barat
                        </p>
                        <b-form @submit="onSubmit" v-if="show">
                            <div class="state-0" v-if="!state_form">
                                <b-form-group 
                                id="input-group-1"
                                >
                                <b-form-input 
                                    id="input-1" 
                                    v-model="form.name" 
                                    required 
                                    placeholder="Nama lengkap Anda *"
                                    style="border-radius: 3px; font-size: 0.9rem;"
                                    >
                                </b-form-input>
                                </b-form-group>

                                <b-form-group 
                                id="input-group-2"
                                >
                                <b-form-input 
                                    id="input-2" 
                                    v-model="form.whatsapp" 
                                    required
                                    placeholder="Nomor WhatsApp Anda *"
                                    style="border-radius: 3px; font-size: 0.9rem;"
                                    >
                                </b-form-input>
                                </b-form-group>

                                <b-form-group 
                                id="input-group-3"
                                >
                                <b-form-input 
                                    id="input-3" 
                                    v-model="form.address" 
                                    required 
                                    placeholder="Alamat rumah Anda *"
                                    style="border-radius: 3px; font-size: 0.9rem;"
                                    >
                                </b-form-input>
                                </b-form-group>

                                <b-form-group 
                                id="input-group-4"
                                >
                                <b-form-input 
                                    id="input-4" 
                                    v-model="form.email"
                                    placeholder="Alamat email Anda"
                                    style="border-radius: 3px; font-size: 0.9rem;"
                                    >
                                </b-form-input>

                                </b-form-group>
                                <b-form-group 
                                id="input-group-5"
                                >
                                <b-form-input 
                                    id="input-5" 
                                    v-model="form.instagram"
                                    placeholder="ID instagram Anda"
                                    style="border-radius: 3px; font-size: 0.9rem;"
                                    >
                                </b-form-input>
                                </b-form-group>

                                <b-form-group 
                                id="input-group-6"
                                >
                                <b-form-select 
                                    id="input-6" 
                                    v-model="form.infaq" 
                                    :options="infaq" 
                                    required
                                    style="border-radius: 3px; font-size: 0.9rem;"
                                    >
                                </b-form-select>
                                </b-form-group>
                                
                                <b-button block type="submit" style="background-color: #d71149; border-color:  #d71149; border-radius: 3px">DAFTAR</b-button>
                            </div>

                            <div class="state-1" v-if="state_form">
                                <b-form-group
                                label="Tentukan password demi keamanan akun Anda"
                                id="input-group-7"
                                >
                                <b-form-input 
                                    id="input-7"
                                    v-model="form.password" 
                                    required
                                    type="password"
                                    placeholder="Password"
                                    style="border-radius: 3px; font-size: 0.9rem;"
                                    >
                                </b-form-input>
                                </b-form-group>

                                <b-form-group
                                id="input-group-8"
                                >
                                <b-form-input 
                                    id="input-8"
                                    v-model="form.confirm_password" 
                                    required
                                    type="password"
                                    placeholder="Confirm password"
                                    style="border-radius: 3px; font-size: 0.9rem;"
                                    >
                                </b-form-input>
                                </b-form-group>

                                <b-button block type="submit" style="background-color: #d71149; border-color:  #d71149; border-radius: 3px">SELESAI</b-button>

                            </div>

                            <!-- <p class="link-login-desc">
                                Sudah punya akun? <a class="link-login" href="/login">Masuk</a>
                            </p> -->
                        </b-form>
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
            form: {
            email: "",
            name: "",
            whatsapp: "",
            address: "",
            instagram: "",
            infaq: null,
            checked: []
            },
            infaq: [
            { text: "Jumlah infaq rutin", value: null },
            "Rp100.000",
            "Rp1.000.000"
            ],
            show: true,
            state_form: 0
        };
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                if (!this.state_form) {
                    this.state_form = 2
                    return
                }
                alert(JSON.stringify(this.form))
            }
        },
        components: {NavBar}
    };
</script>

<style scoped>
    .orang-baik {
        display: none;
    }

    .form-box {
        margin: auto;
        margin-top: 30px;
        width: 80%;
        padding: 10px;
        padding-bottom: 50px;
        overflow: auto;
    }

    .form-box > h5 {
        text-align: left; margin: 0px; margin-bottom: 20px;
    }

    .greeting-2 {
        font-size: 15px;
        margin-bottom: 30px;
    }
    
    .link-login {
        color: #d71149;
    }

    .link-login-desc {
        font-size: 15px;
        text-align: center;
        margin-top: 10px;
    }

    @media screen and (min-width: 540px) {
        .form-box {
            display: block;
            margin: auto;
            width: 90%;
            background-color: #fff;
            border-radius: 3px;
            margin-bottom: 80px;
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
        .orang-baik {
            display: block; 
            font: 400 .9375rem Open Sans,sans-serif; 
            font-weight: 300!important;
        }
        .greeting {
            width: 50%;
        }
        .greeting-2 {
            display: none;
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
