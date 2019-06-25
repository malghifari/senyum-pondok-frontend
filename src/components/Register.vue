<template>
    <div class="form-box">
        <h5>
            Daftar Menjadi <strong>#OrangTuaAsuh</strong>
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
                    placeholder="Nama Anda *"
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
                    :state="whatsapp_availability"
                    @keyup="is_whatsapp_available"
                    >
                </b-form-input>
                <b-form-invalid-feedback :state="whatsapp_availability">
                    Nomor Whatsapp sudah digunakan
                </b-form-invalid-feedback>
                <b-form-valid-feedback :state="whatsapp_availability">
                    Nomor Whatsapp dapat digunakan
                </b-form-valid-feedback>
                </b-form-group>

                <b-form-group 
                id="input-group-3b"
                >
                <b-form-input 
                    id="input-3b" 
                    v-model="form.born_year" 
                    required 
                    placeholder="Tahun kelahiran Anda *"
                    style="border-radius: 3px; font-size: 0.9rem;"
                    :state="bornYearValidity"
                    @keyup="validateBornYear"                                    
                    >
                </b-form-input>
                <b-form-invalid-feedback :state="bornYearValidity">
                    Tahun kelahiran tidak valid
                </b-form-invalid-feedback>
                <b-form-valid-feedback :state="bornYearValidity">
                    Tahun kelahiran valid
                </b-form-valid-feedback>
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
                    v-model="selected_infaq" 
                    :options="infaq_option" 
                    required
                    style="border-radius: 3px; font-size: 0.9rem;"
                    >
                </b-form-select>
                </b-form-group>

                <b-form-group 
                id="input-group-6a"
                v-if="selected_infaq == 'Isi sendiri'" 
                >
                    <currency-formatter v-model="form.infaq"></currency-formatter>
                </b-form-group>

                <b-button block type="submit" style="background-color: #d71149; border-color:  #d71149; border-radius: 3px">DAFTAR</b-button>
            </div>

            <div class="state-1" v-if="state_form">
                <div style="margin-bottom: 10px;">
                    <b-button @click="backStateForm" style="background-color: #d71149; border-color:  #d71149; border-radius: 3px; font-size: 12px;">BACK</b-button>
                </div>
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

                <b-button block type="submit" style="background-color: #d71149; border-color:  #d71149; border-radius: 3px; padding:0; padding-bottom:0.9vh">
                    <div v-if="!loading">
                        SELESAI
                    </div>
                    <b-spinner v-else style="width: 1rem; height: 1rem;"  label="Loading"></b-spinner>
                </b-button>

            </div>

            <p class="link-login-desc">
                Sudah punya akun? <a class="link-login" href="/login">Masuk</a>
            </p>
        </b-form>
    </div>
</template>

<script>
    import CurrencyFormatter from "./CurrencyFormatter"
    import axios from 'axios'

    export default {
        data() {
            return {
                form: {
                    email: "",
                    name: "",
                    whatsapp: "",
                    address: "",
                    instagram: "",
                    infaq: 500000,
                    password: "",
                    confirm_password: "",
                    born_year: ""
                },
                infaq_option: [
                    { text: "Jumlah infaq rutin", value: null },
                    "Rp100.000",
                    "Rp300.000",
                    "Rp500.000",
                    "Isi sendiri"
                ],
                infaq_dict: {
                    "Rp100.000": 100000,
                    "Rp300.000": 300000,
                    "Rp500.000": 500000,
                },
                selected_infaq: null,
                show: true,
                state_form: 0,
                access_token: '',
                role: '',
                showMessage: false,
                message: '',
                loading: false,
                whatsapp_availability: null,
                bornYearValidity: null
            };
        },
        watch: {
            access_token(new_token) {
                localStorage.access_token = new_token
            },
            role(new_role) {
                localStorage.role = new_role
            }
        },
        mounted() {
            if (localStorage.access_token) {
                this.access_token = localStorage.access_token
            }
            if (localStorage.role) {
                this.role = localStorage.role
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault()
                if (!this.state_form) {
                    if (this.bornYearValidity && this.whatsapp_availability) {
                        this.state_form = 1
                        return
                    }
                    return
                }
                if (this.form.password !== this.form.confirm_password) {
                    return
                }
                const payload = {
                    email: this.form.email,
                    name: this.form.name,
                    whatsapp: this.form.whatsapp,
                    address: this.form.address,
                    instagram: this.form.instagram,
                    infaq: this.getInfaq(),
                    password: this.form.password,
                    role: "oka",
                    born_year: this.form.born_year
                }
                console.log(payload)
                this.loading = true
                this.register(payload)
            },
            register(payload) {
                const path = process.env.VUE_APP_BASE_API + 'user/register'
                axios.post(path, payload)
                    .then((res) => {
                        console.log(res)
                        this.access_token = res.data.data.access_token
                        this.role = res.data.data.role
                        this.$router.push("thank-you")
                    })
                    .catch((error) => {
                        this.state_form = 0
                        this.message = "Mohon maaf pendaftaran gagal. Hubungi kami untuk bantuan 087848471386 (WA)"
                        this.showMessage = true
                        this.loading = false
                        this.$router.push("register")
                        console.log(error)
                    });
            },
            getInfaq() {
                if (this.selected_infaq == "Isi sendiri") {
                    return this.form.infaq
                } else {
                    return this.infaq_dict[this.selected_infaq]
                }
            },
            getBornYear() {
                let now = new Date().getFullYear()
                return now - this.form.age
            },
            backStateForm(evt) {
                evt.preventDefault()
                this.state_form = 0
            },
            is_whatsapp_available() {
                if (!this.form.whatsapp) {
                    this.whatsapp_availability = null   
                    return
                }
                const path = process.env.VUE_APP_BASE_API + 'user/check-whatsapp'
                axios.post(path, {whatsapp: this.form.whatsapp})
                    .then((res) => {
                        this.whatsapp_availability = res.data.data
                    })
                    .catch((error) => {
                        console.log(error)
                    });
            },
            validateBornYear() {
                this.bornYearValidity = /^\d+$/.test(this.form.born_year)
            }
        },
        components: {CurrencyFormatter}
    };
</script>

<style scoped>
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

    .available{
        color: green;
    }
    .notavailable{
        color: red;
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
        .greeting-2 {
            display: none;
        }
        .form-box > h5 {
            text-align: center; margin: 20px; margin-bottom: 30px;
        }
    }
</style>
