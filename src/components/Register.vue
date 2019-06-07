<template>
    <div style="background-color: #f2f3f4; height: 100%;">
        <nav-bar></nav-bar>
        <div>
            <b-row class="justify-content-md-center" style="margin-top: 70px ">
                <b-col cols="3" style="font: 400 .9375rem Open Sans,sans-serif; font-weight: 300!important;">
                    <h2>
                        Hai #OrangBaik
                    </h2>
                    <p style="width: 50%">
                        Selamat bergabung di Pondok Senyum Indonesia, rumah bagi adik-adik istimewa dari pelosok Jawa Barat
                    </p>
                </b-col>
                <b-col cols="3">
                    <div class="form-box">
                        <h5 style="text-align: center; margin: 20px; margin-bottom: 30px;">
                            Daftar Menjadi <strong>#OrangTuaKakakAsuh</strong>
                        </h5>
                        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                            <b-form-group 
                            id="input-group-1"
                            >
                            <b-form-input 
                                id="input-1" 
                                v-model="form.name" 
                                required 
                                placeholder="Nama lengkap Anda *"
                                style="border-radius: 3px"
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
                                style="border-radius: 3px"
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
                                style="border-radius: 3px"
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
                                style="border-radius: 3px"
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
                                style="border-radius: 3px"
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
                                style="border-radius: 3px"
                                >
                            </b-form-select>
                            </b-form-group>

                            <b-button block type="submit" style="background-color: #d71149; border-color:  #d71149; border-radius: 3px">Submit</b-button>
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
            infaq: null,
            checked: []
            },
            infaq: [
            { text: "Jumlah infaq rutin", value: null },
            "Rp100.000",
            "Rp1.000.000"
            ],
            show: true
        };
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault();
                alert(JSON.stringify(this.form));
            },
            onReset(evt) {
                evt.preventDefault();
                // Reset our form values
                this.form.email = "";
                this.form.name = "";
                this.form.food = null;
                this.form.checked = [];
                // Trick to reset/clear native browser form validation state
                this.show = false;
                this.$nextTick(() => {
                this.show = true;
                });
            }
        },
        components: {NavBar}
    };
</script>

<style scoped>
    .form-box {
        display: block;
        margin: auto;
        width: 80%;
        background-color: #fff;
        border-radius: 3px;
        box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24);
        padding: 30px;
    }
</style>
